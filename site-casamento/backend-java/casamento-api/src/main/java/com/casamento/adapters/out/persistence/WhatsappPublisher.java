package com.casamento.adapters.out.persistence;

import com.casamento.adapters.in.rest.dto.WhatsAppJob;

public interface WhatsappPublisher {
    void publish(WhatsAppJob job);
}
