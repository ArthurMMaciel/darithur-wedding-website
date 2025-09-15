package com.casamento.adapters.in.rest.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WhatsAppJob {
    private String to;
    private String text;
    private String messageId;
    private Map<String, Object> metadata;
}
