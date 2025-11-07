# Variáveis de Ambiente Necessárias

Para executar a aplicação, você precisa configurar as seguintes variáveis de ambiente:

## Banco de Dados PostgreSQL
- SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/postgres
- SPRING_DATASOURCE_USERNAME=postgres
- SPRING_DATASOURCE_PASSWORD=darithur47

## RabbitMQ
Removido do projeto. Não é mais necessário.

## SendGrid (Email)
- SENDGRID_API_KEY=sua-chave-sendgrid-aqui
- SENDGRID_EMAIL_FROM=arthurmartinsmaciel3@gmail.com

## Evolution API (WhatsApp)
- EVOLUTION_API_BASE_URL=http://localhost:8080
- EVOLUTION_API_KEY=casamento-seguro-123
- EVOLUTION_INSTANCE=casamento
- EVOLUTION_GROUP_ID=1203630XXXXXXXX@g.us

## Como usar:
1. Configure essas variáveis no seu sistema operacional
2. Ou crie um arquivo .env na raiz do projeto
3. Ou configure no docker-compose.yml
