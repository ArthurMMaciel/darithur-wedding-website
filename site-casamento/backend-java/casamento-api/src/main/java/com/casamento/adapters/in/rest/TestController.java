package com.casamento.adapters.in.rest;

import com.casamento.adapters.out.persistence.webhook.WebhookWhatsappPublisher;
import com.casamento.adapters.in.rest.dto.EmailJob;
import com.casamento.adapters.out.persistence.EmailPublisher;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {
    private final WebhookWhatsappPublisher whatsapp;
    private final EmailPublisher emailPublisher;

    public TestController(WebhookWhatsappPublisher whatsapp, EmailPublisher emailPublisher) {
        this.whatsapp = whatsapp;
        this.emailPublisher = emailPublisher;
    }

    @GetMapping("/whatsapp/guest")
    public ResponseEntity<String> sendWhatsappToGuest(@RequestParam("phone") String phone,
                                                      @RequestParam(value = "text", defaultValue = "Mensagem de teste") String text) {
        whatsapp.sendToGuest(phone, text);
        return ResponseEntity.ok("ok");
    }

    @GetMapping("/email")
    public ResponseEntity<String> sendEmail(@RequestParam("to") String to,
                                            @RequestParam(value = "subject", defaultValue = "Teste") String subject,
                                            @RequestParam(value = "text", defaultValue = "Mensagem de teste") String text) {
        emailPublisher.publish(new EmailJob(to, subject, text, "test", java.util.Map.of("kind", "TEST")));
        return ResponseEntity.ok("ok");
    }
}

