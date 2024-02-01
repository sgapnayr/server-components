import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const posts = await prisma.post.findMany({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
