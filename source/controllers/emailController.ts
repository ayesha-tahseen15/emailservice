import { Request, Response, NextFunction } from 'express';
import nodemailer from "nodemailer";


const sendEmail = async (req: Request, res: Response, next: NextFunction) => {
    const toAddr = req.body.toAddr;
    const fromAddr = req.body.fromAddr;
    const subject = req.body.subject;
    const text = req.body.text;
    
    const html = req.body.html;
    const hostname= "smtp.gmail.com";
    const username= "xxx@gmail.com";
    const password= "xxx";
  
    const transporter = nodemailer.createTransport({
      host: hostname,
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: username,
        pass: password,
      },
      logger: true
    });
  
    const info = await transporter.sendMail({
      from: fromAddr,
      to: toAddr,
      subject: subject,
      text: text,
      html: html,
      headers: { 'x-myheader': 'test header' }
    });
  
    console.log("Message sent: %s", info.response);
  
  
};

export default { sendEmail}
