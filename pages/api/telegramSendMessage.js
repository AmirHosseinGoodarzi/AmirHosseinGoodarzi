import nc from "next-connect";
const handler = nc();
const telegramSendMessage = async (req, res) => {
  try {
    console.log("req.body::",req.body)
    res.status(200).send({
      status: true,
      message: "ok",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      status: false,
      message: "Error at server side.\nPlease try again.",
    });
  }
};
handler.post(telegramSendMessage);
export default handler;
