# Use a imagem oficial do OpenJDK 21
FROM openjdk:21-jdk-slim

# Define o diretório de trabalho
WORKDIR /app

# Copia o arquivo JAR da aplicação
COPY target/casamento-api-0.0.1-SNAPSHOT.jar app.jar

# Expõe a porta 8085 (conforme configurado no application.properties)
EXPOSE 8085

# Define variáveis de ambiente para o Spring Boot
ENV SPRING_PROFILES_ACTIVE=docker

# Comando para executar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]
