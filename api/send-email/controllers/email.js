'use strict';

module.exports = {
  sendEmail: async (ctx) => {
    console.log(ctx.request.body)
    const body = ctx.request.body
    const sendTo = 'kd.fu@tuke.sk'
    const name = body.name
    const message = body.message
    const email = body.email
    if (!name || !message || !email) {
      ctx.response.badRequest('Missing parameters')
      return
    }
    try {
      await strapi.plugins['email'].services.email.send({
        to: sendTo,
        replyTo: email,
        subject: 'Kontaktný formulár - Katedra dizajnu / FU TUKE',
        text: `Meno: ${name}\nEmail: ${email}\nSpráva: ${message}`,
        html: `<p>Meno: ${name}</p><p>Email: ${email}</p><p>Správa: ${message}</p>`
      });

      strapi.log.debug(`Email sent to ${sendTo}`)
      ctx.send({ message: 'Email sent' })
    }
    catch (err) {
      console.log(err)
      ctx.response.badImplementation('Error sending email')
    }
  }
};
