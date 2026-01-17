import { serve } from "https://deno.land/std@0.203.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
}

type GuestRow = {
  id: number;
  confirmed: boolean;
  group_code: string | null;
};

const supabase = createClient(supabaseUrl, serviceRoleKey);
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
  }

  let body: { guestIds?: unknown };
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400, headers: corsHeaders });
  }

  const guestIds = Array.isArray(body.guestIds)
    ? body.guestIds.map((id) => Number(id)).filter((id) => Number.isFinite(id))
    : [];

  if (guestIds.length === 0) {
    return new Response("guestIds required", { status: 400, headers: corsHeaders });
  }

  const { data: guests, error } = await supabase
    .from("guest")
    .select("id, confirmed, group_code")
    .in("id", guestIds)
    .returns<GuestRow[]>();

  if (error) {
    return new Response("DB error", { status: 500, headers: corsHeaders });
  }

  if (!guests || guests.length !== guestIds.length) {
    return new Response("Guest not found", { status: 404, headers: corsHeaders });
  }

  const groupCode = guests[0]?.group_code;
  const invalid = guests.some((guest) => guest.confirmed || guest.group_code !== groupCode);
  if (invalid) {
    return new Response("Invalid guest state", { status: 409, headers: corsHeaders });
  }

  const { error: updateError } = await supabase
    .from("guest")
    .update({ confirmed: true })
    .in("id", guestIds);

  if (updateError) {
    return new Response("Update failed", { status: 500, headers: corsHeaders });
  }

  return new Response(JSON.stringify({ ok: true, confirmedCount: guestIds.length }), {
    status: 200,
    headers: { ...corsHeaders, "content-type": "application/json" }
  });
});
