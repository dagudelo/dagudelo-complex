FROM node:alpine
WORKDIR '/app/'
COPY './package.json' './'
RUN npm install
COPY './index.js' './'
COPY './keys.js' './'
CMD ["npm","run","start"]
