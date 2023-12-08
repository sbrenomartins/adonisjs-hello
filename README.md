# backend

## Build Setup

Install [Docker Compose](https://docs.docker.com/compose/install/).

```bash
# Create container with MySQL
$ docker-compose up -d

# Create database structure
$ node ace migration:run

# Install dependencies
$ npm install

# Server with changes watcher
$ npm run dev
OR
$ node ace serve --watch

# Build for production and launch server
$ npm run build
$ npm run start
```
