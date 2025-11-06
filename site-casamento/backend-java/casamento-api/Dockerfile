## Multi-stage build: compila o JAR e depois roda com JRE enxuto

# 1) Build stage
FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /build

# Copia e compila
COPY pom.xml .
COPY src ./src
RUN mvn -q -DskipTests package

# 2) Runtime stage
FROM eclipse-temurin:21-jre AS runtime
WORKDIR /app

# Copia o artefato construído no estágio anterior
COPY --from=build /build/target/casamento-api-*.jar app.jar

# Expõe a porta 8085 (conforme configurado no application.properties)
EXPOSE 8085

# Define variáveis de ambiente para o Spring Boot
ENV SPRING_PROFILES_ACTIVE=docker

# Comando para executar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]
