package com.casamento.adapters.in.rest;

import com.casamento.application.service.GuestService;
import com.casamento.domain.model.Guest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/guests")
public class GuestController {
    private final GuestService service;

    public GuestController(GuestService service) {
        this.service = service;
    }

    @GetMapping("/get-all-non-confirmed-guests")
    public ResponseEntity<List<Guest>> getAllNonConfirmedGuests() {
        return ResponseEntity.ok(this.service.getAllNonConfirmedGuests());
    }

    @GetMapping("/find-all-non-confirmed-guests-by-group-code/{groupCode}")
    public ResponseEntity<List<Guest>> findAllNonConfirmedGuestsByGroupCode(@PathVariable(name = "groupCode") String groupCode) {
        return ResponseEntity.ok(this.service.findAllNonConfirmedGuestsByGroupCode(groupCode));
    }

    @PutMapping("/confirm")
    public void confirmPresence(@RequestParam(name = "guestsToConfirmIds") List<Long> guestsToConfirmIds) {
        service.confirmPresence(guestsToConfirmIds);
    }
}
