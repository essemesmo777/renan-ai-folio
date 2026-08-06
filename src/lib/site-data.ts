export const CONTACT = {
  whatsapp: "5551997643562",
  whatsappLabel: "(51) 99764-3562",
  email: "augustocostabrum@gmail.com",
  instagram: "https://www.instagram.com/rankbrum/",
  instagramLabel: "@rankbrum",
  brand: "RankBrum.AI",
};

export function waLink(message: string) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  "Olá! Conheci a RankBrum.AI e gostaria de conversar sobre um projeto.";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  details: {
    intro: string;
    includes: string[];
    ideal: string;
  };
};

export const SERVICES: Service[] = [
  {
    slug: "landing-pages",
    title: "Landing Pages",
    description:
      "Páginas rápidas, modernas e estruturadas para transformar visitantes em clientes.",
    icon: "Rocket",
    details: {
      intro:
        "Uma landing page é construída com um único objetivo: fazer o visitante entender a oferta e entrar em contato.",
      includes: [
        "Estrutura de conteúdo pensada para conversão",
        "Design exclusivo e responsivo",
        "Botões diretos para WhatsApp",
        "Formulário de contato com armazenamento seguro",
        "Otimização de SEO e performance",
      ],
      ideal: "Ideal para serviços locais, lançamentos, campanhas de tráfego e captação de leads.",
    },
  },
  {
    slug: "aplicativos-e-sistemas",
    title: "Aplicativos e sistemas",
    description:
      "Aplicativos, dashboards e plataformas criadas de acordo com a operação da sua empresa.",
    icon: "LayoutDashboard",
    details: {
      intro:
        "Quando planilhas e processos manuais deixam de dar conta, um sistema sob medida organiza a operação.",
      includes: [
        "Mapeamento do processo atual",
        "Telas de cadastro, consulta e gestão",
        "Controle de usuários e permissões",
        "Relatórios e indicadores",
        "Acesso pelo computador e pelo celular",
      ],
      ideal: "Ideal para empresas com rotinas internas repetitivas ou controle disperso.",
    },
  },
  {
    slug: "sistemas-saas",
    title: "Sistemas SaaS",
    description:
      "Produtos digitais com usuários, planos, assinaturas, dashboards e gestão multiempresa.",
    icon: "Boxes",
    details: {
      intro:
        "Um SaaS é um produto digital que outras pessoas ou empresas acessam por assinatura.",
      includes: [
        "Cadastro e autenticação de usuários",
        "Planos, assinaturas e cobrança recorrente",
        "Separação de dados por empresa",
        "Painel administrativo",
        "Base preparada para crescer",
      ],
      ideal: "Ideal para quem quer transformar um serviço ou método em produto digital.",
    },
  },
  {
    slug: "automacoes-com-ia",
    title: "Automações com IA",
    description:
      "Automação de tarefas repetitivas, atendimento, análise de informações e geração de relatórios.",
    icon: "Workflow",
    details: {
      intro:
        "Automação é tirar da rotina aquilo que o computador consegue fazer sozinho, com consistência.",
      includes: [
        "Fluxos automáticos entre sistemas",
        "Leitura e organização de informações",
        "Respostas e mensagens automáticas",
        "Relatórios gerados periodicamente",
        "Alertas automáticos",
      ],
      ideal: "Ideal para operações com muitos cadastros, mensagens e conferências manuais.",
    },
  },
  {
    slug: "agentes-de-ia-whatsapp",
    title: "Agentes de IA para WhatsApp",
    description:
      "Agentes para atender clientes, qualificar leads, realizar agendamentos e direcionar oportunidades.",
    icon: "MessageSquareBot",
    details: {
      intro:
        "Um agente de IA conversa com o cliente no WhatsApp seguindo as regras do seu negócio.",
      includes: [
        "Atendimento inicial automático",
        "Qualificação de interessados",
        "Agendamentos e confirmações",
        "Encaminhamento para um atendente humano",
        "Registro das conversas e contatos",
      ],
      ideal: "Ideal para negócios que recebem muitas mensagens e perdem contatos fora do horário.",
    },
  },
  {
    slug: "integracoes-digitais",
    title: "Integrações digitais",
    description:
      "Conexão entre WhatsApp, planilhas, CRM, banco de dados, meios de pagamento e outras plataformas.",
    icon: "Plug",
    details: {
      intro:
        "Integração é fazer as ferramentas que você já usa conversarem entre si, sem retrabalho.",
      includes: [
        "Conexão com WhatsApp e e-mail",
        "Planilhas e bancos de dados",
        "CRM e ferramentas de gestão",
        "Meios de pagamento",
        "APIs de terceiros",
      ],
      ideal: "Ideal para quem digita a mesma informação em mais de um lugar todos os dias.",
    },
  },
];

