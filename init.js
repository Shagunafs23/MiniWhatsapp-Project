const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Sam",
        to: "sandhya",
        msg: "send me your pen",
        created_at: new Date(),
    },
    {
        from: "Dam",
        to: "sandhya",
        msg: "send me your cards",
        created_at: new Date(),
    },{
        from: "Lam",
        to: "sandhya",
        msg: "send me your cards",
        created_at: new Date(),
    },{
        from: "Mam",
        to: "sandhya",
        msg: "send me your cards",
        created_at: new Date(),
    }
];

     Chat.insertMany(allChats);