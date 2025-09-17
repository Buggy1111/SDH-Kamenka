import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Jméno, email a zpráva jsou povinná pole' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Neplatný email formát' },
        { status: 400 }
      )
    }

    // Log contact form submission (in production you would send email)
    console.log('Nová zpráva z kontaktního formuláře:', {
      name: body.name,
      email: body.email,
      subject: body.subject || 'Obecný dotaz',
      message: body.message,
      timestamp: new Date().toISOString()
    })

    // TODO: In production, integrate with email service like:
    // - Nodemailer
    // - SendGrid
    // - Resend
    // - EmailJS

    // For now, just return success
    return NextResponse.json(
      {
        success: true,
        message: 'Zpráva byla úspěšně odeslána. Odpovíme vám co nejdříve!'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Chyba při zpracování kontaktního formuláře:', error)
    return NextResponse.json(
      { error: 'Došlo k chybě při odesílání zprávy. Zkuste to prosím znovu.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint - použijte POST metodu pro odeslání formuláře' },
    { status: 200 }
  )
}