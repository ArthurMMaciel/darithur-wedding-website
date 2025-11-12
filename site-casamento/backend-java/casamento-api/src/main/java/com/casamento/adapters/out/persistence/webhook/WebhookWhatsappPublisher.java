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

    // Base do WPP Connector, ex.: http://64.225.13.52:21465/api/casamento
    @Value("${wpp.connector.base-url:http://localhost:21465/api/casamento}")
    private String connectorBaseUrl;

    // Reaproveita a env do grupo já existente
    @Value("${evolution.group.id:}")
    private String groupId;

    public void sendToGroup(String message) {
        try {
            String url = connectorBaseUrl + "/send-message";

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            Map<String, Object> payload = Map.of(
                    "phone", groupId,
                    "isGroup", true,
                    "message", message
            );

            var resp = restTemplate.postForEntity(url, new HttpEntity<>(payload, headers), String.class);
            if (!resp.getStatusCode().is2xxSuccessful()) {
                throw new RuntimeException("WPP Connector HTTP " + resp.getStatusCode());
            }
            System.out.println("Mensagem enviada para grupo via WPP Connector");
        } catch (Exception e) {
            System.err.println("Falha ao enviar mensagem para grupo: " + e.getMessage());
            throw new RuntimeException("Falha ao enviar WhatsApp para grupo", e);
        }
    }

    public void sendToGuest(String phone, String message) {
        try {
            String url = connectorBaseUrl + "/send-message";

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            String normalized = normalizeE164(phone);

            Map<String, Object> payload = Map.of(
                    "phone", normalized,
                    "isGroup", false,
                    "message", message
            );

            var resp = restTemplate.postForEntity(url, new HttpEntity<>(payload, headers), String.class);
            if (!resp.getStatusCode().is2xxSuccessful()) {
                throw new RuntimeException("WPP Connector HTTP " + resp.getStatusCode());
            }
            System.out.println("Mensagem enviada para convidado via WPP Connector");
        } catch (Exception e) {
            System.err.println("Falha ao enviar mensagem para convidado: " + e.getMessage());
            throw new RuntimeException("Falha ao enviar WhatsApp para convidado", e);
        }
    }

    private String normalizeE164(String phone) {
        if (phone == null) return "";
        String digits = phone.replaceAll("\\D", "");
        if (phone.startsWith("+")) return "+" + digits;
        if (digits.startsWith("55")) return digits;
        return "55" + digits;
    }
}
