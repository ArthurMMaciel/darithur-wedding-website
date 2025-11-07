package com.casamento.adapters.out.persistence.sendgrid;

import com.casamento.adapters.in.rest.dto.EmailJob;
import com.casamento.adapters.out.persistence.EmailPublisher;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Component
@ConditionalOnExpression("'${app.rabbit.enabled:false}' == 'false' and !'${sendgrid.api.key:}'.isEmpty()")
public class SendgridEmailPublisher implements EmailPublisher {
    private static final Logger log = LoggerFactory.getLogger(SendgridEmailPublisher.class);

    private final RestTemplate rest = new RestTemplate();

    @Value("${sendgrid.api.key:}")
    private String apiKey;

    @Value("${sendgrid.email.from:no-reply@example.com}")
    private String from;

    @Override
    public void publish(EmailJob job) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setBearerAuth(apiKey);
            headers.setContentType(MediaType.APPLICATION_JSON);

            Map<String, Object> body = Map.of(
                    "personalizations", List.of(Map.of("to", List.of(Map.of("email", job.getTo())))),
                    "from", Map.of("email", from),
                    "subject", job.getSubject(),
                    "content", List.of(Map.of("type", "text/plain", "value", job.getText()))
            );

            rest.postForEntity("https://api.sendgrid.com/v3/mail/send", new HttpEntity<>(body, headers), String.class);
            log.info("[Sendgrid] Email enviado para {}", job.getTo());
        } catch (Exception e) {
            log.error("[Sendgrid] Falha ao enviar e-mail: {}", e.getMessage());
        }
    }
}

