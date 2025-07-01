import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Simulando dados de ranking
    const ranking = [
      { id: '1', name: 'João Silva', score: 150 },
      { id: '2', name: 'Maria Santos', score: 120 },
      { id: '3', name: 'Pedro Oliveira', score: 95 },
      { id: '4', name: 'Ana Costa', score: 80 },
      { id: '5', name: 'Carlos Lima', score: 65 },
    ]

    return NextResponse.json({ ranking })
  } catch (error) {
    console.error('Erro ao buscar ranking:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
