FROM node

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3333

CMD [ "npm", "run", "dev" ]

# criar a imagem `docker build -t defina_uma_nome_para_sua_imagem .`
# executar imagem docker num container `docker run -p PORT:PORT`
# FAÇA O MAPEAMENTO DE PORTAS CORRETAMENTE