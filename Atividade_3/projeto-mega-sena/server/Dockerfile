FROM node:20
WORKDIR /app
# Copia os arquivos de dependências
COPY package*.json ./
RUN npm install
# Copia o restante do código
COPY . .
# Porta que o professor solicitou
EXPOSE 3001
CMD ["npm", "run", "dev"]
