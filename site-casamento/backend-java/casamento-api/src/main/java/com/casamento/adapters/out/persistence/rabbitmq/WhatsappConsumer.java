package com.casamento.adapters.out.persistence.rabbitmq;

import com.casamento.adapters.in.rest.dto.WhatsAppJob;
import com.casamento.config.RabbitConfig;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.client.RestTemplate;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
@ConditionalOnProperty(prefix = "app.rabbit", name = "enabled", havingValue = "true", matchIfMissing = false)
public class WhatsappConsumer {
    private final RestTemplate restTemplate = new RestTemplate();

    @RabbitListener(queues = RabbitConfig.WHATSAPP_QUEUE)
    public void consume(WhatsAppJob job) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setBearerAuth(System.getenv("WA_ACCESS_TOKEN"));
            headers.setContentType(MediaType.APPLICATION_JSON);

            Map<String, Object> body = Map.of(
                    "messaging_product", "whatsapp",
                    "to", job.getTo(),
                    "type", "text",
                    "text", Map.of("body", job.getText())
            );

            String url = String.format("https://graph.facebook.com/v20.0/%s/messages",
                    System.getenv("WA_PHONE_NUMBER_ID"));

            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);
            restTemplate.postForEntity(url, entity, String.class);

            System.out.println("✅ WhatsApp enviado para " + job.getTo());

        } catch (Exception e) {
            System.err.println("❌ Falha ao enviar WhatsApp: " + e.getMessage());
        }
    }
}
