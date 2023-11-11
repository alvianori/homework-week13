// prisma/seeder.js

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  // Seeder for User model
  await prisma.user.createMany({
    data: [
      { name: "John Doe", email: "john@example.com", password: "password123" },
      { name: "Jane Doe", email: "jane@example.com", password: "securepass" },
      // Add more users as needed
    ],
  });

  // Seeder for Book model
  await prisma.book.createMany({
    data: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publisher: "Scribner",
        year: 1925,
        pages: 218,
        image: "/images/great-gatsby.jpg",
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publisher: "J.B. Lippincott & Co.",
        year: 1960,
        pages: 281,
        image: "/images/to-kill-a-mockingbird.jpg",
      },
      // Add more books as needed
    ],
  });

  console.log("Seeding completed.");
}

seed()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
