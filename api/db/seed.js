/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')
var faker = require('faker')

dotenv.config()
const db = new PrismaClient()

async function main() {
  const data = Array.from({ length: 10 }).map(() => {
    return {
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      avatar: faker.image.avatar(),
      country: faker.address.country(),
    }
  })

  const result = await db.user.createMany({
    data,
  })

  console.log(`Created ${result.count} users!`)
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
