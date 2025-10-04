package com.casamento.adapters.in.rest.confirmmessage;

public enum ConfirmationMessageTemplate {

    GUEST("""
        Oi, %s! 🎉

        Sua presença e de seus acompanhantes está CONFIRMADA no nosso casamento! 💍

        Acompanhantes:
        %s

        Data: 25/04/2026
        Cerimônia: Igreja São José Operário, Praça Emíliano Perneta, s/n - Vila Operária, Maringá - PR, 87050-070
        Recepção: Buffet Paradise, Av. Paranavaí, 2219 - Parque Industrial Bandeirantes, Maringá - PR, 87070-130

        Nós, Arthur e Dari, estamos muito felizes em celebrar esse dia especial com vocês! ❤️

        Qualquer dúvida, pode nos perguntar.
        """),

    COUPLE("""
        Confirmação registrada ✅

        Convidado principal: %s
        Contato: e-mail %s | telefone %s
        Acompanhantes:
        %s
        Total de pessoas: %d
        """);

    private final String template;
    ConfirmationMessageTemplate(String template) { this.template = template; }
    public String getTemplate() { return template; }
}