export const BENEFITS = [
  {
    title: "Atendimento direto",
    description: "Você conversa diretamente comigo durante todas as etapas do desenvolvimento.",
    icon: "MessageCircle",
  },
  {
    title: "Projeto personalizado",
    description: "A solução é planejada de acordo com a necessidade real do seu negócio.",
    icon: "Fingerprint",
  },
  {
    title: "Design profissional",
    description: "Interfaces modernas, responsivas e desenvolvidas para transmitir confiança.",
    icon: "Palette",
  },
  {
    title: "Processo completo",
    description: "Planejamento, protótipo, desenvolvimento, integração, testes e publicação.",
    icon: "Layers",
  },
  {
    title: "Tecnologia atual",
    description:
      "Ferramentas modernas são utilizadas para acelerar o desenvolvimento e melhorar a experiência.",
    icon: "Cpu",
  },
  {
    title: "Acompanhamento próximo",
    description: "Você acompanha as principais etapas, revisões e decisões do projeto.",
    icon: "Eye",
  },
];

export const CONCEPT_CARDS = [
  {
    title: "Contato direto",
    description:
      "Você conversa com a mesma pessoa que entende a necessidade, planeja e desenvolve o projeto.",
    icon: "MessagesSquare",
  },
  {
    title: "Projeto personalizado",
    description:
      "Cada solução é desenvolvida de acordo com o objetivo, a operação e o momento do seu negócio.",
    icon: "Fingerprint",
  },
  {
    title: "Processo transparente",
    description: "Você acompanha as etapas, revisões e evolução do projeto sem intermediários.",
    icon: "Eye",
  },
  {
    title: "Tecnologia sob medida",
    description:
      "As ferramentas são escolhidas de acordo com o problema que precisa ser resolvido, sem utilizar tecnologia apenas por aparência.",
    icon: "Cpu",
  },
];

export type Segment = {
  slug: string;
  name: string;
  short: string;
  tag: string;
  hue: number;
  objective: string;
  audience: string;
  sections: string[];
  features: string[];
  strategy: string;
};

