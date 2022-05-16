import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '6143f75634e45f',
    pass: 'c134c9a56796a2',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedback Widget <oi@feedback-widget.com>',
      to: 'Lucas Lousada <lucaslousada500@gmail.com>',
      subject,
      html: body,
    });
  }
}
