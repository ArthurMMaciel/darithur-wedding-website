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
public class EmailJob {
    private String to;
    private String subject;
    private String text;
    private String messageId;
    private Map<String, Object> metadata;
}
