package com.casamento.adapters.in.rest;

import com.casamento.adapters.in.rest.dto.GuestsToConfirmDTO;
import com.casamento.application.service.GuestService;
import com.casamento.domain.model.Guest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/guests")
@CrossOrigin(origins = "*")
public class GuestController {
    private final GuestService service;

    public GuestController(GuestService service) {
        this.service = service;
    }

    @GetMapping("/get-all-non-confirmed-guests")
    public ResponseEntity<List<Guest>> getAllNonConfirmedGuests() {
        return ResponseEntity.ok(this.service.getAllNonConfirmedGuests());
    }

    @GetMapping("/search-non-confirmed")
    public ResponseEntity<List<Guest>> searchAllNonConfirmedGuestsByName(@RequestParam("name") String name) {
        return ResponseEntity.ok(this.service.searchAllNonConfirmedGuestsByName(name));
    }

    @GetMapping("/find-all-non-confirmed-guests-by-group-code/{groupCode}")
    public ResponseEntity<List<Guest>> findAllNonConfirmedGuestsByGroupCode(@PathVariable(name = "groupCode") String groupCode) {
        return ResponseEntity.ok(this.service.findAllNonConfirmedGuestsByGroupCode(groupCode));
    }

    @PostMapping("/confirm-presence")
    public void confirmPresence(@RequestBody GuestsToConfirmDTO guestsToConfirm) {
        service.confirmPresence(guestsToConfirm);
    }
}
