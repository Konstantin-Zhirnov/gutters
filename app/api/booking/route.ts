import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  require('dotenv').config()

  const body = await req.json()

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: 'kostya.zhirnov@gmail.com',
      to: 'kostya.zhirnov@gmail.com',
      // to: 'aarsengutterscorp@gmail.com',
      subject: 'Message from website',
      html: `<div><b>Message from website: aarsengutters.ca</b></div>
          <p><b>First Name:</b> ${body.firstName}<br/>
          <b>Last Name:</b> ${body.lastName}<br/>
          <b>Phone:</b> ${body.phone}<br/>
          <b>Email:</b> ${body.email}<br/>
          <b>Job Requirements:</b> ${body.jobRequirements}<br/>
          <b>Address:</b> ${body.address}<br/>
          <b>Additional:</b> ${body.additional}</p>`,
    })
  } catch (error) {
    // @ts-ignore
    return NextResponse.json({ error: error.message || error.toString() })
  }
  return NextResponse.json({ message: 'Success!' })
}
