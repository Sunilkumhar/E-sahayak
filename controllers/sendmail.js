const nodemailer = require("nodemailer");
require("dotenv").config();

exports.send = async (req, res) => {
  console.log(123);
  // let testAccount = await nodemailer.createTestAccount();

  let Obj = JSON.parse(JSON.stringify(req.body));

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email,
      pass: process.env.pass,
    },
  });

  let mailOptions = {
    from: "alexis.corwin94@ethereal.email",
    to: `${Obj.email1},${Obj.email2}`,
    subject: "Your recent purchase details", // Subject line
    text: `You recently made a transcation of Rs${
      Obj.pdt_price * Obj.pdt_qunatity
    }
          Product name : ${Obj.pdt_name} `,
    attachments: [
      {
        path: req.file.path,
      },
    ],
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(`Email sen ${info.response}`);
    }
  });

  res.send("mail sent succesfully!!");
};
