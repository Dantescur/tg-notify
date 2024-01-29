import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const sendMessage = (messageText) => {
  const CHANNEL_ID = process.env.CHANNEL_ID;
  const BOT_TOKEN = process.env.BOT_TOKEN;

  if (!messageText) {
    console.error("Please provide a message text");
    return;
  }

  axios
    .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      text: messageText,
      chat_id: CHANNEL_ID,
    })
    .then(() => console.log("Message sent successfully"))
    .catch((error) => console.error("Error sending message:", error));
};

export default sendMessage;