export const SEGMENTS: Segment[] = [
  {
    slug: "clinica-de-estetica",
    name: "Clínica de estética",
    short: "Página para apresentar procedimentos e receber agendamentos.",
    tag: "Modelo demonstrativo",
    hue: 320,
    objective:
      "Apresentar os procedimentos da clínica com clareza e levar o visitante a agendar uma avaliação.",
    audience: "Pessoas que pesquisam procedimentos estéticos e comparam clínicas na região.",
    sections: [
      "Topo com proposta de valor e botão de agendamento",
      "Lista de procedimentos com descrição",
      "Galeria de ambiente e estrutura",
      "Credenciais e formação profissional",
      "Perguntas frequentes",
      "Contato e agendamento",
    ],
    features: [
      "Agendamento online",
      "Botão de WhatsApp em todas as seções",
      "Formulário de avaliação",
      "Página leve no celular",
    ],
    strategy:
      "Reduzir dúvidas antes do contato e oferecer o agendamento no momento em que o interesse é maior.",
  },
  {
    slug: "salao-de-beleza",
    name: "Salão de beleza",
    short: "Serviços, horários e agendamento em poucos toques.",
    tag: "Conceito de projeto",
    hue: 300,
    objective: "Mostrar serviços e valores de referência e facilitar o agendamento pelo celular.",
    audience: "Clientes locais que decidem rápido e agendam pelo telefone.",
    sections: [
      "Topo com destaque visual",
      "Tabela de serviços",
      "Profissionais do salão",
      "Depoimentos reais quando disponíveis",
      "Localização de atendimento",
      "Agendamento",
    ],
    features: ["Agendamento online", "Integração com WhatsApp", "Galeria de trabalhos", "Mapa opcional"],
    strategy: "Colocar o agendamento sempre visível e reduzir o caminho até a confirmação.",
  },
  {
    slug: "barbearia",
    name: "Barbearia",
    short: "Identidade forte, serviços e reserva de horário.",
    tag: "Modelo demonstrativo",
    hue: 260,
    objective: "Fortalecer a marca da barbearia e organizar os horários de atendimento.",
    audience: "Público masculino que valoriza atendimento rápido e recorrente.",
    sections: [
      "Topo com identidade visual marcante",
      "Serviços e combos",
      "Time de barbeiros",
      "Galeria de cortes",
      "Planos de assinatura opcionais",
      "Reserva de horário",
    ],
    features: ["Reserva de horário", "WhatsApp direto", "Planos mensais", "Área de fidelidade opcional"],
    strategy: "Transformar visitante em cliente recorrente com agendamento simples e recorrência clara.",
  },
  {
    slug: "agropecuaria",
    name: "Agropecuária",
    short: "Catálogo de produtos e pedidos por WhatsApp.",
    tag: "Conceito de projeto",
    hue: 140,
    objective: "Apresentar linhas de produtos e receber pedidos e cotações.",
    audience: "Produtores rurais, pecuaristas e revendas da região.",
    sections: [
      "Topo com áreas de atuação",
      "Categorias de produtos",
      "Marcas e fornecedores",
      "Assistência técnica",
      "Condições de entrega",
      "Cotação rápida",
    ],
    features: ["Catálogo por categoria", "Pedido por WhatsApp", "Formulário de cotação", "Busca de produtos"],
    strategy: "Facilitar a cotação sem burocracia e organizar a demanda por categoria.",
  },
  {
    slug: "restaurante-delivery",
    name: "Restaurante ou delivery",
    short: "Cardápio digital e pedido direto sem intermediários.",
    tag: "Modelo demonstrativo",
    hue: 25,
    objective: "Mostrar o cardápio e receber pedidos direto, reduzindo dependência de aplicativos.",
    audience: "Clientes próximos que pedem pelo celular no horário das refeições.",
    sections: [
      "Topo com destaque do dia",
      "Cardápio por categoria",
      "Promoções e combos",
      "Área de entrega",
      "Horários de funcionamento",
      "Pedido pelo WhatsApp",
    ],
    features: ["Cardápio digital", "Carrinho simplificado", "Pedido por WhatsApp", "Integração com pagamento"],
    strategy: "Encurtar o caminho entre a fome e o pedido, com cardápio rápido no celular.",
  },
  {
    slug: "imobiliaria",
    name: "Imobiliária",
    short: "Vitrine de imóveis com filtros e contato por imóvel.",
    tag: "Conceito de projeto",
    hue: 210,
    objective: "Exibir imóveis disponíveis e gerar contatos qualificados para os corretores.",
    audience: "Pessoas buscando comprar ou alugar imóveis na cidade.",
    sections: [
      "Busca em destaque",
      "Imóveis em evidência",
      "Filtros por tipo, bairro e faixa de valor",
      "Página de detalhe do imóvel",
      "Sobre a imobiliária",
      "Contato com corretor",
    ],
    features: ["Filtros de busca", "Galeria por imóvel", "Contato direto por anúncio", "Cadastro de imóveis"],
    strategy: "Qualificar o interesse antes do contato, entregando informação completa por imóvel.",
  },
  {
    slug: "academia",
    name: "Academia",
    short: "Planos, modalidades e captação de matrículas.",
    tag: "Modelo demonstrativo",
    hue: 190,
    objective: "Apresentar planos e modalidades e captar alunos para aula experimental.",
    audience: "Pessoas buscando academia próxima, com foco em preço e estrutura.",
    sections: [
      "Topo com chamada para aula experimental",
      "Modalidades",
      "Planos e comparativo",
      "Estrutura e horários",
      "Equipe de professores",
      "Matrícula",
    ],
    features: ["Comparativo de planos", "Agendamento de aula experimental", "WhatsApp direto", "Formulário de matrícula"],
    strategy: "Usar a aula experimental como porta de entrada e reduzir a barreira da decisão.",
  },
  {
    slug: "empresa-de-transporte",
    name: "Empresa de transporte",
    short: "Serviços logísticos, rotas atendidas e cotação.",
    tag: "Conceito de projeto",
    hue: 230,
    objective: "Transmitir confiança operacional e receber solicitações de cotação de frete.",
    audience: "Empresas que precisam de transporte, coleta e entrega recorrente.",
    sections: [
      "Topo institucional",
      "Serviços de transporte",
      "Regiões e rotas atendidas",
      "Frota e estrutura",
      "Segurança e rastreamento",
      "Solicitação de cotação",
    ],
    features: ["Formulário de cotação", "Consulta de rotas", "Integração com sistema de gestão", "Área do cliente opcional"],
    strategy: "Demonstrar capacidade operacional e capturar a cotação com poucos campos.",
  },
  {
    slug: "prestador-de-servicos",
    name: "Prestador de serviços",
    short: "Autoridade profissional e orçamento em poucos cliques.",
    tag: "Conceito de projeto",
    hue: 280,
    objective: "Apresentar o profissional, os serviços e gerar pedidos de orçamento.",
    audience: "Clientes que procuram um profissional de confiança para um serviço específico.",
    sections: [
      "Topo com serviço principal",
      "Serviços oferecidos",
      "Como funciona o atendimento",
      "Trabalhos realizados",
      "Perguntas frequentes",
      "Orçamento",
    ],
    features: ["Formulário de orçamento", "WhatsApp direto", "Galeria de trabalhos", "Área de atendimento"],
    strategy: "Construir confiança rápido e transformar a visita em pedido de orçamento.",
  },
];

