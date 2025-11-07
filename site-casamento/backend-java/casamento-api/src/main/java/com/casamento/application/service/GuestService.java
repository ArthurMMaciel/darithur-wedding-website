package com.casamento.application.service;

import com.casamento.adapters.in.rest.confirmmessage.ConfirmationMessageTemplate;
import com.casamento.adapters.in.rest.dto.EmailJob;
import com.casamento.adapters.in.rest.dto.GuestsToConfirmDTO;
import com.casamento.adapters.out.persistence.EmailPublisher;
import com.casamento.adapters.out.persistence.GuestRepository;
import com.casamento.adapters.out.persistence.webhook.WebhookWhatsappPublisher;
import com.casamento.domain.model.Guest;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class GuestService {
    private final EmailPublisher emailPublisher;
    private final GuestRepository repository;
    private final WebhookWhatsappPublisher webhookWhatsappPublisher;

    public GuestService(EmailPublisher emailPublisher,
                        GuestRepository repository,
                        WebhookWhatsappPublisher webhookWhatsappPublisher) {
        this.emailPublisher  = emailPublisher;
        this.repository = repository;
        this.webhookWhatsappPublisher = webhookWhatsappPublisher;
    }

    public List<Guest> getAllNonConfirmedGuests() {
        return this.repository.getAllNonConfirmedGuests();
    }

    public List<Guest> searchAllNonConfirmedGuestsByName(String namePart) {
        return this.repository.searchAllNonConfirmedGuestsByName(namePart);
    }

    public List<Guest> findAllNonConfirmedGuestsByGroupCode(String groupCode) {
        return this.repository.findAllNonConfirmedGuestsByGroupCode(groupCode);
    }

    @Transactional
    public void confirmPresence(GuestsToConfirmDTO guestsToConfirm) {
        ArrayList<BigInteger> guestsToConfirmIds = guestsToConfirm.getGuestsToConfirmIds();
        String guestHeaderEmail = guestsToConfirm.getGuestHeaderEmail();
        String guestHeaderPhone = guestsToConfirm.getGuestHeaderPhone();

        this.repository.updateGuestConfirmedById(guestsToConfirmIds);

        List<String> guestsNames = this.repository.getGuestNameById(guestsToConfirmIds);

        String headerName = guestsToConfirm.getGuestHeaderName();
        String companionsNames = formatCompanionsNames(guestsNames, headerName);

        String msgGuest = String.format(ConfirmationMessageTemplate.GUEST.getTemplate(), headerName, companionsNames);
        String msgCouple = String.format(ConfirmationMessageTemplate.COUPLE.getTemplate(),
                                         headerName,
                                         guestHeaderEmail,
                                         guestHeaderPhone,
                                         companionsNames,
                                         guestsNames.size());

        this.sendGuestConfirmPresenceMessage(msgGuest, guestHeaderEmail, guestHeaderPhone);
        this.sendCoupleConfirmPresenceMessage(msgCouple);
    }

    private String formatCompanionsNames(List<String> guestsNames, String headerName) {
        List<String> companionsNames = guestsNames.stream()
                .filter(n -> !n.equalsIgnoreCase(headerName))
                .toList();

        if (companionsNames.isEmpty()) {
            return "Sem acompanhantes";
        }

        return companionsNames.stream()
                .map(n -> "• " + n)
                .collect(Collectors.joining("\n"));
    }

    private void sendGuestConfirmPresenceMessage(String msgGuest,
                                                 String guestEmail,
                                                 String guestPhone) {
        EmailJob emailJob = new EmailJob(
                guestEmail,
                "Confirmação de presença — Arthur & Dari",
                msgGuest,
                UUID.randomUUID().toString(),
                Map.of("kind", "RSVP_CONFIRMATION", "target", "guest")
        );
        emailPublisher.publish(emailJob);

        String normalizedGuestPhone = normalizeE164(guestPhone);
        webhookWhatsappPublisher.sendToGuest(normalizedGuestPhone, msgGuest);
    }

    private String normalizeE164(String phone) {
        String digits = phone.replaceAll("\\D", "");
        if (phone.startsWith("+")) return "+" + digits;
        return "55" + digits;
    }

    private void sendCoupleConfirmPresenceMessage(String msgCouple) {
        EmailJob emailJob = new EmailJob(
                "arthurmartinsmaciel3@gmail.com",
                "Confirmação de presença",
                msgCouple,
                UUID.randomUUID().toString(),
                Map.of("kind", "RSVP_CONFIRMATION", "target", "couple")
        );
        emailPublisher.publish(emailJob);
        webhookWhatsappPublisher.sendToGroup(msgCouple);
    }
}
