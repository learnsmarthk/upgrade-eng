// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { password } = req.body;
    try {
      if (password === process.env.NEXT_PUBLIC_REACT_APP_ADMIN_LOGIN_PW) {
        return res.status(200).json({ message: "Welcome back!" });
      }
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}
