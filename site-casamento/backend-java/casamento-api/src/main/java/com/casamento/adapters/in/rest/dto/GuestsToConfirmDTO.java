package com.casamento.adapters.in.rest.dto;

import com.casamento.config.jackson.FlexibleLongListDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GuestsToConfirmDTO {
    @JsonDeserialize(using = FlexibleLongListDeserializer.class)
    public List<Long> guestsToConfirmIds;
    public String guestHeaderEmail;
    public String guestHeaderPhone;
    public String guestHeaderName;
}
