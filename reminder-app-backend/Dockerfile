# FROM node:14
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD ["node", "server.js"]

# Utilisez une image Node.js officielle comme image de base
FROM node:14

# Créez un répertoire de travail pour votre application
WORKDIR /app

# Copiez le fichier package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances
RUN npm ci

# Copiez le code source de votre application dans le répertoire de travail
COPY . .

# Exposez le port sur lequel votre application écoutera les requêtes
EXPOSE 3000

# Démarrez l'application
CMD ["npm", "start"]
