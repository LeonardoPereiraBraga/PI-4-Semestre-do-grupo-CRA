# 👶 Child Rescue Alert

**Child Rescue Alert** é uma plataforma web colaborativa criada para auxiliar na divulgação e localização de crianças desaparecidas. Usuários podem registrar casos, anexar informações e imagens, e contribuir para uma resposta mais rápida e eficaz da comunidade e autoridades.

## 🚀 Tecnologias Utilizadas

- **Frontend:** [React](https://reactjs.org/)
- **Backend:** [Spring Boot](https://spring.io/projects/spring-boot)
- **Banco de Dados:** [MongoDB](https://www.mongodb.com/)
- **Armazenamento:** [Supabase](https://supabase.com/)

## 📸 Funcionalidades

- Cadastro e login de usuários com autenticação via Spring Security
- Registro de casos com informações detalhadas e upload de fotos
- Integração entre frontend e backend via API REST
- Armazenamento seguro de dados e imagens

## ⚙️ Como Executar Localmente

### Pré-requisitos

- Node.js (v18+)
- Java 17+
- MongoDB (local ou Atlas)
- Conta no Supabase

### Backend (Spring Boot)

```bash
cd backend
# Configure o application.properties com as credenciais do MongoDB
./mvnw spring-boot:run

```

### Frontend (React)

```bash
cd frontend
npm install
npm start
```
