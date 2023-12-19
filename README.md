# Linklab
Gostaria de fazer algumas considerações:
- não vi necessidade de utilizar Redux, apesar de ter conhecimento e até ter instalado a biblioteca
- como estou trabalhando atualmente fulltime, tive pouquíssimo tempo para fazer o teste
- gostaria de ter feito o Menu completo, com animações onHover e a exibição ao clicar no ícone de Hamburguer, mas como eu comentei, realmente não tive muito tempo para fazer o teste completamente da maneira que gostaria


## Instalação

Afim de facilitar a inicialização do Front-end e Back-end, configurei o  Docker para iniciar o projeto. 

Certifique se de estar na pasta raiz do projeto e de que o Docker esteja instalado. 
Rode o comando:
```bash
docker-compose up
```
Após subir o container, é só acessar seu localhost:3000

## Iniciar sem Docker
Caso tenha algum problema com a inicialização pelo Docker, pode fazer sem ele. Você deve entrar na pasta backend e rodar os seguintes comandos:
```bash
npm install
npm run start:dev
```

Apois iniciar o backend, deve se fazer o mesmo dentro da pasta frontend
```bash
npm install
npm run dev
```
Apos iniciar o back-end e o front-end, é só acessoar localhost:3000 no navegador