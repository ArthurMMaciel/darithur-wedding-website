package com.casamento.adapters.out.persistence.rabbitmq;

import com.casamento.adapters.in.rest.dto.EmailJob;
import com.casamento.adapters.out.persistence.EmailPublisher;
import com.casamento.config.RabbitConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.amqp.rabbit.core.RabbitTemplate;

@Component
@RequiredArgsConstructor
public class EmailPublisherImpl implements EmailPublisher {
    private final RabbitTemplate rabbitTemplate;

    @Override
    public void publish(EmailJob job) {
        rabbitTemplate.convertAndSend(
                RabbitConfig.EXCHANGE,
                "email.send",
                job
        );
    }
}
