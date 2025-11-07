package com.casamento.adapters.out.persistence.nop;

import com.casamento.adapters.in.rest.dto.EmailJob;
import com.casamento.adapters.out.persistence.EmailPublisher;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

@Component
@ConditionalOnProperty(prefix = "app.rabbit", name = "enabled", havingValue = "false", matchIfMissing = true)
public class NopEmailPublisher implements EmailPublisher {
    private static final Logger log = LoggerFactory.getLogger(NopEmailPublisher.class);

    @Override
    public void publish(EmailJob job) {
        // No-op in environments without RabbitMQ. Log for traceability.
        log.info("[NopEmailPublisher] Email job suppressed (Rabbit disabled): to={} subject={}", job.getTo(), job.getSubject());
    }
}
