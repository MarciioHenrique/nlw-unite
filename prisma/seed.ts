import { prisma } from "../src/lib/prisma";

async function seed() {
    await prisma.event.create({
        data: {
            id: "cba30f46-2a4d-4c8c-8197-f14cfbf5d8b1",
            title: "Unite Summit",
            slug: "unite-summit",
            details: "Evento de programação para devs",
            maximumAttendees: 120
        }
    })
}

seed().then(() => {
    console.log("Database seeded!")
    prisma.$disconnect()
})