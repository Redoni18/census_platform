# Census Platform API

## Overview

Census is a news rating and aggregation platform designed to provide users with curated news articles and allow them to rate and review content. This repository contains the backend API for the Census platform, built with modern web technologies and best practices.

## Technologies Used

- [Bun](https://bun.sh/) - JavaScript runtime and toolkit
- [Hono](https://hono.dev/) - Fast, lightweight web framework
- [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript
- [PostgreSQL](https://www.postgresql.org/) - Open-source relational database
- [Redis](https://redis.io/) - In-memory data structure store (used for caching and token management)
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Zod](https://github.com/colinhacks/zod) - TypeScript-first schema validation
- [JSON Web Tokens (JWT)](https://jwt.io/) - Secure way of transmitting information between parties as a JSON object
- [Jest](https://jestjs.io/) - JavaScript Testing Framework
- [Swagger UI](https://swagger.io/tools/swagger-ui/) - API documentation

## Features

- User Authentication System
  - User registration
  - User login
  - User logout with token blacklisting
- Role-based Authorization (ADMIN and READER roles)
- API Documentation with Swagger UI
- Comprehensive Test Suite
- Database Integration with Prisma ORM
- Caching Layer with Redis
- Input Validation using Zod
- Error Handling and Logging

## Setup Instructions

1. Clone the repository:

To install dependencies:
```sh
bun install
```

To run (recommended):
```sh
bun run watch
```

```sh
bun run dev
```

open http://localhost:3000
