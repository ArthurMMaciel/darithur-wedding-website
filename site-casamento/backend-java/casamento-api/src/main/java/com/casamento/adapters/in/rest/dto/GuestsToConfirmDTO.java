package com.casamento.adapters.in.rest.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigInteger;
import java.util.ArrayList;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GuestsToConfirmDTO {
    public ArrayList<BigInteger> guestsToConfirmIds;
    public String guestHeaderEmail;
    public String guestHeaderPhone;
    public String guestHeaderName;
}
