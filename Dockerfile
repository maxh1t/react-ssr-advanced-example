# Base Image
FROM node:22-alpine as builder

WORKDIR /app
COPY . .

RUN corepack enable && pnpm install && pnpm build

# Production Image
FROM node:22-alpine

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "run", "start"]
