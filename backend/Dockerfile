# Use a imagem oficial do Node.js
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos do código-fonte para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código-fonte
COPY src/ ./src

# Exponha a porta em que o aplicativo está sendo executado (ajuste conforme necessário)
EXPOSE 3001

# Comando para iniciar o aplicativo (ajuste conforme necessário)
CMD ["npm", "start:dev"]
