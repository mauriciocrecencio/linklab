# Linklab



## Instalação

Afim de facilitar a inicialização do Front-end e Back-end, configurei o  Docker para iniciar o projeto. 

Certifique se de estar na pasta raiz do projeto e de que o Docker esteja instalado. 
Rode o comando:
```bash
docker-compose up
```
Após subir o container, é só acessar seu localhost:3000

## Iniciar sem Docker
Para iniciar sem o Docker, você deve entrar na pasta backend e rodar os seguintes comandos:
```bash
npm install
npm run start:dev
```

Apois iniciar o backend, deve se fazer o mesmo dentro da pasta frontend
```bash
npm install
npm run dev
```
Apos iniciar o back-end e o front-end, é só acessoar localhost:3000