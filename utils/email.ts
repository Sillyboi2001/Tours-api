import nodemailer from 'nodemailer';

interface EmailOptions {
  email: string;
  subject: string;
  message: string;
}

const sendEmail = async (options: EmailOptions) => {
  //CCreate a  transport
  var transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  // Define email options
  const mailOptions = {
    from: 'Silas Okpugie <silas@mail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  //Send thhe mail
  await transport.sendMail(mailOptions);
};

export default sendEmail;