export type Technology = {
  slug: string;
  name: string;
  category: string;
  short: string;
  what: string;
  purpose: string;
  usage: string;
  benefit: string;
  example: string;
  integrations: string[];
};

export const TECHNOLOGIES: Technology[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT e OpenAI",
    category: "Inteligência artificial",
    short: "Modelos de IA para texto, análise e atendimento automatizado.",
    what: "A OpenAI desenvolve modelos de inteligência artificial capazes de entender e gerar texto, interpretar documentos e responder perguntas.",
    purpose:
      "Serve para automatizar atendimento, resumir informações, classificar mensagens e apoiar decisões dentro de um sistema.",
    usage:
      "Em um projeto, a IA pode ser conectada ao WhatsApp, ao site ou ao painel administrativo para responder dúvidas, organizar pedidos e gerar textos.",
    benefit:
      "Atendimento mais rápido, menos tarefas manuais e informação organizada sem esforço operacional.",
    example:
      "Um cliente envia uma mensagem descrevendo o problema; a IA identifica o serviço desejado, responde com as informações corretas e registra o contato no banco de dados.",
    integrations: ["WhatsApp Cloud API", "Supabase", "n8n", "React"],
  },
  {
    slug: "claude",
    name: "Claude",
    category: "Inteligência artificial",
    short: "Modelo de IA focado em textos longos e raciocínio cuidadoso.",
    what: "Claude é um modelo de inteligência artificial conhecido por lidar bem com textos extensos e instruções detalhadas.",
    purpose:
      "Serve para análise de documentos, produção de conteúdo estruturado e apoio em fluxos que exigem consistência.",
    usage:
      "Pode ser usado para revisar contratos, resumir relatórios internos e apoiar agentes de atendimento com respostas mais precisas.",
    benefit: "Respostas consistentes em tarefas longas e menos revisões manuais.",
    example:
      "Um relatório de operação enviado em PDF é resumido automaticamente e transformado em um painel de indicadores.",
    integrations: ["Supabase", "n8n", "WhatsApp Cloud API"],
  },
  {
    slug: "lovable",
    name: "Lovable",
    category: "Desenvolvimento assistido por IA",
    short: "Plataforma para construir aplicações web com apoio de IA.",
    what: "Lovable é uma plataforma que permite construir aplicações web completas com apoio de inteligência artificial.",
    purpose: "Serve para acelerar a criação de páginas, sistemas e integrações sem abrir mão de código real.",
    usage: "Utilizada para prototipar rapidamente e evoluir o protótipo até a versão publicada.",
    benefit: "Menos tempo entre a ideia e a primeira versão navegável do projeto.",
    example: "Um protótipo de sistema de agendamento é apresentado ao cliente em poucos dias para validação.",
    integrations: ["React", "TypeScript", "Supabase", "Vercel"],
  },
  {
    slug: "react",
    name: "React",
    category: "Front-end",
    short: "Biblioteca para construir interfaces rápidas e interativas.",
    what: "React é uma biblioteca criada para construir interfaces de usuário organizadas em componentes reutilizáveis.",
    purpose: "Serve para criar páginas e sistemas que respondem rápido às ações do usuário.",
    usage: "É a base das telas, dos painéis e das interações do projeto.",
    benefit: "Interface fluida, manutenção mais simples e evolução contínua do produto.",
    example: "Um painel de pedidos atualiza os números na tela sem recarregar a página.",
    integrations: ["TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
  },
  {
    slug: "typescript",
    name: "TypeScript",
    category: "Linguagem",
    short: "JavaScript com verificação de tipos e menos erros.",
    what: "TypeScript é uma extensão do JavaScript que verifica os tipos de dados durante o desenvolvimento.",
    purpose: "Serve para reduzir erros antes que eles cheguem ao usuário final.",
    usage: "Utilizado em todo o código do projeto, do front-end às funções de servidor.",
    benefit: "Menos falhas em produção e mais segurança ao evoluir o sistema.",
    example: "Um campo obrigatório esquecido no formulário é apontado ainda no desenvolvimento.",
    integrations: ["React", "Supabase", "GitHub"],
  },
  {
    slug: "tailwind-css",
    name: "Tailwind CSS",
    category: "Design e estilo",
    short: "Framework de estilos para interfaces consistentes e responsivas.",
    what: "Tailwind CSS é um framework de estilos que organiza a aparência da interface em classes utilitárias.",
    purpose: "Serve para manter identidade visual consistente em todas as telas e tamanhos de tela.",
    usage: "Aplicado no design de todos os componentes, com ajustes para celular, tablet e computador.",
    benefit: "Design coerente, responsivo e fácil de ajustar quando a marca muda.",
    example: "A mesma página se adapta perfeitamente do celular ao monitor grande.",
    integrations: ["React", "TypeScript"],
  },
  {
    slug: "supabase",
    name: "Supabase",
    category: "Banco de dados e autenticação",
    short: "Banco de dados, login de usuários e armazenamento de arquivos.",
    what: "Supabase reúne banco de dados, autenticação, armazenamento de arquivos e funções de servidor.",
    purpose: "Serve para guardar as informações do sistema com segurança e controlar quem acessa o quê.",
    usage: "Usado para cadastrar leads, usuários, pedidos, agendamentos e qualquer dado do projeto.",
    benefit: "Dados centralizados, seguros e disponíveis para relatórios e automações.",
    example: "Um formulário preenchido no site cria um registro imediato na base de dados da empresa.",
    integrations: ["React", "n8n", "Stripe", "Mercado Pago"],
  },
  {
    slug: "n8n",
    name: "n8n",
    category: "Automação e integração",
    short: "Conecta sistemas e automatiza tarefas repetitivas.",
    what: "O n8n permite conectar diferentes sistemas e automatizar tarefas que antes precisavam ser realizadas manualmente.",
    purpose: "Serve para criar fluxos automáticos entre site, WhatsApp, planilhas, banco de dados e outras ferramentas.",
    usage: "Cada etapa manual do processo vira um passo automático dentro de um fluxo.",
    benefit: "Menos tarefas manuais, respostas mais rápidas e maior controle da operação.",
    example:
      "Um formulário preenchido no site pode cadastrar o contato no banco de dados, enviar uma mensagem pelo WhatsApp, atualizar uma planilha e enviar um aviso automático.",
    integrations: ["Supabase", "WhatsApp Cloud API", "ChatGPT e OpenAI", "Mercado Pago"],
  },
  {
    slug: "whatsapp-cloud-api",
    name: "WhatsApp Cloud API",
    category: "Comunicação",
    short: "Atendimento e mensagens automáticas no WhatsApp oficial.",
    what: "A WhatsApp Cloud API é a interface oficial do WhatsApp para envio e recebimento de mensagens por sistemas.",
    purpose: "Serve para atender clientes, enviar confirmações e conectar o WhatsApp ao restante da operação.",
    usage: "Usada para agentes de atendimento, confirmações de agendamento e avisos automáticos.",
    benefit: "Atendimento no canal que o cliente já usa, com histórico e organização.",
    example: "Após um agendamento, o cliente recebe a confirmação e um lembrete automático no dia anterior.",
    integrations: ["n8n", "Supabase", "ChatGPT e OpenAI"],
  },
  {
    slug: "mercado-pago",
    name: "Mercado Pago",
    category: "Pagamentos",
    short: "Pagamentos com Pix, boleto e cartão no Brasil.",
    what: "Mercado Pago é uma plataforma de pagamentos amplamente utilizada no Brasil.",
    purpose: "Serve para receber pagamentos por Pix, cartão e boleto dentro do próprio site ou sistema.",
    usage: "Integrado a checkouts, assinaturas e cobranças de serviços.",
    benefit: "Recebimento simples, com os meios de pagamento que o cliente brasileiro já conhece.",
    example: "O cliente escolhe um plano na página e paga por Pix sem sair do site.",
    integrations: ["Supabase", "n8n", "React"],
  },
  {
    slug: "stripe",
    name: "Stripe",
    category: "Pagamentos",
    short: "Assinaturas e pagamentos internacionais.",
    what: "Stripe é uma plataforma de pagamentos usada mundialmente, com forte suporte a assinaturas.",
    purpose: "Serve para cobrar planos recorrentes e vendas internacionais.",
    usage: "Ideal para produtos SaaS com planos mensais e controle de acesso por assinatura.",
    benefit: "Cobrança recorrente automática e controle claro de quem está ativo.",
    example: "Um sistema libera o acesso do usuário assim que a assinatura mensal é confirmada.",
    integrations: ["Supabase", "React", "n8n"],
  },
  {
    slug: "github",
    name: "GitHub",
    category: "Versionamento",
    short: "Histórico do código e trabalho organizado.",
    what: "GitHub é a plataforma onde o código do projeto fica versionado e organizado.",
    purpose: "Serve para manter histórico de alterações e permitir evolução segura do projeto.",
    usage: "Cada alteração fica registrada, com possibilidade de voltar atrás quando necessário.",
    benefit: "Segurança para evoluir o projeto sem perder o que já funciona.",
    example: "Um ajuste que causou problema é revertido em minutos.",
    integrations: ["Vercel", "TypeScript", "React"],
  },
  {
    slug: "vercel",
    name: "Vercel",
    category: "Publicação",
    short: "Publicação rápida, segura e com domínio próprio.",
    what: "Vercel é uma plataforma de publicação de aplicações web modernas.",
    purpose: "Serve para colocar o projeto no ar com velocidade, certificado de segurança e domínio próprio.",
    usage: "Cada nova versão aprovada é publicada automaticamente.",
    benefit: "Site rápido, disponível e fácil de atualizar.",
    example: "Uma alteração aprovada pelo cliente entra no ar em poucos minutos.",
    integrations: ["GitHub", "React", "Supabase"],
  },
  {
    slug: "canva",
    name: "Canva",
    category: "Design de apoio",
    short: "Peças visuais e materiais de apoio do projeto.",
    what: "Canva é uma ferramenta de criação de peças gráficas e materiais visuais.",
    purpose: "Serve para produzir imagens de apoio, posts e materiais complementares ao projeto digital.",
    usage: "Usada para criar apoio visual coerente com a identidade da página.",
    benefit: "Comunicação visual alinhada em todos os canais.",
    example: "As artes das redes sociais seguem o mesmo padrão visual da landing page.",
    integrations: ["Instagram", "CapCut"],
  },
  {
    slug: "capcut",
    name: "CapCut",
    category: "Vídeo",
    short: "Edição de vídeos curtos para divulgação.",
    what: "CapCut é uma ferramenta de edição de vídeo voltada a conteúdos curtos.",
    purpose: "Serve para produzir vídeos de apresentação do produto ou do serviço.",
    usage: "Usada para criar vídeos de demonstração e materiais de divulgação.",
    benefit: "Conteúdo em vídeo para apoiar a divulgação sem custo alto de produção.",
    example: "Um vídeo curto mostra o funcionamento do sistema para novos clientes.",
    integrations: ["Canva", "Instagram"],
  },
];

