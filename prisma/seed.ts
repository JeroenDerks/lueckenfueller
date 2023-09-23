import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const jeroen = await prisma.need.create({
    data: {
      email: "jeroenderks88@gmail.com",
      category: "Test",
      env: "DEV",
      location: {
        create: {
          lat: 52,
          lng: 13.2,
          radius: 5.5,
        },
      },
    },
  });

  console.log({ jeroen });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
