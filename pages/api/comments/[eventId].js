
export default function handler (req, res) {
    const eventId = req.query.eventId;
    if (req.method === "POST") {
        const {email, name, text} = req.body

        if (!email.includes("@") || name.trim() === '' || text.trim() === "") {
            res.status(422).json({message:'Invalid input'})
            return; 
        }

        const newComment = {
            id: new Date().toISOString(),
            email,
            name,
            text
        }
        console.log(newComment);
        res.status(201).json({message:"Added Comment", comment: newComment});
        return;
    }

    if (req.method === "GET") {
        const dummyList = [
            {id:"1", name:"Pablo", text:"First Comment"},
            {id:"2", name:"Robert", text:"Second Comment"},
            {id:"3", name:"Paul", text:"Third Comment"},
            {id:"4", name:"Micheal", text:"Fourth Comment"},
            {id:"5", name:"Matthew", text:"Fifth Comment"},
            {id:"6", name:"Nelson", text:"Sixth Comment"},
            {id:"7", name:"Oscar", text:"Seventh Comment"},
        ];

        res.status(200).json({comments:dummyList})
    }
}