export const PROCESS_STEPS = [
  { title: "Diagnóstico", description: "Entendo o negócio, o objetivo e o problema que precisa ser resolvido." },
  { title: "Planejamento", description: "Defino estrutura, funcionalidades, integrações e cronograma." },
  { title: "Protótipo", description: "Desenvolvo uma primeira versão visual para validação." },
  { title: "Desenvolvimento", description: "Transformo o protótipo em um produto funcional." },
  { title: "Testes e ajustes", description: "Valido funcionamento, responsividade e experiência do usuário." },
  { title: "Publicação", description: "Coloco o projeto no ar e entrego as orientações necessárias." },
];

export type Solution = {
  name: string;
  description: string;
  status: "Conceito" | "Protótipo" | "Em desenvolvimento";
  features: string[];
};

export const SOLUTIONS: Solution[] = [
  {
    name: "Gestão de rotas e frotas",
    description: "Organização de rotas, veículos, motoristas e acompanhamento das operações diárias.",
    status: "Em desenvolvimento",
    features: ["Cadastro de rotas", "Controle de veículos", "Registro de viagens", "Indicadores operacionais"],
  },
  {
    name: "Agente de atendimento para WhatsApp",
    description: "Atendimento automático que responde dúvidas, qualifica contatos e encaminha para o responsável.",
    status: "Protótipo",
    features: ["Respostas automáticas", "Qualificação de leads", "Transferência para humano", "Histórico de conversas"],
  },
  {
    name: "Dashboard de controle empresarial",
    description: "Painel com os principais números da operação reunidos em um único lugar.",
    status: "Protótipo",
    features: ["Indicadores por período", "Filtros personalizados", "Exportação de dados", "Acesso por perfil"],
  },
  {
    name: "Sistema de agendamento",
    description: "Agenda online com confirmação automática e lembretes para reduzir faltas.",
    status: "Em desenvolvimento",
    features: ["Agenda por profissional", "Confirmação automática", "Lembretes no WhatsApp", "Bloqueio de horários"],
  },
  {
    name: "Automação administrativa",
    description: "Fluxos que eliminam digitação repetida entre formulários, planilhas e sistemas.",
    status: "Conceito",
    features: ["Entrada única de dados", "Distribuição automática", "Relatórios periódicos", "Alertas automáticos"],
  },
  {
    name: "Plataforma RANKBRUM ONE AI",
    description: "Plataforma que reúne automações, agentes e painéis em um ambiente único.",
    status: "Conceito",
    features: ["Múltiplos agentes", "Integrações centralizadas", "Gestão multiempresa", "Painel unificado"],
  },
];

