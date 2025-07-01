import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { subscriberId: string } }
) {
  try {
    const { subscriberId } = params

    // Simulando contagem de cliques
    const count = Math.floor(Math.random() * 50) + 5

    console.log(`Contagem de cliques para ${subscriberId}:`, count)

    return NextResponse.json({ count })
  } catch (error) {
    console.error('Erro ao buscar contagem de cliques:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
