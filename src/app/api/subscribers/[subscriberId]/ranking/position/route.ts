import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { subscriberId: string } }
) {
  try {
    const { subscriberId } = params

    // Simulando posição no ranking (pode ser null se não estiver no ranking)
    const position = Math.random() > 0.3 ? Math.floor(Math.random() * 100) + 1 : null

    console.log(`Posição no ranking para ${subscriberId}:`, position)

    return NextResponse.json({ position })
  } catch (error) {
    console.error('Erro ao buscar posição no ranking:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
