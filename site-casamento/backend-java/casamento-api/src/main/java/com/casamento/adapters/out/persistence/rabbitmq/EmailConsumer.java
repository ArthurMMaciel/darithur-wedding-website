package com.casamento.adapters.out.persistence.rabbitmq;

import com.casamento.adapters.in.rest.dto.EmailJob;
import com.casamento.config.RabbitConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class EmailConsumer {
    private final RestTemplate restTemplate = new RestTemplate();

    @Value("${sendgrid.api.key:}")
    private String sendgridApiKey;

    @Value("${sendgrid.email.from:no-reply@example.com}")
    private String emailFrom;

    @RabbitListener(queues = RabbitConfig.EMAIL_QUEUE)
    public void consume(EmailJob job) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setBearerAuth(sendgridApiKey);
            headers.setContentType(MediaType.APPLICATION_JSON);

            Map<String, Object> body = Map.of(
                    "personalizations", List.of(Map.of("to", List.of(Map.of("email", job.getTo())))),
                    "from", Map.of("email", emailFrom),
                    "subject", job.getSubject(),
                    "content", List.of(Map.of("type", "text/plain", "value", job.getText()))
            );

            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);
            restTemplate.postForEntity("https://api.sendgrid.com/v3/mail/send", entity, String.class);

            System.out.println("✅ E-mail enviado para " + job.getTo());

        } catch (Exception e) {
            System.err.println("❌ Falha ao enviar e-mail: " + e.getMessage());
        }
    }
}
