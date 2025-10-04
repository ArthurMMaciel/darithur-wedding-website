package com.casamento.adapters.in.rest;

import com.casamento.adapters.in.rest.dto.GiftDTO;
import com.casamento.application.service.GiftService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/gift")
public class GiftController {
    private final GiftService service;

    public GiftController(GiftService service) {
        this.service = service;
    }

    @GetMapping("/get-all-gifts")
    public ResponseEntity<List<GiftDTO>> getAllGifts() {
        return ResponseEntity.ok(this.service.getAllGifts());
    }
}
