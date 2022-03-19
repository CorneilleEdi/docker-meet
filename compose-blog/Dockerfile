FROM node:16-alpine
COPY package.json yarn.lock ./


RUN yarn install

ENV NODE_ENV production
ENV HOST 0.0.0.0
ENV PORT 3000


EXPOSE 3000
CMD [ "yarn", "dev" ]
