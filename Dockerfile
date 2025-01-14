# Use uma imagem base do PostgreSQL
FROM postgres:latest

# Defina as variáveis de ambiente (opcionais, mas comuns)
# Defina o nome do banco de dados, usuário e senha
ENV POSTGRES_DB=db_fast
ENV POSTGRES_USER=user_fast
ENV POSTGRES_PASSWORD=123456

# Exponha a porta padrão do PostgreSQL
EXPOSE 5432
