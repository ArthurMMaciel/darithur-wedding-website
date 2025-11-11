package com.casamento.adapters.in.rest.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GuestsToConfirmDTO {
    public String guestsToConfirmIds;
    public String guestHeaderEmail;
    public String guestHeaderPhone;
    public String guestHeaderName;
}
