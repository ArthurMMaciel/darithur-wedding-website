package com.casamento.config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfig {
    public static final String EXCHANGE = "notifications.exchange";
    public static final String EMAIL_QUEUE = "notifications.email";
    public static final String WHATSAPP_QUEUE = "notifications.whatsapp";

    @Bean
    public TopicExchange notificationsExchange() {
        return new TopicExchange(EXCHANGE);
    }

    @Bean
    public Queue emailQueue() {
        return new Queue(EMAIL_QUEUE, true);
    }

    @Bean
    public Queue whatsappQueue() {
        return new Queue(WHATSAPP_QUEUE, true);
    }

    @Bean
    public Binding emailBinding(Queue emailQueue, TopicExchange notificationsExchange) {
        return BindingBuilder.bind(emailQueue).to(notificationsExchange).with("email.send");
    }

    @Bean
    public Binding whatsappBinding(Queue whatsappQueue, TopicExchange notificationsExchange) {
        return BindingBuilder.bind(whatsappQueue).to(notificationsExchange).with("whatsapp.send");
    }

    @Bean
    public RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory) {
        return new RabbitTemplate(connectionFactory);
    }
}
