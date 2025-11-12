package com.casamento.config.jackson;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.node.ArrayNode;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Deserializa uma lista de Long a partir de array JSON ou string "1,2,3".
 */
public class FlexibleLongListDeserializer extends JsonDeserializer<List<Long>> {
    @Override
    public List<Long> deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        List<Long> out = new ArrayList<>();
        JsonToken token = p.currentToken();
        if (token == JsonToken.START_ARRAY) {
            ArrayNode node = p.getCodec().readTree(p);
            node.forEach(n -> {
                if (n.isNumber()) out.add(n.longValue());
                else if (n.isTextual()) {
                    try { out.add(Long.parseLong(n.textValue().trim())); } catch (NumberFormatException ignored) {}
                }
            });
            return out;
        }
        String text = p.getValueAsString("");
        if (!text.isBlank()) {
            for (String part : text.split("[,;\\s]+")) {
                if (part == null || part.isBlank()) continue;
                try { out.add(Long.parseLong(part.trim())); } catch (NumberFormatException ignored) {}
            }
        }
        return out;
    }
}

