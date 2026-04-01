import { BlogPost, Service, Testimonial } from './types';

export const SITE_NAME = "ALC Performance Training";
export const INSTAGRAM_HANDLE = "@alc_performance_training";
export const WHATSAPP_LINK = "https://wa.me/5519996282565?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20ALC%20Performance%20e%20quero%20evoluir%20meu%20treino!";

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'A Metodologia', href: '#sobre' },
  { name: 'Planos', href: '#servicos' },
  { name: 'Contato', href: '#contato' },
];

export const SERVICES: Service[] = [
  {
    id: 'consultoria-pro',
    title: 'Consultoria PRO Online',
    description: 'Periodização completa via aplicativo. Análise de movimento por vídeo, ajustes semanais de carga e suporte direto com o treinador.',
    icon: 'video'
  },
  {
    id: 'personal-training',
    title: 'Personal Training Presencial',
    description: 'Treinamento de elite em Campinas - SP. Biomecânica aplicada e intensidade controlada para extrair o máximo de cada sessão.',
    icon: 'dumbell'
  },
  {
    id: 'preparacao',
    title: 'Preparação Física',
    description: 'Focado em atletas amadores e profissionais. Potência, agilidade e força específica para sua modalidade esportiva ou luta.',
    icon: 'activity'
  },
  {
    id: 'mentoria',
    title: 'Mentoria & Avaliação',
    description: 'Avaliação postural e física completa + mentoria de lifestyle para alinhar rotina, sono e treino para alta performance.',
    icon: 'calendar'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'como-ganhar-massa-muscular-rapido',
    title: 'Hipertrofia Eficiente: O Guia da ALC Performance',
    excerpt: 'Descubra os pilares da construção muscular baseada em ciência e prática de alto nível.',
    content: 'Para ganhar massa muscular rápido, você precisa alinhar treino tensional, superávit calórico e descanso. Não existe pílula mágica, existe constância e progressão de carga. O erro mais comum de quem busca ganhar massa muscular rápido é focar apenas no peso, esquecendo a técnica. A tensão mecânica é o principal gatilho para a hipertrofia. Isso significa controlar a fase excêntrica (descida) e explodir na concêntrica (subida).',
    tags: ['#hipertrofia', '#bodybuilding', '#performance', '#treino', '#science'],
    imageUrl: 'https://picsum.photos/seed/muscle/800/600'
  },
  {
    id: '2',
    slug: 'dicas-treino-queimar-gordura',
    title: 'Definição Muscular: Estratégias de Queima de Gordura',
    excerpt: 'Como secar mantendo a densidade muscular. A verdade sobre o cardio e a intensidade.',
    content: 'Queimar gordura exige intensidade. Treinos HIIT combinados com musculação pesada são a chave para manter o metabolismo acelerado pós-treino (EPOC). Não tenha medo de pegar peso. Músculos gastam mais calorias em repouso do que gordura.',
    tags: ['#cutting', '#emagrecimento', '#definição', '#metabolismo', '#saude'],
    imageUrl: 'https://picsum.photos/seed/cardio/800/600'
  },
  {
    id: '3',
    slug: 'alimentacao-resultados-treino',
    title: 'Nutrição para Performance: O Combustível do Atleta',
    excerpt: 'Otimizando o pré e pós treino para render mais e recuperar mais rápido.',
    content: 'Não adianta treinar como um leão e comer como um passarinho. A ingestão correta de proteínas e carboidratos nos horários certos muda o jogo. Antes do treino, priorize carboidratos de média absorção. Pós-treino, proteína de rápida absorção para recuperação imediata.',
    tags: ['#nutricaoesportiva', '#dieta', '#suplementacao', '#fuel', '#performance'],
    imageUrl: 'https://picsum.photos/seed/food/800/600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendes',
    result: 'Consultoria PRO',
    text: 'A organização da ALC Performance é outro nível. O app é intuitivo e os feedbacks semanais nos vídeos de execução corrigiram dores que eu tinha há anos.',
    imageUrl: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    id: '2',
    name: 'Fernanda Souza',
    result: 'Personal Presencial',
    text: 'Treinar com a metodologia ALC mudou meu corpo. A intensidade é alta, mas a segurança técnica me fez evoluir cargas que eu nunca imaginei.',
    imageUrl: 'https://picsum.photos/seed/user2/100/100'
  },
  {
    id: '3',
    name: 'Roberto Alencar',
    result: 'Preparação Física',
    text: 'Como lutador, precisava de gás e força. A preparação física específica da ALC me deixou muito mais rápido e forte no tatame.',
    imageUrl: 'https://picsum.photos/seed/user3/100/100'
  }
];