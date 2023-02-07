// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../../prisma/client";

// Generate random question helper
const getRandomQuestion = (allPosts) => {
  const totalPostNum = allPosts?.length;
  if (totalPostNum === 1) return allPosts;
  return allPosts[Math.floor(Math.random() * totalPostNum)];
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Get prisma to fetch all questions
      const data = await prisma.post.findMany({
        where: {
          public: true,
        },
      });

      // Generate random question
      const randomQuestion = getRandomQuestion(data);

      return res.status(200).json(randomQuestion);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}
