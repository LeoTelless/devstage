import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { subscriberId: string } }
) {
  try {
    const { subscriberId } = params

    // Simulando contagem de convites
    const count = Math.floor(Math.random() * 20) + 1

    console.log(`Contagem de convites para ${subscriberId}:`, count)

    return NextResponse.json({ count })
  } catch (error) {
    console.error('Erro ao buscar contagem de convites:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
