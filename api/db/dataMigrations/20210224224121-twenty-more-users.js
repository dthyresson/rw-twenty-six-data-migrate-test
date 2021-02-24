import faker from 'faker'

export default async ({ db }) => {
  const data = Array.from({ length: 20 }).map(() => {
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
