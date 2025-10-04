#!/bin/bash

echo "🚀 Iniciando o processo de build e execução do projeto de casamento..."

# 1. Build da aplicação Spring Boot
echo "📦 Fazendo build da aplicação Spring Boot..."
mvn clean package -DskipTests

if [ $? -ne 0 ]; then
    echo "❌ Erro no build da aplicação. Verifique os logs acima."
    exit 1
fi

echo "✅ Build da aplicação concluído!"

# 2. Parar containers existentes (se houver)
echo "🛑 Parando containers existentes..."
docker-compose down

# 3. Subir os containers
echo "🐳 Subindo os containers..."
docker-compose up --build -d

if [ $? -ne 0 ]; then
    echo "❌ Erro ao subir os containers. Verifique os logs acima."
    exit 1
fi

echo "✅ Containers iniciados com sucesso!"
echo ""
echo "📋 Status dos serviços:"
echo "• PostgreSQL: localhost:5432"
echo "• PgAdmin: http://localhost:5050 (admin@casamento.com / admin123)"
echo "• RabbitMQ Management: http://localhost:15672 (guest / guest)"
echo "• Redis: localhost:6379"
echo "• Evolution API: http://localhost:8080"
echo "• Casamento API: http://localhost:8085"
echo ""
echo "🔍 Para ver os logs: docker-compose logs -f [nome-do-serviço]"
echo "🛑 Para parar: docker-compose down"
