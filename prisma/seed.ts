import prisma from "../lib/prisma";

async function main() {
  const need = await prisma.need.create({
    data: {
      category: "Test",
      env: "DEV",
    },
  });

  const location = await prisma.location.create({
    data: {
      lat: 14,
      lng: 52,
      radius: 4.5,
      need: {
        connect: {
          id: need.id,
        },
      },
    },
  });

  const user = await prisma.user.create({
    data: {
      email: "jeroenderks88@gmail.com",
      emailConfirmed: true,
      need: {
        connect: {
          id: need.id,
        },
      },
    },
  });
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
