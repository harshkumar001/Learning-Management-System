const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      auth: {
        // user: process.env.MAIL_USER,
        // pass: process.env.MAIL_PASS,
        user: "alysson59@ethereal.email",
        pass: "DgqbgkN9QtswEfjRVp",
      },
    });

    let info = await transporter.sendMail({
      from: "Harsh Kumar || Web-Developer",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    console.log(info);
    return info;
  } catch (error) {
    console.log(error.message);
    console.error(error);
  }
};

module.exports = mailSender;
