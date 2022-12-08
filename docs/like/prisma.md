# Prisma
Look at Prisma to find out good sides and use in design


## SCHEMA DEFINITION

schema.prisma
```prisma
model Post {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  title     String   @db.VarChar(255)
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}

model Profile {
  id     Int     @id @default(autoincrement())
  bio    String?
  user   User    @relation(fields: [userId], references: [id])
  userId Int     @unique
}

model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  name    String?
  posts   Post[]
  profile Profile?
}
```

db.ts/db.dart
```ts
// Q? How to setup virtual fields

// maybe better class?
const post = {
  id: int().pk().autoincrement()
  createdAt: datetime().default(now())
  title: varchar(255)
  content: text().nullable()
  published: boolean().default(false)
  authorId: int()

  // virtual field
  author: relation(user.id, authorId)
}

const profile = {
  id: int().pk().autoincrement()
  bio: varchar(500).nullable()
  userId: int().unique()

  // virtual
  user: relation(userId, user.id)
}

const user = {
  id: int().pk().autoincrement()
  email: varchar(255).unique()
  name: varchar(255).nullable()

  // virtual fields
  posts: many(post)
  profile: one(profile).nullable()
}
```


## QUERIES

prisma
```ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })
  
  // [{ id: 1, email: 'alice@prisma.io', name: 'Alice' }]
  const users = await prisma.user.findMany()  

  // nested querys
  const user = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@prisma.io',
      posts: {
        create: {
          title: 'Hello World',
        },
      },
      profile: {
        create: { bio: 'I like turtles' },
      },
    },
  })

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })
}
```

ozen
```ts
const ozen = new OzenClient(schema)

async function main() {

  const user = await ozen.user.output(u => u)
    .insert({
      name: 'Alice',
      email: 'alice@wintera.tech'
    })
  // body of POST under the hood
  const postUserBody = { 
    values: {
      name: 'Alice',
      email: 'alice@wintera.tech'
    },
    output: ['id', 'name', 'email']
  }


  // can make return all by default for select
  // [{ id: 1, email: 'alice@prisma.io', name: 'Alice' }]
  const users = await ozen.user.select(u => u)


  // not good because 2 requests
  const [bob, bobOk] = await ozen.user.output(u => [u.id]).insert({
    name: 'Bob',
    email: 'bob@wintera.tech'
  })
  if(bobOk) {
    const posts = await ozen.posts.insert({  
      title: 'Hello World',
      authorId: bob.id
    })
    const profile = await ozen.profile.insert({
      title: 'Hello World',
      authorId: bob.id
    })
  }

  // if make virtual collection posts inside users to connect them
  const [usersWithPosts] = await ozen.user.select(u => [u.id, u.name, u.email, u.posts, u.author])

}
```

### INSERT
```ts
// prisma
await prisma.user.create({
  data: {
    name: 'Alice',
    email: 'alice@prisma.io',
    posts: {
      create: { title: 'Hello World' },
    },
    profile: {
      create: { bio: 'I like turtles' },
    },
  },
})

// ozen now
const [user, ok] = await ozen.user
  .output(u => u.id)
  .insert({
    name: 'Alice',
    email: 'alice@prisma.io'
  })

if(ok) {
  await ozen.post.insert({
    name: 'Alice',
    email: 'alice@prisma.io'
  })
  await ozen.user.insert({
    name: 'Alice',
    email: 'alice@prisma.io'
  })
}
```

### UPDATE
```ts
//prisma
const post = await prisma.post.update({
  where: { id: 1 },
  data: { published: true },
})

// ozen
const [post, postOk] = await ozen.post
  .output(p => p)
  .where(p => p.id.eq(1))
  .update({ published: true })
```