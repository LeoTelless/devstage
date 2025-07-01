import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, referrer } = body

    // Simulando a criação de um subscriber
    const subscriberId = Math.random().toString(36).substring(2, 15)

    // Aqui você salvaria no banco de dados real
    console.log('Nova inscrição:', { name, email, referrer, subscriberId })

    return NextResponse.json({ subscriberId })
  } catch (error) {
    console.error('Erro ao processar inscrição:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
