---
title: "Prisma & PostgreSQL"
date: "2023-6-3"
description: "Prisma and PostgreSQL are powerful tools that enable developers to efficiently build robust and scalable applications."
cover: "/images/tortuga.png"
---


<TOC items={[ "Prisma", "PostgreSQL", "Installation and Setup", "Schema Definition", "Migrate the Database", "Generate Prisma Client", "CRUD Operations" ]} />

## Prisma

**Prisma** and **PostgreSQL** are a powerful pair for modern data storage and manipulation.
**[Prisma](https://www.prisma.io/docs "See Prisma docs")** Prisma is a data modeling tool that helps you design and manage your data easily. It understands your application's needs and creates a blueprint for your data structure. Prisma also knows all the relationships between your data entities, making it easy to query and manipulate data.
While **[PostgreSQL](https://www.postgresql.org/docs "See PostgreSQL docs")** is a reliable and powerful open-source database. Together, they can help developers build high-performance applications that can scale to meet the needs of any business.

## PostgreSQL

**[PostgreSQL](https://www.postgresql.org/docs "See PostgreSQL docs")** is a relational database that is known for its reliability, performance, and scalability. It is a great choice for storing large amounts of data and handling complex queries.

Prisma and PostgreSQL work together to create a powerful and flexible data management solution. Prisma takes care of the complex tasks of data modeling and management, so you can focus on building your application.

If you are looking for a reliable and scalable data management solution, Prisma and PostgreSQL are a great choice. They will make your development journey easier and your data management more efficient.

## Installation and Setup

-  pnpm

```bash
pnpm install prisma --save-dev
```

-  yarn

```bash
yarn add prisma --save-dev
```

<br />
**Initialize a new Prisma project:**

```bash
npx prisma init
```

Set up a PostgreSQL database and configure the database connection in the Prisma configuration file.
Configure your database connection in `prisma/.env` or `.env.{stage}` file.

```text
# .env file

// url without schema
DATABASE_URL = "postgresql://<USER>:<PASSWORD>@<HOST>:<PORT>/<DB_NAME>"

// url with schema
DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/test?schema=public"
DATABASE_URL_WITH_SCHEMA = ${DATABASE_URL}?schema=public
```

<br />

## Schema Definition

-  Define your data model in `prisma/schema.prisma` using Prisma's schema language.
-  Example schema definition:

```js
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id    Int     @default(autoincrement()) @id
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @default(autoincrement()) @id
  title     String
  content   String?
  published Boolean @default(false)
  author    User?   @relation(fields: [authorId], references: [id])
  authorId  Int?
}
```

<br />
<br />
## Generate Prisma Client

Run `npx prisma generate` to generate the Prisma
Client. - The generated Prisma Client provides a type-safe and
autocompletion-enabled API to interact with your database.

<br />

## Migrate the Database
- Create database migration files using Prisma Migrate.
```bash
prisma migrate save --name <migration-name>
```

-  Formating prisma schema.

```bash
npx prisma format
```

-  Apply pending migrations to the database.

```bash
npx prisma migrate up
```

**Install @prisma/Client**

```bash
pnpm i @prisma/client
```

-  Apply schema prisma into types

```bash
npx prisma generate
```

## CRUD Operations

Example CRUD operations:

```js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
   const newUser = await prisma.user.create({
      data: {
         email: "john@example.com",
         name: "John Doe",
      },
   });

   const updatedUser = await prisma.user.update({
      where: { id: 1 },
      data: { name: "John Smith" },
   });

   const deletedUser = await prisma.user.delete({
      where: { id: 1 },
   });

   const users = await prisma.user.findMany();
   console.dir(users, { depth: null });
}

main()
   .catch((error: unknown) => {
      if (error) console.error(error);
   })
   .finally(async () => await prisma.$disconnect());
```
<br/>
<br/>
