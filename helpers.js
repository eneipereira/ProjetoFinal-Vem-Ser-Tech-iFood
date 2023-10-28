const isMonday = () => new Date().getDay() === 5;

function checkRecentVisit(client, months) {
  const limitDate = new Date();
  limitDate.setMonth(limitDate.getMonth()- months)

  return client.visitedAt >= limitDate;
}

function buildEmailBody(client) {
  return `
  Olá ${client.name},

  Esperamos que esteja se sentindo bem. Gostaríamos de compartilhar as últimas novidades da CarStore com você!

  **Novos Lançamentos:**
  Estamos empolgados em apresentar nossos mais recentes veículos no showroom. De SUVs espaçosos a carros esportivos elegantes, temos opções para todos os gostos.

  **Mais Vendidos:**
  Nossos carros mais vendidos continuam a ser os favoritos dos clientes. Não perca a chance de conferir os modelos que estão conquistando corações.

  **Ofertas Especiais:**
  Temos ofertas especiais disponíveis exclusivamente para nossos clientes fiéis. Entre em contato conosco ou visite a loja para obter mais detalhes.

  Se você deseja saber mais sobre algum modelo específico ou deseja agendar um teste drive, não hesite em nos contatar. Estamos aqui para ajudar.

  Lembrando que estamos comprometidos com a satisfação de nossos clientes e garantimos que todas as medidas de segurança estão em vigor em nossas lojas.

  Fique atento às nossas atualizações regulares e visite nosso site para as últimas promoções.

  Agradecemos por ser um cliente valioso da CarStore e esperamos vê-lo em breve em uma de nossas lojas.

  Atenciosamente,

  Enei Pereira Junior
  Desenvolvedor Backend CarStore
  (21) 98765-4321
  meuemail@carstore.com.br
  www.carstore.com.br
`
}

module.exports = {
    isMonday,
    checkRecentVisit,
    buildEmailBody
}
