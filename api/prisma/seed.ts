// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import { products, users } from './data';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
await prisma.users.createMany(  {
    data : users
})
await prisma.products.createMany({
    data : products
})
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });