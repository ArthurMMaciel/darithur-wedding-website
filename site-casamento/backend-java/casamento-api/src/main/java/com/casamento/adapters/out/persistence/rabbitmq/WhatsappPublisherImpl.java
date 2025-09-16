package com.casamento.adapters.out.persistence.rabbitmq;

import com.casamento.adapters.in.rest.dto.WhatsAppJob;
import com.casamento.adapters.out.persistence.WhatsappPublisher;
import com.casamento.config.RabbitConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class WhatsappPublisherImpl implements WhatsappPublisher {
    private final RabbitTemplate rabbitTemplate;

    @Override
    public void publish(WhatsAppJob job) {
        rabbitTemplate.convertAndSend(
                RabbitConfig.EXCHANGE,
                "whatsapp.send",
                job
        );
    }
}