export const FAQS = [
  {
    q: "Quanto tempo leva para criar uma landing page?",
    a: "O prazo depende do escopo, da quantidade de seções e das integrações necessárias. Após o diagnóstico, apresento um cronograma com as etapas e as datas de entrega.",
  },
  {
    q: "Vocês criam projetos personalizados?",
    a: "Sim. Todo projeto é planejado a partir do negócio, do objetivo e do público do cliente. Não utilizo modelos prontos aplicados sem adaptação.",
  },
  {
    q: "É possível integrar o site ao WhatsApp?",
    a: "Sim. Podemos usar botões diretos, envio automático de mensagens após o preenchimento de formulários e também agentes de atendimento pela API oficial do WhatsApp.",
  },
  {
    q: "Vocês desenvolvem aplicativos e sistemas?",
    a: "Sim. Desenvolvemos aplicativos web, painéis administrativos, plataformas SaaS e sistemas internos de acordo com a operação da empresa.",
  },
  {
    q: "É possível adicionar automações com IA?",
    a: "Sim. A IA pode ser aplicada em atendimento, organização de informações, geração de relatórios e apoio às rotinas internas, sempre com regras definidas junto ao cliente.",
  },
  {
    q: "O projeto funciona no celular?",
    a: "Sim. Todos os projetos são construídos com layout responsivo e testados em celular, tablet e computador.",
  },
  {
    q: "Posso solicitar alterações?",
    a: "Sim. O projeto passa por etapas de validação e as alterações previstas no escopo são realizadas antes da publicação. Mudanças fora do escopo são avaliadas separadamente.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "As condições são definidas na proposta, de acordo com o tamanho e a duração do projeto. Não defino valores fixos antes de entender o escopo.",
  },
  {
    q: "O domínio e a hospedagem estão incluídos?",
    a: "Isso depende do que for combinado na proposta. Oriento sobre as opções de domínio e publicação e posso cuidar da configuração.",
  },
  {
    q: "Vocês oferecem suporte depois da entrega?",
    a: "Sim, o suporte pode ser incluído no projeto. O formato e o período são definidos na proposta.",
  },
];

export const PROJECT_TYPES = [
  "Landing page",
  "Aplicativo",
  "Sistema SaaS",
  "Automação",
  "Agente de IA",
  "Integração",
  "Outro",
];

export const BUDGET_RANGES = [
  "Ainda não defini",
  "Até R$ 2.000",
  "R$ 2.000 a R$ 5.000",
  "R$ 5.000 a R$ 10.000",
  "Acima de R$ 10.000",
];

export const DEADLINES = ["Prioridade máxima", "Prazo intermediário", "Prazo flexível"];

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Processo", href: "#processo" },
  { label: "Simulador", href: "#simulador" },
  { label: "Contato", href: "#contato" },
];
