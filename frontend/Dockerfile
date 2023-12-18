# Use a imagem oficial do Node.js para Next.js 13
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /src

# Copie os arquivos do código-fonte para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código-fonte
COPY . .

# Execute o comando npm run build
RUN npm run build

# Exponha a porta em que o aplicativo está sendo executado (ajuste conforme necessário)
EXPOSE 3000

# Comando para iniciar o aplicativo (ajuste conforme necessário)
CMD ["npm", "start"]