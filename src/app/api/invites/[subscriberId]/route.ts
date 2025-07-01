import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { subscriberId: string } }
) {
  try {
    const { subscriberId } = params

    // Simulando o acesso ao link de convite
    console.log('Acesso ao link de convite:', subscriberId)

    // Retorna uma resposta vazia ou redirecionamento
    return new NextResponse(null, { status: 301 })
  } catch (error) {
    console.error('Erro ao acessar link de convite:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
