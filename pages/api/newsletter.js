// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
      const Email = req.body.email;

      if (!Email || !Email.includes("@")) {
        res.status(422).json({message: "Invalid email address"})
        return;
      } 


   
      console.log(Email)
      res.status(201).json({message:"Signed Up"})
  }
}
