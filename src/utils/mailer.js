const nodemailer = require('nodemailer')

// NADA AQUI ESTA FUNCIONANDO
let transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: 'testAccount.user',
    pass: 'testAccount.pass'
  }
})

export default transporter