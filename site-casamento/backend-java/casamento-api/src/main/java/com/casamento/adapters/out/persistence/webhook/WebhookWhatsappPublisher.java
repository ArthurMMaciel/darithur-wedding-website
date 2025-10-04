package com.casamento.adapters.out.persistence.webhook;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Component
@RequiredArgsConstructor
public class WebhookWhatsappPublisher {

    private final RestTemplate restTemplate = new RestTemplate();

    @Value("${evolution.api.base-url}")
    private String baseUrl;

    @Value("${evolution.api.key}")
    private String apiKey;

    @Value("${evolution.instance}")
    private String instance;

    @Value("${evolution.group.id}")
    private String groupId;

    public void sendToGroup(String message) {
        try {
            String url = String.format("%s/message/sendText/%s", baseUrl, instance);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("apikey", apiKey);

            Map<String, Object> payload = Map.of(
                    "number", groupId,
                    "text", message
            );

            restTemplate.postForEntity(url, new HttpEntity<>(payload, headers), String.class);
            System.out.println("✅ Mensagem enviada para grupo via Evolution API");
        } catch (Exception e) {
            System.err.println("❌ Falha ao enviar mensagem para grupo: " + e.getMessage());
        }
    }

    public void sendToGuest(String phone, String message) {
        try {
            String url = String.format("%s/message/sendText/%s", baseUrl, instance);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("apikey", apiKey);

            String remoteJid = phone + "@s.whatsapp.net";

            Map<String, Object> payload = Map.of(
                    "number", remoteJid,
                    "text", message
            );

            restTemplate.postForEntity(url, new HttpEntity<>(payload, headers), String.class);
            System.out.println("✅ Mensagem enviada para convidado via Evolution API");
        } catch (Exception e) {
            System.err.println("❌ Falha ao enviar mensagem para convidado: " + e.getMessage());
        }
    }
}
