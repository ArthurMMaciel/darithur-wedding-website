package com.casamento.application.service;

import com.casamento.adapters.out.persistence.GuestRepository;
import com.casamento.domain.model.Guest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GuestService {
    private final GuestRepository repository;

    public GuestService(GuestRepository repository) {
        this.repository = repository;
    }

    public List<Guest> getAllNonConfirmedGuests() {
        return this.repository.getAllNonConfirmedGuests();
    }

    public List<Guest> findAllNonConfirmedGuestsByGroupCode(String groupCode) {
        return this.repository.findAllNonConfirmedGuestsByGroupCode(groupCode);
    }

    public void confirmPresence(String guestsToConfirmIds) {
        this.repository.updateGuestConfirmedById(guestsToConfirmIds);
    }
}
