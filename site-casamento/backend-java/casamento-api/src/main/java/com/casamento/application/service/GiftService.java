package com.casamento.application.service;

import com.casamento.adapters.in.rest.dto.GiftDTO;
import com.casamento.adapters.out.persistence.GiftRepository;
import com.casamento.domain.model.Gift;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GiftService {
    private final GiftRepository repository;

    public GiftService(GiftRepository repository) {
        this.repository = repository;
    }

    public List<GiftDTO> getAllGifts() {
        return this.repository.getAllGifts().stream()
                .map(GiftDTO::new)
                .toList();
    }
}
