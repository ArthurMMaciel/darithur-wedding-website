package com.casamento.adapters.out.persistence;

import com.casamento.adapters.in.rest.dto.EmailJob;

public interface EmailPublisher {
    void publish(EmailJob job);
}
