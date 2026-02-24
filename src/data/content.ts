import { BookContent } from "./types";

export const bookData: BookContent = {
  author: "Prof. Me. Divino Ribeiro Viana",
  presentation: "Este material didático foi desenvolvido para auxiliar professores de Filosofia no ensino médio...",
  series: [
    {
      id: "s1",
      number: 1,
      title: "1ª SÉRIE – INTRODUÇÃO À FILOSOFIA",
      bimestres: [
        {
          id: "s1b1",
          number: 1,
          title: "A ORIGEM DA FILOSOFIA E OS PRÉ-SOCRÁTICOS",
          classes: [
            {
              id: "c1",
              class_number: 1,
              title: "O que é Filosofia?",
              objectives: [
                "Definir o conceito de Filosofia",
                "Compreender as características do pensamento filosófico",
                "Identificar a diferença entre filosofia e outras formas de conhecimento"
              ],
              theory: {
                title: "O que significa “Filosofia”?",
                content: "A palavra “filosofia” vem do grego “philosophia”, que significa “amor à sabedoria” (philos = amor, sophia = sabedoria). Foi criada por Pitágoras, que se considerava um “filósofo” - alguém que busca a sabedoria, não alguém que já a possui.",
                sections: [
                  {
                    title: "Características do pensamento filosófico",
                    items: [
                      "Questionamento radical: A filosofia questiona tudo, inclusive aquilo que parece óbvio",
                      "Busca pela fundamentação: Procura as razões últimas das coisas",
                      "Universalidade: Busca princípios válidos para todos",
                      "Racionalidade: Usa a razão como instrumento principal",
                      "Criticidade: Examina criticamente todas as afirmações"
                    ]
                  },
                  {
                    title: "Diferenças entre filosofia e outras formas de conhecimento",
                    items: [
                      "Filosofia x Senso comum: A filosofia questiona o que o senso comum aceita sem reflexão",
                      "Filosofia x Ciência: A ciência estuda aspectos específicos da realidade; a filosofia busca uma visão global",
                      "Filosofia x Religião: A religião se baseia na fé; a filosofia na razão"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Dinâmica “O que você sabe sobre filosofia?”" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição dialogada com exemplos práticos" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de situações cotidianas" },
                  { title: "Fechamento", duration: "5 min", description: "Síntese dos conceitos principais" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Questionário Filosófico",
                  description: "Responda às seguintes perguntas de forma reflexiva:",
                  questions: [
                    "Por que existimos?",
                    "O que é a felicidade?",
                    "Como sabemos que algo é verdadeiro?",
                    "O que é justo?",
                    "Qual o sentido da vida?"
                  ]
                },
                {
                  title: "Atividade 2: Filosofia no Cotidiano",
                  description: "Identifique situações do seu dia a dia em que você faz perguntas filosóficas sem perceber. Exemplo: “Por que devo obedecer às regras?” é uma questão de filosofia política."
                }
              ],
              reflectionQuestions: [
                "Você se considera uma pessoa que questiona as coisas ou aceita tudo sem pensar?",
                "Qual a importância de questionar aquilo que parece óbvio?",
                "Como a filosofia pode ajudar na sua vida pessoal?"
              ]
            },
            {
              id: "c2",
              class_number: 2,
              title: "Do Mito ao Logos: a origem do pensamento racional",
              objectives: [
                "Compreender o pensamento mítico e suas características",
                "Analisar a transição do mito para o logos",
                "Identificar as condições históricas que favoreceram o surgimento da filosofia"
              ],
              theory: {
                title: "O Pensamento Mítico",
                content: "Os mitos eram as primeiras explicações sobre a origem e funcionamento do mundo.",
                sections: [
                  {
                    title: "Características",
                    items: [
                      "Narrativas sagradas: Contavam histórias sobre deuses e heróis",
                      "Explicações sobrenaturais: Os fenômenos eram explicados pela ação dos deuses",
                      "Tradição oral: Transmitidos de geração em geração",
                      "Aceitação pela autoridade: Não eram questionados, apenas aceitos"
                    ]
                  },
                  {
                    title: "Exemplos de mitos gregos",
                    items: [
                      "Cosmogonia: Caos deu origem a Gaia (Terra), que gerou Urano (Céu)",
                      "Fenômenos naturais: Zeus controlava os raios, Poseidon os mares",
                      "Estações do ano: Perséfone no Hades explica o inverno"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Apresentação de um mito grego" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Comparação entre explicação mítica e racional" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de exemplos atuais" },
                  { title: "Fechamento", duration: "5 min", description: "Síntese da transição mito-logos" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Comparando Explicações",
                  table: {
                    headers: ["Fenômeno", "Explicação Mítica", "Explicação Racional"],
                    rows: [
                      ["Raio", "Zeus lança seus raios", "Descarga elétrica atmosférica"],
                      ["Terremoto", "Poseidon está irritado", "Movimento das placas tectônicas"],
                      ["Eclipse", "Dragão devora o sol", "Lua entre Terra e Sol"],
                      ["Doença", "Castigo dos deuses", "Ação de vírus/bactérias"]
                    ]
                  }
                }
              ],
              reflectionQuestions: [
                "Por que os seres humanos criaram mitos para explicar o mundo?",
                "O pensamento mítico desapareceu completamente da nossa sociedade?",
                "Quais são as vantagens e desvantagens de cada tipo de pensamento?"
              ]
            },
            {
              id: "c3",
              class_number: 3,
              title: "Tales de Mileto: o primeiro filósofo",
              objectives: [
                "Conhecer Tales de Mileto e sua importância histórica",
                "Compreender sua busca pelo princípio fundamental (arché)",
                "Analisar a diferença entre sua explicação e as míticas"
              ],
              theory: {
                title: "Tales de Mileto (624-546 a.C.)",
                content: "Considerado o primeiro filósofo da história ocidental, Tales viveu na cidade de Mileto, na Ásia Menor (atual Turquia). Era comerciante, matemático, astrônomo e filósofo.",
                sections: [
                  {
                    title: "Por que Tales é considerado o primeiro filósofo?",
                    items: [
                      "Abandonou as explicações míticas: Não recorreu aos deuses para explicar a realidade",
                      "Buscou um princípio natural: Procurou uma causa natural para todas as coisas",
                      "Usou a razão: Baseou suas explicações na observação e no raciocínio"
                    ]
                  },
                  {
                    title: "A Teoria de Tales: A Água como Arché",
                    items: [
                      "A água está presente em todos os seres vivos",
                      "A Terra flutua sobre a água (explicação para terremotos)",
                      "A água pode assumir diferentes estados (sólido, líquido, gasoso)",
                      "Sem água, não há vida"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Apresentação de Tales através de uma história" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Análise de sua teoria e método" },
                  { title: "Aplicação", duration: "10 min", description: "Comparação com explicações míticas" },
                  { title: "Fechamento", duration: "5 min", description: "Importância histórica de Tales" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Investigando como Tales",
                  description: "Imagine que você é Tales e precisa explicar os seguintes fenômenos usando apenas a água:",
                  questions: [
                    "Por que as plantas crescem?",
                    "Por que chove?",
                    "Por que o mar é salgado?",
                    "Por que alguns objetos flutuam e outros afundam?"
                  ]
                }
              ],
              reflectionQuestions: [
                "Por que a busca por um princípio único é importante para a filosofia?",
                "Tales estava certo ao escolher a água? Por que isso não importa tanto?",
                "Que características um bom filósofo deve ter, baseando-se no exemplo de Tales?"
              ]
            },
            {
              id: "c4",
              class_number: 4,
              title: "Anaximandro: o infinito como princípio",
              objectives: [
                "Conhecer Anaximandro e sua crítica a Tales",
                "Compreender o conceito de ápeiron (infinito/indeterminado)",
                "Analisar a evolução do pensamento filosófico"
              ],
              theory: {
                title: "Anaximandro de Mileto (610-546 a.C.)",
                content: "Discípulo de Tales, Anaximandro foi o primeiro filósofo a criticar seu mestre, mostrando que a filosofia é um processo de constante questionamento e aperfeiçoamento.",
                sections: [
                  {
                    title: "A Crítica a Tales",
                    items: [
                      "Anaximandro questionou: “Se a água é o princípio de tudo, como explicar o fogo? A água e o fogo são opostos, um destrói o outro. Como a água poderia gerar seu próprio oposto?”"
                    ]
                  },
                  {
                    title: "A Teoria do Ápeiron",
                    items: [
                      "Infinito: Não tem começo nem fim",
                      "Indeterminado: Não possui qualidades específicas (não é quente nem frio, seco nem úmido)",
                      "Eterno: Sempre existiu e sempre existirá",
                      "Divino: Governa todas as coisas"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Dinâmica sobre opostos na natureza" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Apresentação da teoria do ápeiron" },
                  { title: "Aplicação", duration: "10 min", description: "Análise da crítica a Tales" },
                  { title: "Fechamento", duration: "5 min", description: "Importância da crítica na filosofia" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Identificando Opostos",
                  description: "Liste pares de opostos que você observa na natureza e na vida:",
                  questions: [
                    "Natureza: quente/frio, dia/noite, vida/morte",
                    "Vida humana: alegria/tristeza, amor/ódio, paz/guerra",
                    "Como estes opostos poderiam vir de um mesmo princípio?"
                  ]
                }
              ],
              reflectionQuestions: [
                "Por que é importante que os filósofos critiquem uns aos outros?",
                "O que é mais difícil: criar uma teoria nova ou criticar uma existente?",
                "Como a crítica de Anaximandro mostra a evolução do pensamento filosófico?"
              ]
            },
            {
              id: "c5",
              class_number: 5,
              title: "Heráclito: o filósofo do devir",
              objectives: [
                "Conhecer Heráclito e sua filosofia do movimento",
                "Compreender os conceitos de devir e logos",
                "Analisar a importância da mudança e do conflito"
              ],
              theory: {
                title: "Heráclito de Éfeso (535-475 a.C.)",
                content: "Conhecido como “o Obscuro” devido à complexidade de seus escritos, Heráclito desenvolveu uma filosofia baseada na ideia de que tudo está em constante mudança.",
                sections: [
                  {
                    title: "Principais Conceitos",
                    items: [
                      "O Devir (Mudança Constante): “Não se pode entrar duas vezes no mesmo rio”",
                      "A Unidade dos Opostos: Os opostos são aspectos de uma mesma realidade",
                      "O Logos (Razão Universal): Princípio racional que governa o universo",
                      "O Fogo como Arché: O fogo simboliza a mudança constante"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Observação de mudanças na sala de aula" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Análise dos fragmentos de Heráclito" },
                  { title: "Aplicação", duration: "10 min", description: "Identificação de opostos unidos" },
                  { title: "Fechamento", duration: "5 min", description: "Síntese da filosofia heraclitiana" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Mudanças em Minha Vida",
                  description: "Reflita sobre as mudanças em sua vida:",
                  questions: [
                    "Como você mudou nos últimos 5 anos?",
                    "O que permanece igual em você apesar das mudanças?",
                    "Como as dificuldades (conflitos) contribuíram para seu crescimento?"
                  ]
                }
              ],
              reflectionQuestions: [
                "Se tudo muda constantemente, existe algo permanente em nós?",
                "Por que Heráclito considera o conflito algo positivo?",
                "Como a filosofia de Heráclito pode nos ajudar a lidar com mudanças?"
              ]
            },
            {
              id: "c6",
              class_number: 6,
              title: "Parmênides: o filósofo do Ser",
              objectives: [
                "Conhecer Parmênides e sua filosofia do ser",
                "Compreender a oposição entre ser e não-ser",
                "Analisar o conflito entre razão e sentidos"
              ],
              theory: {
                title: "Parmênides de Eléia (530-460 a.C.)",
                content: "Parmênides desenvolveu uma filosofia completamente oposta à de Heráclito, defendendo que a realidade verdadeira é imutável e eterna.",
                sections: [
                  {
                    title: "O Poema de Parmênides",
                    items: [
                      "O Caminho da Verdade (Alétheia): “O ser é e não pode não ser”",
                      "O Caminho da Opinião (Doxa): O mundo dos sentidos, das aparências"
                    ]
                  },
                  {
                    title: "Características do Ser",
                    items: [
                      "Uno: Não há multiplicidade real",
                      "Eterno: Não tem começo nem fim",
                      "Imutável: Não muda nunca",
                      "Imóvel: Não se move"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Dinâmica sobre ilusões de ótica" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Análise do poema de Parmênides" },
                  { title: "Aplicação", duration: "10 min", description: "Debate Heráclito vs. Parmênides" },
                  { title: "Fechamento", duration: "5 min", description: "Síntese das duas filosofias" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Razão vs. Sentidos",
                  description: "Analise as seguintes situações onde razão e sentidos divergem:",
                  questions: [
                    "O Sol parece girar em torno da Terra (sentidos) vs. A Terra gira em torno do Sol (razão)",
                    "Uma vara parece quebrada na água (sentidos) vs. É a refração da luz (razão)",
                    "O mundo parece plano (sentidos) vs. A Terra é redonda (razão)"
                  ]
                }
              ],
              reflectionQuestions: [
                "Em quem devemos confiar mais: na razão ou nos sentidos?",
                "É possível que o movimento seja uma ilusão?",
                "Como conciliar as filosofias de Heráclito e Parmênides?"
              ]
            },
            {
              id: "c7",
              class_number: 7,
              title: "Empédocles e Anaxágoras: tentativas de síntese",
              objectives: [
                "Conhecer as tentativas de conciliar Heráclito e Parmênides",
                "Compreender a teoria dos quatro elementos de Empédocles",
                "Analisar a teoria das sementes de Anaxágoras"
              ],
              theory: {
                title: "O Problema Filosófico",
                content: "Após Heráclito e Parmênides, os filósofos enfrentaram um dilema: Como explicar a mudança sem negar a permanência?",
                sections: [
                  {
                    title: "Empédocles (490-430 a.C.)",
                    items: [
                      "Teoria dos Quatro Elementos: Terra, Água, Ar e Fogo",
                      "Duas Forças Cósmicas: Amor (Philía) e Ódio (Neîkos)"
                    ]
                  },
                  {
                    title: "Anaxágoras (500-428 a.C.)",
                    items: [
                      "Teoria das Sementes (Spérmata): Infinitas partículas elementares",
                      "O Nous (Inteligência): Princípio ordenador do universo"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Experiência com misturas de cores" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Apresentação das duas teorias" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de como resolvem o problema" },
                  { title: "Fechamento", duration: "5 min", description: "Avaliação das soluções propostas" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Os Quatro Elementos Hoje",
                  description: "Analise como a teoria dos quatro elementos se relaciona com conhecimentos atuais:",
                  questions: [
                    "Terra: Sólidos, minerais",
                    "Água: Líquidos, hidratação",
                    "Ar: Gases, respiração",
                    "Fogo: Energia, calor"
                  ]
                }
              ],
              reflectionQuestions: [
                "Qual das duas teorias explica melhor a realidade?",
                "É necessário um princípio inteligente (Nous) para organizar o universo?",
                "Como essas teorias antigas se relacionam com a ciência moderna?"
              ]
            },
            {
              id: "c8",
              class_number: 8,
              title: "Demócrito e o Atomismo",
              objectives: [
                "Conhecer Demócrito e a teoria atomista",
                "Compreender os conceitos de átomo e vazio",
                "Analisar a influência do atomismo na ciência moderna"
              ],
              theory: {
                title: "Demócrito de Abdera (460-370 a.C.)",
                content: "Conhecido como “o filósofo que ri”, Demócrito desenvolveu a teoria atomista, uma das mais importantes da filosofia antiga.",
                sections: [
                  {
                    title: "Princípios Fundamentais",
                    items: [
                      "Tudo é composto de átomos: Partículas indivisíveis e eternas",
                      "Existe o vazio: Espaço onde os átomos se movem",
                      "Nada surge do nada: Tudo é rearranjo de átomos"
                    ]
                  },
                  {
                    title: "Características dos Átomos",
                    items: [
                      "Indivisíveis: “Átomo” = “que não se corta”",
                      "Eternos: Não nascem nem morrem",
                      "Infinitos: Existem infinitos átomos"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Experiência com areia e água (divisibilidade)" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Apresentação da teoria atomista" },
                  { title: "Aplicação", duration: "10 min", description: "Comparação com ciência moderna" },
                  { title: "Fechamento", duration: "5 min", description: "Importância do atomismo" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Átomos e Objetos",
                  table: {
                    headers: ["Objeto", "Propriedade", "Explicação Atomista"],
                    rows: [
                      ["Ferro", "Dureza", "Átomos com ganchos que se prendem"],
                      ["Água", "Fluidez", "Átomos lisos e redondos"],
                      ["Fogo", "Calor", "Átomos pequenos e agitados"],
                      ["Pedra", "Peso", "Muitos átomos pesados juntos"]
                    ]
                  }
                }
              ],
              reflectionQuestions: [
                "Se somos feitos de átomos, o que nos torna únicos?",
                "O determinismo atomista elimina a responsabilidade moral?",
                "Como a teoria de Demócrito mudou nossa visão do mundo?"
              ]
            },
            {
              id: "c9",
              class_number: 9,
              title: "Síntese Bimestral",
              objectives: [
                "Sintetizar os conhecimentos do bimestre",
                "Comparar as diferentes teorias pré-socráticas",
                "Avaliar a importância dos pré-socráticos para a filosofia"
              ],
              theory: {
                title: "Recapitulação dos Pré-Socráticos",
                content: "Neste bimestre, vimos como a filosofia nasceu da transição do mito para o logos e como os primeiros filósofos buscaram a arché.",
                sections: [
                  {
                    title: "Problemas Fundamentais Levantados",
                    items: [
                      "Cosmológico: Qual a origem de tudo?",
                      "Ontológico: O que é o ser?",
                      "Epistemológico: Como conhecemos?",
                      "Metodológico: Razão ou sentidos?"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Quiz rápido sobre os filósofos" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Síntese comparativa" },
                  { title: "Aplicação", duration: "10 min", description: "Avaliação escrita" },
                  { title: "Fechamento", duration: "5 min", description: "Reflexão sobre o aprendizado" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Linha do Tempo Filosófica",
                  description: "Crie uma linha do tempo ilustrada com as das dos filósofos e suas principais ideias."
                }
              ],
              reflectionQuestions: [
                "Qual filósofo pré-socrático mais influenciou sua forma de pensar?",
                "Que perguntas dos pré-socráticos ainda não foram respondidas?",
                "Como o estudo da filosofia antiga pode nos ajudar hoje?"
              ]
            }
          ]
        },
        {
          id: "s1b2",
          number: 2,
          title: "SÓCRATES, PLATÃO E ARISTÓTELES",
          classes: [
            {
              id: "c10",
              class_number: 10,
              title: "Sócrates: o filósofo da vida",
              objectives: [
                "Conhecer a vida e o método de Sócrates",
                "Compreender a importância do autoconhecimento",
                "Praticar o questionamento socrático"
              ],
              theory: {
                title: "Sócrates (470-399 a.C.)",
                content: "Considerado o fundador da filosofia moral, Sócrates não deixou obras escritas. Conhecemos seu pensamento através de Platão, seu discípulo.",
                sections: [
                  {
                    title: "O Método Socrático",
                    items: [
                      "A Ironia Socrática: “Só sei que nada sei”",
                      "A Maiêutica (Arte de Parir Ideias): Ajudar as pessoas a descobrir a verdade por si mesmas"
                    ]
                  },
                  {
                    title: "Principais Ensinamentos",
                    items: [
                      "“Conhece-te a ti mesmo”",
                      "“Uma vida sem exame não vale a pena ser vivida”",
                      "“Ninguém faz o mal voluntariamente”"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Dinâmica “O que você sabe sobre si mesmo?”" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição dialogada" },
                  { title: "Aplicação", duration: "10 min", description: "Prática do método socrático" },
                  { title: "Fechamento", duration: "5 min", description: "Síntese dos conceitos" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Autoconhecimento",
                  description: "Responda honestamente: Quais são seus maiores medos? O que mais valoriza na vida? Que tipo de pessoa você quer ser?"
                }
              ],
              reflectionQuestions: [
                "Por que é difícil seguir o conselho “conhece-te a ti mesmo”?",
                "Você concorda que “ninguém faz o mal voluntariamente”?",
                "Como aplicar o método socrático na sua vida?"
              ]
            },
            {
              id: "c11",
              class_number: 11,
              title: "Platão: o mundo das ideias",
              objectives: [
                "Conhecer a biografia de Platão",
                "Compreender a Teoria das Ideias",
                "Analisar a Alegoria da Caverna"
              ],
              theory: {
                title: "A Teoria das Ideias",
                content: "Platão distingue dois mundos: o Mundo Sensível (aparências) e o Mundo Inteligível (ideias perfeitas).",
                sections: [
                  {
                    title: "A Alegoria da Caverna",
                    items: [
                      "Prisioneiros: Pessoas ignorantes",
                      "Sombras: Aparências, ilusões",
                      "Sol: Ideia do Bem, verdade",
                      "Libertação: Educação, filosofia"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Experiência com sombras na parede" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Apresentação da Teoria das Ideias" },
                  { title: "Aplicação", duration: "10 min", description: "Análise da Alegoria da Caverna" },
                  { title: "Fechamento", duration: "5 min", description: "Síntese da filosofia platônica" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Identificando Ideias",
                  description: "Para cada objeto sensível, identifique a Ideia correspondente (ex: este lápis imperfeito -> Ideia de Lápis)."
                }
              ],
              reflectionQuestions: [
                "Existem verdades absolutas ou tudo é relativo?",
                "Você já teve uma experiência de “sair da caverna”?",
                "Como distinguir entre aparência e realidade?"
              ]
            },
            {
              id: "c12",
              class_number: 12,
              title: "Aristóteles: o filósofo do equilíbrio",
              objectives: [
                "Conhecer a vida e obra de Aristóteles",
                "Compreender a crítica de Aristóteles a Platão",
                "Analisar o conceito de Hilemorfismo"
              ],
              theory: {
                title: "A Metafísica de Aristóteles",
                content: "Diferente de Platão, Aristóteles acreditava que a verdade não estava em outro mundo, mas sim na própria realidade material que nos cerca.",
                sections: [
                  {
                    title: "Crítica ao Mundo das Ideias",
                    items: [
                      "Aristóteles afirmava: 'Sou amigo de Platão, mas sou mais amigo da verdade'",
                      "Para ele, as ideias não existem separadas das coisas",
                      "Hilemorfismo: Tudo é composto de Matéria e Forma"
                    ]
                  },
                  {
                    title: "As Quatro Causas",
                    items: [
                      "Causa Material: Do que é feito?",
                      "Causa Formal: Qual a sua forma/essência?",
                      "Causa Eficiente: Quem o fez?",
                      "Causa Final: Para que serve?"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Observação de objetos comuns e suas causas" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre o Hilemorfismo" },
                  { title: "Aplicação", duration: "10 min", description: "Exercício das Quatro Causas" },
                  { title: "Fechamento", duration: "5 min", description: "Diferenças entre Platão e Aristóteles" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: As Quatro Causas",
                  description: "Escolha um objeto (ex: uma mesa) e identifique suas quatro causas segundo Aristóteles."
                }
              ],
              reflectionQuestions: [
                "Você concorda que a verdade está nas coisas ou em um mundo ideal?",
                "Qual a importância de saber a 'finalidade' (causa final) de algo?",
                "Como a visão de Aristóteles influenciou a ciência?"
              ]
            },
            {
              id: "c13",
              class_number: 13,
              title: "Ética a Nicômaco: a virtude como meio-termo",
              objectives: [
                "Compreender o conceito de Eudaimonia (felicidade)",
                "Analisar a teoria do meio-termo (justa medida)",
                "Identificar a importância do hábito na formação do caráter"
              ],
              theory: {
                title: "A Ética Aristotélica",
                content: "Para Aristóteles, o objetivo final do ser humano é a felicidade. A felicidade é alcançada através da prática da virtude.",
                sections: [
                  {
                    title: "O Meio-Termo (Justa Medida)",
                    items: [
                      "A virtude é o equilíbrio entre dois vícios: o excesso e a falta",
                      "Exemplo: Coragem é o meio-termo entre a covardia (falta) e a temeridade (excesso)",
                      "A prudência (phronesis) é a sabedoria prática para encontrar esse equilíbrio"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Discussão: 'O que é felicidade para você?'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Explicação sobre a teoria do meio-termo" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de dilemas éticos" },
                  { title: "Fechamento", duration: "5 min", description: "A importância do hábito" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Encontrando o Equilíbrio",
                  table: {
                    headers: ["Vício (Falta)", "Virtude (Meio-Termo)", "Vício (Excesso)"],
                    rows: [
                      ["Covardia", "Coragem", "Temeridade"],
                      ["Insensibilidade", "Temperança", "Libertinagem"],
                      ["Avareza", "Liberalidade", "Prodigalidade"],
                      ["Humildade excessiva", "Magnanimidade", "Vaidade"]
                    ]
                  }
                }
              ],
              reflectionQuestions: [
                "É possível ser feliz sem ser virtuoso?",
                "Como podemos treinar nosso caráter no dia a dia?",
                "Você consegue identificar momentos em que agiu pelo excesso ou pela falta?"
              ]
            },
            {
              id: "c14",
              class_number: 14,
              title: "Política em Aristóteles: o animal político",
              objectives: [
                "Compreender a definição de 'Zoon Politikon'",
                "Analisar as diferentes formas de governo",
                "Discutir a relação entre ética e política"
              ],
              theory: {
                title: "A Política como Extensão da Ética",
                content: "Aristóteles afirma que o homem é, por natureza, um animal político. Só na vida em sociedade ele pode realizar plenamente sua essência.",
                sections: [
                  {
                    title: "Formas de Governo",
                    items: [
                      "Monarquia (governo de um para o bem comum) vs Tirania (corrupção)",
                      "Aristocracia (governo dos melhores) vs Oligarquia (corrupção)",
                      "Politeia (governo de muitos) vs Democracia/Demagogia (corrupção na visão dele)"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Debate: 'Podemos viver sozinhos?'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre as formas de governo" },
                  { title: "Aplicação", duration: "10 min", description: "Análise da política local" },
                  { title: "Fechamento", duration: "5 min", description: "Conexão entre bem individual e bem comum" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: O Animal Político",
                  description: "Escreva um pequeno texto explicando por que Aristóteles considera a vida em sociedade essencial para a felicidade humana."
                }
              ],
              reflectionQuestions: [
                "Qual a diferença entre ser um 'habitante' e ser um 'cidadão'?",
                "O que torna um governo 'bom' ou 'ruim' segundo Aristóteles?",
                "Como a política pode ajudar a promover a virtude?"
              ]
            },
            {
              id: "c15",
              class_number: 15,
              title: "Síntese do 2º Bimestre: O Triângulo Grego",
              objectives: [
                "Comparar Sócrates, Platão e Aristóteles",
                "Sintetizar a evolução do pensamento ético e político",
                "Avaliar o legado da filosofia clássica"
              ],
              theory: {
                title: "Sócrates, Platão e Aristóteles",
                content: "Estes três filósofos formam a base do pensamento ocidental. Enquanto Sócrates focou no método e na moral, Platão buscou o ideal e Aristóteles o real.",
                sections: [
                  {
                    title: "Quadro Comparativo",
                    items: [
                      "Sócrates: Diálogo, Ironia, Maiêutica, Ética",
                      "Platão: Dualismo, Mundo das Ideias, República Ideal",
                      "Aristóteles: Hilemorfismo, Empirismo, Ética do Meio-Termo, Política Prática"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Quiz: 'Quem disse o quê?'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Mapa mental comparativo" },
                  { title: "Aplicação", duration: "10 min", description: "Redação síntese" },
                  { title: "Fechamento", duration: "5 min", description: "Encerramento do período clássico" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Mapa Mental",
                  description: "Crie um mapa mental conectando as principais ideias de Sócrates, Platão e Aristóteles."
                }
              ],
              reflectionQuestions: [
                "Com qual dos três filósofos você mais se identifica?",
                "Como as ideias deles ainda influenciam nossas leis e educação?",
                "O que mudou na forma de pensar da humanidade após esses três mestres?"
              ]
            }
          ]
        },
        {
          id: "s1b3",
          number: 3,
          title: "FILOSOFIA MEDIEVAL: FÉ E RAZÃO",
          classes: [
            {
              id: "c16",
              class_number: 16,
              title: "Santo Agostinho: a luz da fé",
              objectives: [
                "Conhecer a vida e obra de Santo Agostinho",
                "Compreender a relação entre fé e razão",
                "Analisar a teoria da iluminação divina"
              ],
              theory: {
                title: "Patrística e Agostinianismo",
                content: "Santo Agostinho tentou conciliar a fé cristã com a filosofia platônica. Para ele, a razão ajuda a entender o que a fé já aceitou.",
                sections: [
                  {
                    title: "Teoria da Iluminação",
                    items: [
                      "A verdade não vem de fora, mas de dentro (interioridade)",
                      "Deus ilumina a mente humana para que ela possa alcançar as verdades eternas",
                      "Creio para entender, entendo para crer"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Leitura de um trecho de 'Confissões'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre fé e razão" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de textos agostinianos" },
                  { title: "Fechamento", duration: "5 min", description: "Síntese da Patrística" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Fé vs Razão",
                  description: "Explique com suas palavras como Santo Agostinho via a relação entre a inteligência humana e a crença religiosa."
                }
              ],
              reflectionQuestions: [
                "É possível acreditar em algo que a razão não explica?",
                "O que significa buscar a verdade dentro de si mesmo?",
                "Como a filosofia de Agostinho influenciou o pensamento cristão?"
              ]
            },
            {
              id: "c17",
              class_number: 17,
              title: "São Tomás de Aquino: a harmonia entre fé e razão",
              objectives: [
                "Conhecer a Escolástica e São Tomás de Aquino",
                "Analisar as 'Cinco Vias' para a existência de Deus",
                "Compreender a influência de Aristóteles no pensamento tomista"
              ],
              theory: {
                title: "A Escolástica",
                content: "São Tomás de Aquino é o maior representante da Escolástica. He utilizou a filosofia de Aristóteles para sistematizar a teologia cristã.",
                sections: [
                  {
                    title: "As Cinco Vias",
                    items: [
                      "1. Primeiro Motor: Tudo o que se move é movido por outro",
                      "2. Causa Eficiente: Nada é causa de si mesmo",
                      "3. Contingência: Ser necessário vs Seres contingentes",
                      "4. Graus de Perfeição: Existe um padrão máximo de perfeição",
                      "5. Finalidade: O universo possui uma ordem inteligente"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Discussão: 'Podemos provar que Deus existe?'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Apresentação das cinco vias" },
                  { title: "Aplicação", duration: "10 min", description: "Análise lógica dos argumentos" },
                  { title: "Fechamento", duration: "5 min", description: "Legado de São Tomás" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Analisando as Vias",
                  description: "Escolha uma das cinco vias e tente explicá-la usando um exemplo do mundo moderno."
                }
              ],
              reflectionQuestions: [
                "Os argumentos de São Tomás ainda fazem sentido hoje?",
                "Qual a diferença entre a visão de Agostinho e a de Tomás de Aquino?",
                "Pode a ciência e a religião conviverem em harmonia?"
              ]
            },
            {
              id: "c19",
              class_number: 19,
              title: "Filosofia Árabe: a ponte para o ocidente",
              objectives: [
                "Conhecer a importância dos filósofos árabes (Avicena e Averróis)",
                "Compreender como eles preservaram a filosofia grega",
                "Analisar a influência da cultura islâmica na filosofia medieval"
              ],
              theory: {
                title: "O Legado de Bagdá",
                content: "Enquanto a Europa vivia a Idade Média, o mundo árabe florescia em conhecimento. Filósofos como Averróis foram essenciais para que Aristóteles voltasse a ser lido no ocidente.",
                sections: [
                  {
                    title: "Averróis e o Comentarista",
                    items: [
                      "Averróis ficou conhecido como 'O Comentarista' de Aristóteles",
                      "Defendia que a verdade é uma só, mas pode ser alcançada pela religião ou pela filosofia",
                      "Influenciou profundamente a universidade de Paris e São Tomás de Aquino"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Apresentação de um mapa das rotas de conhecimento" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre Avicena e Averróis" },
                  { title: "Aplicação", duration: "10 min", description: "Análise da 'Teoria da Dupla Verdade'" },
                  { title: "Fechamento", duration: "5 min", description: "Importância do diálogo intercultural" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: O Papel dos Árabes",
                  description: "Pesquise e escreva sobre uma contribuição científica ou filosófica do mundo árabe que utilizamos até hoje."
                }
              ],
              reflectionQuestions: [
                "Como o mundo seria diferente se o conhecimento grego tivesse se perdido?",
                "Por que é importante reconhecer a influência de outras culturas na nossa filosofia?",
                "A filosofia pode unir diferentes religiões?"
              ]
            },
            {
              id: "c20",
              class_number: 20,
              title: "Síntese da Filosofia Medieval",
              objectives: [
                "Sintetizar o debate entre fé e razão",
                "Revisar Agostinho e Tomás de Aquino",
                "Preparar para a transição para a modernidade"
              ],
              theory: {
                title: "Deus no Centro do Mundo",
                content: "A filosofia medieval foi marcada pelo teocentrismo. O desafio era usar a razão herdada dos gregos para explicar os mistérios da fé cristã.",
                sections: [
                  {
                    title: "Principais Temas",
                    items: [
                      "A questão dos universais",
                      "A prova da existência de Deus",
                      "O livre-arbítrio e a graça divina",
                      "A harmonia entre as escrituras e a lógica"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Quiz de revisão medieval" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Mapa conceitual do teocentrismo" },
                  { title: "Aplicação", duration: "10 min", description: "Debate: 'Fé vs Razão'" },
                  { title: "Fechamento", duration: "5 min", description: "O fim da Idade Média e o Renascimento" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Quadro Comparativo",
                  table: {
                    headers: ["Filósofo", "Base Filosófica", "Relação Fé/Razão"],
                    rows: [
                      ["Agostinho", "Platão", "A fé precede a razão"],
                      ["Tomás de Aquino", "Aristóteles", "Fé e razão são harmônicas"],
                      ["Averróis", "Aristóteles", "Duas vias para a mesma verdade"]
                    ]
                  }
                }
              ],
              reflectionQuestions: [
                "O que você aprendeu de mais importante sobre a Idade Média?",
                "Por que chamamos esse período de 'Idade das Trevas'? Esse nome é justo?",
                "Como a visão de mundo mudou do teocentrismo para o antropocentrismo?"
              ]
            }
          ]
        },
        {
          id: "s1b4",
          number: 4,
          title: "FILOSOFIA MODERNA: O RACIONALISMO",
          classes: [
            {
              id: "c18",
              class_number: 18,
              title: "René Descartes: o pai da modernidade",
              objectives: [
                "Compreender o método da dúvida metódica",
                "Analisar o 'Cogito, ergo sum'",
                "Identificar as características do racionalismo"
              ],
              theory: {
                title: "O Discurso do Método",
                content: "Descartes buscava um fundamento seguro para o conhecimento. Para isso, ele decidiu duvidar de tudo até encontrar algo que fosse impossível de duvidar.",
                sections: [
                  {
                    title: "A Dúvida Metódica",
                    items: [
                      "Dúvida dos sentidos: Eles nos enganam",
                      "Dúvida dos sonhos: Como saber se estamos acordados?",
                      "Gênio Maligno: E se houver um ser me enganando?",
                      "O Cogito: Se eu duvido, eu penso; se penso, eu existo"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Dinâmica: 'O que é real?' (referência ao filme Matrix)" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre a dúvida metódica" },
                  { title: "Aplicação", duration: "10 min", description: "Exercício do Cogito" },
                  { title: "Fechamento", duration: "5 min", description: "Importância do sujeito na modernidade" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Duvidando de Tudo",
                  description: "Tente duvidar de cinco coisas que você considera óbvias e veja se consegue encontrar uma certeza absoluta sobre elas."
                }
              ],
              reflectionQuestions: [
                "Por que Descartes é considerado o início da filosofia moderna?",
                "Você confia plenamente nos seus sentidos?",
                "O que significa 'Penso, logo existo' para você?"
              ]
            },
            {
              id: "c21",
              class_number: 21,
              title: "John Locke e o Empirismo",
              objectives: [
                "Compreender o conceito de 'Tábula Rasa'",
                "Analisar a origem das ideias segundo o empirismo",
                "Diferenciar racionalismo de empirismo"
              ],
              theory: {
                title: "Ensaio sobre o Entendimento Humano",
                content: "Ao contrário de Descartes, Locke acreditava que não nascemos com ideias inatas. Nossa mente é como uma folha em branco que vai sendo preenchida pela experiência.",
                sections: [
                  {
                    title: "A Tábula Rasa",
                    items: [
                      "Nada está no intelecto que não tenha passado antes pelos sentidos",
                      "Experiência Sensível: Fonte de todo conhecimento",
                      "Ideias Simples vs Ideias Compostas"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Experiência sensorial na sala" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre Locke e o empirismo" },
                  { title: "Aplicação", duration: "10 min", description: "Comparação Locke vs Descartes" },
                  { title: "Fechamento", duration: "5 min", description: "O papel da educação no empirismo" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: A Mente como Tábula Rasa",
                  description: "Dê exemplos de conhecimentos que você adquiriu exclusivamente através da experiência dos sentidos."
                }
              ],
              reflectionQuestions: [
                "Você acredita que nascemos com algum conhecimento ou somos totalmente moldados pela experiência?",
                "Qual a importância dos sentidos para a ciência?",
                "Como o empirismo mudou a forma como vemos a educação?"
              ]
            },
            {
              id: "c22",
              class_number: 22,
              title: "David Hume: o ceticismo empirista",
              objectives: [
                "Compreender a crítica à causalidade",
                "Analisar a diferença entre impressões e ideias",
                "Discutir o papel do hábito no conhecimento"
              ],
              theory: {
                title: "Investigação sobre o Entendimento Humano",
                content: "Hume levou o empirismo ao extremo, questionando até mesmo a nossa certeza sobre as leis da natureza. Para ele, acreditamos na causa e efeito apenas por hábito.",
                sections: [
                  {
                    title: "Impressões e Ideias",
                    items: [
                      "Impressões: Percepções vivas e fortes (sentir)",
                      "Ideias: Cópias pálidas das impressões (lembrar)",
                      "Crítica à Causalidade: Não vemos a 'causa', apenas a sucessão de eventos"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Exemplo das bolas de bilhar" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre o ceticismo de Hume" },
                  { title: "Aplicação", duration: "10 min", description: "Análise do conceito de hábito" },
                  { title: "Fechamento", duration: "5 min", description: "Limites do conhecimento humano" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Impressão vs Ideia",
                  description: "Descreva a diferença entre a 'impressão' de queimar o dedo e a 'ideia' de queimar o dedo."
                }
              ],
              reflectionQuestions: [
                "Podemos ter certeza de que o sol nascerá amanhã?",
                "Por que confiamos tanto na ciência se ela se baseia no hábito?",
                "O que acontece com nossa mente quando não temos impressões sobre algo?"
              ]
            },
            {
              id: "c23",
              class_number: 23,
              title: "Immanuel Kant: a revolução copernicana na filosofia",
              objectives: [
                "Compreender a síntese entre racionalismo e empirismo",
                "Analisar o concept de 'Crítica da Razão Pura'",
                "Identificar o papel do sujeito no conhecimento"
              ],
              theory: {
                title: "O Criticismo Kantiano",
                content: "Kant resolveu o conflito entre Descartes e Hume. Para ele, o conhecimento começa com a experiência, mas é organizado pela nossa mente através de categorias inatas.",
                sections: [
                  {
                    title: "A Revolução Copernicana",
                    items: [
                      "O sujeito não apenas reflete o objeto, ele o constrói",
                      "Espaço e Tempo: Formas a priori da sensibilidade",
                      "Fenômeno (o que percebemos) vs Númeno (a coisa em si)"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Analogia dos 'óculos coloridos'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre o criticismo" },
                  { title: "Aplicação", duration: "10 min", description: "Análise do papel do sujeito" },
                  { title: "Fechamento", duration: "5 min", description: "A síntese kantiana" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Fenômeno e Númeno",
                  description: "Explique com suas palavras por que nunca podemos conhecer a 'coisa em si' segundo Kant."
                }
              ],
              reflectionQuestions: [
                "Nós vemos o mundo como ele é ou como nós somos?",
                "Qual a importância de Kant para a ciência moderna?",
                "Como a mente organiza as informações que recebe dos sentidos?"
              ]
            },
            {
              id: "c24",
              class_number: 24,
              title: "Síntese da Filosofia Moderna",
              objectives: [
                "Sintetizar a evolução do pensamento moderno",
                "Revisar Racionalismo, Empirismo e Criticismo",
                "Avaliar o impacto da modernidade na atualidade"
              ],
              theory: {
                title: "A Razão no Comando",
                content: "A modernidade tirou Deus do centro e colocou a Razão Humana. Foi o período em que a ciência se consolidou e o indivíduo se tornou o centro do conhecimento.",
                sections: [
                  {
                    title: "Quadro Comparativo Moderno",
                    items: [
                      "Descartes: Razão pura, ideias inatas",
                      "Locke/Hume: Experiência, sentidos, hábito",
                      "Kant: Síntese, categorias mentais, limites da razão"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Debate: 'O que é ser moderno?'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Mapa mental da modernidade" },
                  { title: "Aplicação", duration: "10 min", description: "Redação de encerramento" },
                  { title: "Fechamento", duration: "5 min", description: "Transição para a contemporaneidade" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Linha do Tempo Moderna",
                  description: "Crie uma linha do tempo destacando os principais filósofos modernos e suas obras."
                }
              ],
              reflectionQuestions: [
                "Qual filósofo moderno você achou mais convincente?",
                "Como a modernidade moldou a tecnologia que usamos hoje?",
                "Ainda somos 'modernos' ou já passamos dessa fase?"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "s2",
      number: 2,
      title: "2ª SÉRIE – FILOSOFIA, POLÍTICA E ÉTICA",
      bimestres: [
        {
          id: "s2b1",
          number: 1,
          title: "LIBERALISMO E CONTRATO SOCIAL",
          classes: [
            {
              id: "c31",
              class_number: 31,
              title: "Maquiavel: realismo político",
              objectives: [
                "Conhecer a vida e o contexto de Maquiavel",
                "Compreender a separação entre política e moral",
                "Analisar os conceitos de Virtù e Fortuna"
              ],
              theory: {
                title: "O Príncipe e a Arte de Governar",
                content: "Nicolau Maquiavel é considerado o fundador da ciência política moderna. Em sua obra 'O Príncipe', ele descreve a política como ela é, e não como deveria ser.",
                sections: [
                  {
                    title: "Realismo Político",
                    items: [
                      "Autonomia da política: A política tem suas próprias regras, independentes da moral cristã",
                      "O fim justifica os meios? (Interpretação comum, embora ele nunca tenha escrito exatamente assim)",
                      "Manutenção do poder: O principal objetivo do governante é manter a estabilidade do Estado"
                    ]
                  },
                  {
                    title: "Virtù e Fortuna",
                    items: [
                      "Virtù: Capacidade, habilidade e astúcia do governante para agir no momento certo",
                      "Fortuna: Circunstâncias externas, sorte ou acaso que fogem ao controle humano",
                      "O bom governante deve saber dominar a Fortuna através de sua Virtù"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Discussão: 'Um governante deve ser amado ou temido?'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre o realismo político" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de dilemas políticos contemporâneos" },
                  { title: "Fechamento", duration: "5 min", description: "O legado de Maquiavel" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Amado ou Temido?",
                  description: "Leia o capítulo XVII de 'O Príncipe' e explique por que Maquiavel conclui que é melhor ser temido do que amado, desde que não seja odiado."
                }
              ],
              reflectionQuestions: [
                "A ética pessoal deve ser a mesma da ética política?",
                "Você consegue identificar exemplos de 'Virtù' em líderes atuais?",
                "O que Maquiavel diria sobre a política brasileira hoje?"
              ]
            },
            {
              id: "c32",
              class_number: 32,
              title: "Thomas Hobbes: o homem é o lobo do homem",
              objectives: [
                "Compreender o conceito de Estado de Natureza em Hobbes",
                "Analisar a necessidade do Contrato Social",
                "Identificar as características do poder soberano (Leviatã)"
              ],
              theory: {
                title: "O Leviatã",
                content: "Hobbes viveu em um período de guerras civis na Inglaterra. Sua filosofia busca justificar um poder central forte para garantir a paz e a segurança.",
                sections: [
                  {
                    title: "Estado de Natureza",
                    items: [
                      "Guerra de todos contra todos",
                      "O homem é movido pelo desejo de poder e pelo medo da morte violenta",
                      "A vida no estado de natureza é 'solitária, pobre, sórdida, embrutecida e curta'"
                    ]
                  },
                  {
                    title: "O Contrato Social",
                    items: [
                      "Renúncia da liberdade em troca de segurança",
                      "Criação do Estado (Leviatã): Um poder soberano absoluto e indivisível",
                      "O soberano deve garantir a paz interna e a defesa contra inimigos externos"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Dinâmica: 'O que aconteceria se não houvesse leis por um dia?'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre o pensamento hobbesiano" },
                  { title: "Aplicação", duration: "10 min", description: "Análise da capa do livro 'Leviatã'" },
                  { title: "Fechamento", duration: "5 min", description: "Segurança vs Liberdade" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: O Pacto de União",
                  description: "Explique por que, para Hobbes, é racional que os homens abram mão de sua liberdade total para viver sob um governo absoluto."
                }
              ],
              reflectionQuestions: [
                "Você concorda que o ser humano é naturalmente egoísta?",
                "Até que ponto devemos ceder nossa liberdade em nome da segurança?",
                "O Estado ainda exerce o papel de 'Leviatã' hoje?"
              ]
            },
            {
              id: "c33",
              class_number: 33,
              title: "John Locke: o pai do liberalismo",
              objectives: [
                "Diferenciar o estado de natureza de Locke do de Hobbes",
                "Compreender a teoria dos direitos naturais",
                "Analisar o direito de resistência"
              ],
              theory: {
                title: "Dois Tratados sobre o Governo Civil",
                content: "Locke é o principal teórico do liberalismo político. Para ele, o Estado existe para proteger direitos que o homem já possui por natureza.",
                sections: [
                  {
                    title: "Direitos Naturais",
                    items: [
                      "Vida, Liberdade e Propriedade",
                      "O homem nasce com esses direitos e eles são inalienáveis",
                      "O estado de natureza não é necessariamente uma guerra, mas faltam juízes imparciais"
                    ]
                  },
                  {
                    title: "O Governo Limitado",
                    items: [
                      "O poder do Estado vem do consentimento dos governados",
                      "Divisão de poderes (precursor de Montesquieu)",
                      "Direito de Resistência: Se o governo viola os direitos naturais, o povo tem o direito de derrubá-lo"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Discussão: 'O que é propriedade privada?'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre o liberalismo de Locke" },
                  { title: "Aplicação", duration: "10 min", description: "Análise da Declaração de Independência dos EUA" },
                  { title: "Fechamento", duration: "5 min", description: "Locke vs Hobbes" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Direitos Inalienáveis",
                  description: "Liste os três direitos naturais de Locke e explique por que a propriedade é tão importante em seu pensamento."
                }
              ],
              reflectionQuestions: [
                "A propriedade privada é um direito natural ou uma construção social?",
                "Quando um povo tem o direito de se rebelar contra seu governo?",
                "Como as ideias de Locke influenciam as democracias modernas?"
              ]
            },
            {
              id: "c34",
              class_number: 34,
              title: "Rousseau: o bom selvagem e a vontade geral",
              objectives: [
                "Compreender a crítica de Rousseau à civilização",
                "Analisar o conceito de Vontade Geral",
                "Diferenciar democracia direta de representativa"
              ],
              theory: {
                title: "O Contrato Social",
                content: "Rousseau acredita que o homem nasce bom, mas a sociedade o corrompe. Seu contrato social busca resgatar a liberdade através da participação direta.",
                sections: [
                  {
                    title: "O Bom Selvagem",
                    items: [
                      "No estado de natureza, o homem vive em harmonia e isolamento",
                      "A origem da desigualdade: A invenção da propriedade privada ('Isto é meu')",
                      "A civilização trouxe o progresso técnico, mas a decadência moral"
                    ]
                  },
                  {
                    title: "A Vontade Geral",
                    items: [
                      "Não é a simples soma das vontades individuais, mas o interesse comum",
                      "Soberania Popular: O povo é o único detentor do poder",
                      "Liberdade Civil: Obedecer à lei que nós mesmos prescrevemos"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Debate: 'A tecnologia nos tornou pessoas melhores?'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre o pensamento de Rousseau" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de assembleias e participação direta" },
                  { title: "Fechamento", duration: "5 min", description: "O legado democrático de Rousseau" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: A Origem da Desigualdade",
                  description: "Comente a famosa frase de Rousseau: 'O primeiro que, tendo cercado um terreno, atreveu-se a dizer: Isto é meu, e encontrou pessoas simples o suficiente para acreditar nele, foi o verdadeiro fundador da sociedade civil'."
                }
              ],
              reflectionQuestions: [
                "A sociedade nos torna piores ou melhores?",
                "É possível existir uma democracia direta em países grandes?",
                "O que é o 'bem comum' na sua cidade hoje?"
              ]
            },
            {
              id: "c35",
              class_number: 35,
              title: "Síntese: Os Contratualistas",
              objectives: [
                "Comparar Hobbes, Locke e Rousseau",
                "Sintetizar as diferentes visões sobre o Estado",
                "Avaliar o impacto do contratualismo na política atual"
              ],
              theory: {
                title: "O Nascimento do Estado Moderno",
                content: "Embora divirjam sobre o estado de natureza, os três concordam que o Estado é uma construção humana (artificial) baseada em um pacto.",
                sections: [
                  {
                    title: "Quadro Comparativo",
                    items: [
                      "Hobbes: Homem mau, Estado absoluto, foco na Segurança",
                      "Locke: Homem neutro, Estado limitado, foco na Propriedade/Liberdade",
                      "Rousseau: Homem bom, Estado democrático, foco na Igualdade/Vontade Geral"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Quiz: 'Qual contratualista disse isso?'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Construção de um mapa mental comparativo" },
                  { title: "Aplicação", duration: "10 min", description: "Redação: 'Qual contrato social você assinaria?'" },
                  { title: "Fechamento", duration: "5 min", description: "Transição para o estudo da Ética" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Tabela Comparativa",
                  table: {
                    headers: ["Filósofo", "Estado de Natureza", "Motivo do Pacto", "Tipo de Governo"],
                    rows: [
                      ["Hobbes", "Guerra constante", "Medo e Segurança", "Monarquia Absoluta"],
                      ["Locke", "Relativa paz", "Proteção da Propriedade", "Monarquia Parlamentar"],
                      ["Rousseau", "Harmonia (Bom Selvagem)", "Recuperar a Liberdade", "Democracia Direta"]
                    ]
                  }
                }
              ],
              reflectionQuestions: [
                "Qual das três visões sobre a natureza humana você acha mais realista?",
                "Como o Brasil equilibra segurança, liberdade e igualdade?",
                "O contrato social ainda está sendo cumprido hoje?"
              ]
            }
          ]
        },
        {
          id: "s2b2",
          number: 2,
          title: "ÉTICA E MORAL",
          classes: [
            {
              id: "c36",
              class_number: 36,
              title: "Ética vs Moral: conceitos fundamentais",
              objectives: [
                "Diferenciar Ética de Moral",
                "Compreender a origem etimológica dos termos",
                "Analisar o caráter social da moral"
              ],
              theory: {
                title: "A Vida em Sociedade",
                content: "Embora usados como sinônimos, Ética e Moral possuem significados distintos na filosofia. A moral é o conjunto de regras, enquanto a ética é a reflexão sobre essas regras.",
                sections: [
                  {
                    title: "Definições",
                    items: [
                      "Moral (Mos/Moris): Costumes, normas de conduta de um grupo específico em um tempo específico",
                      "Ética (Ethos): Modo de ser, caráter. É a filosofia moral, a busca por princípios universais",
                      "A moral é prática e temporal; a ética é teórica e busca a universalidade"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Dilema: 'O que você faria se ninguém estivesse olhando?'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre ética e moral" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de situações cotidianas" },
                  { title: "Fechamento", duration: "5 min", description: "Síntese dos conceitos" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Ética ou Moral?",
                  description: "Classifique as seguintes situações como problemas éticos ou morais: 1. Devolver um troco errado. 2. Discutir a legalização do aborto. 3. Seguir as tradições de uma religião."
                }
              ],
              reflectionQuestions: [
                "Pode algo ser moral mas não ser ético?",
                "A moral muda com o tempo? Dê exemplos.",
                "Qual a importância da ética para a convivência humana?"
              ]
            },
            {
              id: "c37",
              class_number: 37,
              title: "Aristóteles: a ética das virtudes",
              objectives: [
                "Revisar o conceito de Eudaimonia",
                "Aprofundar na teoria do meio-termo",
                "Compreender a ética como busca da felicidade"
              ],
              theory: {
                title: "Ética a Nicômaco",
                content: "Para Aristóteles, a ética é uma ciência prática. O objetivo da vida humana é a felicidade (Eudaimonia), que só é alcançada através da virtude.",
                sections: [
                  {
                    title: "A Virtude Intelectual e Moral",
                    items: [
                      "Virtude Intelectual: Adquirida pelo ensino e estudo",
                      "Virtude Moral: Adquirida pelo hábito e prática constante",
                      "A virtude é uma disposição de caráter para escolher o meio-termo"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Discussão: 'O que nos torna pessoas boas?'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre a ética aristotélica" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de exemplos de virtudes" },
                  { title: "Fechamento", duration: "5 min", description: "A felicidade como fim último" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Praticando a Virtude",
                  description: "Escolha uma virtude (ex: paciência) e descreva como ela pode ser exercitada no ambiente escolar seguindo o princípio do meio-termo."
                }
              ],
              reflectionQuestions: [
                "Ser feliz é o mesmo que ter prazer?",
                "Podemos aprender a ser virtuosos ou já nascemos assim?",
                "Como a ética de Aristóteles se aplica às redes sociais?"
              ]
            },
            {
              id: "c38",
              class_number: 38,
              title: "Kant: a ética do dever",
              objectives: [
                "Compreender o Imperativo Categórico",
                "Diferenciar agir 'por dever' de agir 'conforme o dever'",
                "Analisar a autonomia da vontade"
              ],
              theory: {
                title: "Crítica da Razão Prática",
                content: "Kant propõe uma ética baseada na razão e no dever, independente de desejos ou consequências. Para ele, uma ação só é moral se puder se tornar uma lei universal.",
                sections: [
                  {
                    title: "O Imperativo Categórico",
                    items: [
                      "“Age apenas segundo uma máxima tal que possas querer ao mesmo tempo que se torne lei universal”",
                      "Tratar a humanidade sempre como um fim, nunca apenas como um meio",
                      "A moralidade não depende do resultado, mas da intenção e do respeito à lei moral"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Dilema: 'É permitido mentir para salvar uma vida?'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre o formalismo kantiano" },
                  { title: "Aplicação", duration: "10 min", description: "Teste do Imperativo Categórico" },
                  { title: "Fechamento", duration: "5 min", description: "Autonomia vs Heteronomia" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Universalizando a Ação",
                  description: "Aplique o imperativo categórico à seguinte ação: 'Colar na prova quando o professor não vê'. O que aconteceria se isso se tornasse uma lei universal?"
                }
              ],
              reflectionQuestions: [
                "Você concorda que existem regras que nunca devem ser quebradas?",
                "O que significa tratar alguém como um 'fim em si mesmo'?",
                "A ética de Kant é muito rígida para o mundo real?"
              ]
            },
            {
              id: "c39",
              class_number: 39,
              title: "Utilitarismo: a ética das consequências",
              objectives: [
                "Conhecer o pensamento de Bentham e Stuart Mill",
                "Compreender o princípio da utilidade",
                "Analisar o cálculo hedonista"
              ],
              theory: {
                title: "A Maior Felicidade para o Maior Número",
                content: "O utilitarismo é uma ética pragmática. Uma ação é considerada boa se ela promove o máximo de bem-estar para o maior número de pessoas envolvidas.",
                sections: [
                  {
                    title: "Princípios Utilitaristas",
                    items: [
                      "Consequencialismo: O valor moral está no resultado da ação",
                      "Jeremy Bentham: Foco na quantidade de prazer e dor (Cálculo Hedonista)",
                      "John Stuart Mill: Foco na qualidade dos prazeres (prazeres intelectuais são superiores)"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "O Dilema do Trem (Trolley Problem)" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre o utilitarismo" },
                  { title: "Aplicação", duration: "10 min", description: "Debate sobre políticas públicas utilitaristas" },
                  { title: "Fechamento", duration: "5 min", description: "Críticas ao utilitarismo" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Decisão Utilitarista",
                  description: "Imagine que você tem uma verba limitada para a saúde. Como um utilitarista decidiria entre investir em uma cirurgia cara para uma pessoa ou em vacinas para mil pessoas?"
                }
              ],
              reflectionQuestions: [
                "É justo sacrificar a minoria pelo bem da maioria?",
                "Como medir a felicidade de forma objetiva?",
                "O utilitarismo justifica ações que consideramos erradas (ex: mentir) se o resultado for bom?"
              ]
            },
            {
              id: "c40",
              class_number: 40,
              title: "Síntese: Correntes Éticas",
              objectives: [
                "Comparar Aristóteles, Kant e o Utilitarismo",
                "Sintetizar as diferentes abordagens morais",
                "Aplicar as teorias a problemas contemporâneos"
              ],
              theory: {
                title: "Como devemos viver?",
                content: "As três grandes correntes éticas oferecem caminhos diferentes para responder à pergunta fundamental da vida moral.",
                sections: [
                  {
                    title: "Resumo Comparativo",
                    items: [
                      "Aristóteles: Foco no Caráter e na Virtude (Ser bom)",
                      "Kant: Foco no Dever e na Intenção (Fazer o certo)",
                      "Utilitarismo: Foco no Resultado e no Bem-estar (Gerar felicidade)"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Quiz de revisão ética" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Mapa mental das teorias éticas" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de um caso real sob as três óticas" },
                  { title: "Fechamento", duration: "5 min", description: "A ética como escolha constante" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Quadro de Teorias",
                  table: {
                    headers: ["Teoria", "Foco Principal", "Pergunta Chave"],
                    rows: [
                      ["Virtudes", "Caráter do agente", "O que uma pessoa virtuosa faria?"],
                      ["Dever", "Regra universal", "Esta ação pode virar lei para todos?"],
                      ["Utilitarismo", "Consequências", "Qual ação gera mais felicidade total?"]
                    ]
                  }
                }
              ],
              reflectionQuestions: [
                "Qual dessas éticas você mais utiliza no seu dia a dia?",
                "É possível conciliar o dever de Kant com a felicidade de Aristóteles?",
                "Qual teoria é mais útil para resolver problemas ambientais?"
              ]
            }
          ]
        },
        {
          id: "s2b3",
          number: 3,
          title: "POLÍTICA E PODER",
          classes: [
            {
              id: "c41",
              class_number: 41,
              title: "O que é Política?",
              objectives: [
                "Compreender a política além dos partidos",
                "Analisar a relação entre poder e autoridade",
                "Identificar a política como busca do bem comum"
              ],
              theory: {
                title: "A Arte da Convivência",
                content: "A política nasce da necessidade de organizar a vida em comum. Ela envolve a gestão de conflitos, a distribuição de recursos e o exercício do poder.",
                sections: [
                  {
                    title: "Poder e Autoridade",
                    items: [
                      "Poder: Capacidade de influenciar ou determinar o comportamento alheio",
                      "Autoridade: Poder legitimado, aceito por quem obedece",
                      "Microfísica do Poder: O poder está presente em todas as relações sociais (família, escola, trabalho)"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Tempestade de ideias: 'O que vem à mente quando falamos em política?'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre os conceitos de poder" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de relações de poder na escola" },
                  { title: "Fechamento", duration: "5 min", description: "Política como participação" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Política no Dia a Dia",
                  description: "Descreva uma situação do seu cotidiano (fora do governo) que envolva uma decisão política ou uma relação de poder."
                }
              ],
              reflectionQuestions: [
                "É possível ser apolítico?",
                "Qual a diferença entre poder e força?",
                "Por que a política tem uma imagem tão negativa hoje em dia?"
              ]
            },
            {
              id: "c42",
              class_number: 42,
              title: "Formas de Governo e Regimes Políticos",
              objectives: [
                "Diferenciar Monarquia, República e Aristocracia",
                "Analisar regimes democráticos e autoritários",
                "Compreender o sistema de freios e contrapesos"
              ],
              theory: {
                title: "Como o Estado se Organiza",
                content: "Existem diversas formas de organizar o poder político. A escolha dessas formas impacta diretamente a liberdade e os direitos dos cidadãos.",
                sections: [
                  {
                    title: "Classificações Clássicas",
                    items: [
                      "Monarquia: Governo de um (Vitalício e hereditário)",
                      "República: Governo do povo/coisa pública (Eletivo e temporário)",
                      "Democracia: Soberania popular e respeito às minorias",
                      "Totalitarismo: Controle absoluto do Estado sobre a vida privada"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Comparação entre diferentes países atuais" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre formas e regimes" },
                  { title: "Aplicação", duration: "10 min", description: "Análise da estrutura do Estado brasileiro" },
                  { title: "Fechamento", duration: "5 min", description: "A importância das instituições" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Pesquisa de Regimes",
                  description: "Escolha dois países com regimes políticos diferentes e compare como os cidadãos participam das decisões em cada um."
                }
              ],
              reflectionQuestions: [
                "Qual a melhor forma de governo na sua opinião? Por quê?",
                "O que garante que um governante não abuse do seu poder?",
                "A monarquia ainda faz sentido no século XXI?"
              ]
            },
            {
              id: "c43",
              class_number: 43,
              title: "Democracia: história e desafios",
              objectives: [
                "Conhecer a origem da democracia em Atenas",
                "Analisar a democracia liberal moderna",
                "Discutir as ameaças à democracia contemporânea"
              ],
              theory: {
                title: "O Governo do Povo",
                content: "A democracia não é um estado estático, mas um processo contínuo de conquista de direitos e participação.",
                sections: [
                  {
                    title: "Evolução da Democracia",
                    items: [
                      "Atenas: Democracia direta, mas excludente (mulheres, escravos e estrangeiros fora)",
                      "Moderna: Representativa, sufrágio universal, Estado de Direito",
                      "Desafios: Fake news, polarização, desinteresse político e desigualdade social"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Vídeo curto sobre a história da democracia" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre democracia antiga vs moderna" },
                  { title: "Aplicação", duration: "10 min", description: "Debate sobre o voto obrigatório" },
                  { title: "Fechamento", duration: "5 min", description: "Democracia como valor universal" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Pilares da Democracia",
                  description: "Identifique três elementos essenciais para que um país seja considerado verdadeiramente democrático."
                }
              ],
              reflectionQuestions: [
                "Votar é o único jeito de participar da democracia?",
                "Como a internet ajuda ou atrapalha a democracia?",
                "A democracia é o 'menos pior' dos regimes políticos?"
              ]
            },
            {
              id: "c44",
              class_number: 44,
              title: "Direitos Humanos e Cidadania",
              objectives: [
                "Conhecer a história dos Direitos Humanos",
                "Analisar as três gerações de direitos",
                "Compreender o conceito de cidadania plena"
              ],
              theory: {
                title: "A Dignidade da Pessoa Humana",
                content: "Os direitos humanos são conquistas históricas que visam proteger a dignidade de todos, independente de qualquer característica individual.",
                sections: [
                  {
                    title: "Gerações de Direitos",
                    items: [
                      "1ª Geração: Direitos Civis e Políticos (Liberdade)",
                      "2ª Geração: Direitos Sociais, Econômicos e Culturais (Igualdade)",
                      "3ª Geração: Direitos Difusos e Coletivos (Fraternidade/Meio Ambiente)"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Leitura de trechos da Declaração Universal de 1948" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre a evolução dos direitos" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de casos de violação de direitos" },
                  { title: "Fechamento", duration: "5 min", description: "Cidadania ativa" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Direitos na Prática",
                  description: "Escolha um artigo da Declaração Universal dos Direitos Humanos e explique por que ele é fundamental para a vida em sociedade."
                }
              ],
              reflectionQuestions: [
                "Os direitos humanos são para todos ou 'para humanos direitos'?",
                "Qual o direito mais desrespeitado no Brasil hoje?",
                "Como você exerce sua cidadania no dia a dia?"
              ]
            },
            {
              id: "c45",
              class_number: 45,
              title: "Síntese: O Pensamento Político",
              objectives: [
                "Revisar os principais conceitos de política e poder",
                "Sintetizar a relação entre ética e política",
                "Preparar para a análise da sociedade contemporânea"
              ],
              theory: {
                title: "Política: Conflito e Consenso",
                content: "A política é o espaço onde decidimos como queremos viver juntos. Ela exige diálogo, negociação e o reconhecimento do outro como sujeito de direitos.",
                sections: [
                  {
                    title: "Mapa Mental da Política",
                    items: [
                      "Poder: Quem manda e por que obedecemos",
                      "Estado: A instituição que organiza a sociedade",
                      "Cidadania: O conjunto de direitos e deveres",
                      "Ética Política: A busca pela justiça e pelo bem comum"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Jogo de perguntas e respostas sobre política" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Construção de um painel da cidadania" },
                  { title: "Aplicação", duration: "10 min", description: "Redação: 'O futuro da política'" },
                  { title: "Fechamento", duration: "5 min", description: "Encerramento do bimestre" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Projeto de Lei",
                  description: "Crie uma proposta de lei para melhorar sua escola ou bairro, justificando-a com base nos conceitos de bem comum e cidadania."
                }
              ],
              reflectionQuestions: [
                "O que você mudaria na política brasileira se tivesse poder para isso?",
                "A política pode realmente mudar o mundo?",
                "Como a filosofia ajuda a sermos melhores cidadãos?"
              ]
            }
          ]
        },
        {
          id: "s2b4",
          number: 4,
          title: "FILOSOFIA E SOCIEDADE",
          classes: [
            {
              id: "c46",
              class_number: 46,
              title: "Indústria Cultural e Escola de Frankfurt",
              objectives: [
                "Compreender o conceito de Indústria Cultural",
                "Analisar a crítica de Adorno e Horkheimer",
                "Identificar a padronização do consumo cultural"
              ],
              theory: {
                title: "A Cultura como Mercadoria",
                content: "A Escola de Frankfurt analisou como a cultura de massa transforma a arte em produto de consumo, visando o lucro e a manutenção do status quo.",
                sections: [
                  {
                    title: "Conceitos Chave",
                    items: [
                      "Indústria Cultural: Produção em série de bens culturais",
                      "Semiformação: Conhecimento superficial e fragmentado",
                      "Massificação: Perda da individualidade e do pensamento crítico"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Análise de hits musicais e blockbusters" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre a Escola de Frankfurt" },
                  { title: "Aplicação", duration: "10 min", description: "Debate sobre algoritmos e redes sociais" },
                  { title: "Fechamento", duration: "5 min", description: "Arte vs Entretenimento" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Analisando a Mídia",
                  description: "Escolha um programa de TV ou perfil de rede social e identifique elementos de 'padronização' e 'consumismo' nele."
                }
              ],
              reflectionQuestions: [
                "Nós escolhemos o que gostamos ou somos induzidos a gostar?",
                "A arte perde seu valor quando vira mercadoria?",
                "Como manter o pensamento crítico em um mundo de algoritmos?"
              ]
            },
            {
              id: "c47",
              class_number: 47,
              title: "Michel Foucault: microfísica do poder",
              objectives: [
                "Compreender o conceito de Sociedade Disciplinar",
                "Analisar o Panoptismo",
                "Identificar as instituições de sequestro"
              ],
              theory: {
                title: "Vigiar e Punir",
                content: "Foucault mostra que o poder não está apenas no Estado, mas espalhado por toda a sociedade através de mecanismos de vigilância e controle dos corpos.",
                sections: [
                  {
                    title: "O Poder Disciplinar",
                    items: [
                      "Panóptico: Modelo de vigilância onde todos podem ser vistos sem saber se estão sendo vigiados",
                      "Docilização dos corpos: Treinamento para a obediência e produtividade",
                      "Instituições: Escola, Quartel, Fábrica, Hospital, Prisão"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Discussão sobre câmeras de segurança e monitoramento digital" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre Foucault" },
                  { title: "Aplicação", duration: "10 min", description: "Análise da estrutura física da escola" },
                  { title: "Fechamento", duration: "5 min", description: "Poder-Saber" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: A Escola como Panóptico",
                  description: "Identifique na sua escola mecanismos de vigilância e horários que visam a 'disciplina' dos alunos."
                }
              ],
              reflectionQuestions: [
                "Nós somos vigiados o tempo todo na internet?",
                "A disciplina é necessária ou é uma forma de opressão?",
                "Como o poder molda quem nós somos?"
              ]
            },
            {
              id: "c48",
              class_number: 48,
              title: "Hannah Arendt: a condição humana",
              objectives: [
                "Compreender a distinção entre Labor, Trabalho e Ação",
                "Analisar o conceito de Banalidade do Mal",
                "Discutir a importância do espaço público"
              ],
              theory: {
                title: "A Vida Ativa",
                content: "Arendt reflete sobre o que significa ser humano em um mundo marcado por regimes totalitários. Para ela, a política é o espaço da liberdade e da pluralidade.",
                sections: [
                  {
                    title: "A Banalidade do Mal",
                    items: [
                      "O mal não é apenas praticado por monstros, mas por pessoas comuns que param de pensar criticamente",
                      "A obediência cega e a burocracia podem levar a atrocidades",
                      "Pensar é um ato político e de resistência"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Caso Eichmann em Jerusalém" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre Hannah Arendt" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de situações de 'obediência cega'" },
                  { title: "Fechamento", duration: "5 min", description: "O valor da pluralidade" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Pensar e Agir",
                  description: "Explique por que Hannah Arendt considera que o 'pensamento' é a melhor defesa contra o totalitarismo."
                }
              ],
              reflectionQuestions: [
                "Você já fez algo errado só porque 'todo mundo estava fazendo' ou 'era a regra'?",
                "O que torna uma pessoa um 'cidadão' no sentido pleno para Arendt?",
                "Como podemos evitar a banalização do mal hoje?"
              ]
            },
            {
              id: "c49",
              class_number: 49,
              title: "Filosofia Brasileira e Latino-Americana",
              objectives: [
                "Conhecer pensadores brasileiros importantes",
                "Compreender a Filosofia da Libertação",
                "Analisar a identidade cultural latino-americana"
              ],
              theory: {
                title: "Pensar a partir da nossa realidade",
                content: "A filosofia no Brasil e na América Latina busca entender nossos problemas específicos: colonização, desigualdade, diversidade e resistência.",
                sections: [
                  {
                    title: "Temas e Autores",
                    items: [
                      "Filosofia da Libertação (Enrique Dussel): Pensar a partir do oprimido",
                      "Pensamento Brasileiro: Paulo Freire (Educação como prática da liberdade)",
                      "A questão da decolonialidade: Superar a visão eurocêntrica do mundo"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Música ou poema brasileiro com teor filosófico" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre autores nacionais" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de textos de Paulo Freire" },
                  { title: "Fechamento", duration: "5 min", description: "Filosofia com sotaque" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Filosofia e Realidade",
                  description: "Pesquise sobre um filósofo ou pensador brasileiro e apresente uma ideia dele que ajude a entender o Brasil de hoje."
                }
              ],
              reflectionQuestions: [
                "Existe uma filosofia tipicamente brasileira?",
                "Por que estudamos mais autores europeus do que latino-americanos?",
                "Como a educação pode nos libertar?"
              ]
            },
            {
              id: "c50",
              class_number: 50,
              title: "Revisão Geral: O Percurso da 2ª Série",
              objectives: [
                "Sintetizar os temas de Política, Ética e Sociedade",
                "Revisar os principais autores estudados no ano",
                "Avaliar o crescimento do pensamento crítico"
              ],
              theory: {
                title: "O Homem como Ser Social e Político",
                content: "Durante este ano, percorremos os caminhos da política (como vivemos juntos), da ética (como devemos agir) e da sociedade (como somos moldados).",
                sections: [
                  {
                    title: "Retrospectiva",
                    items: [
                      "Contratualistas: O pacto social",
                      "Ética: Virtude, Dever e Utilidade",
                      "Poder: Democracia, Vigilância e Liberdade",
                      "Sociedade: Crítica à cultura de massa e busca pela identidade"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Retrospectiva em imagens" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Mapa mental gigante da 2ª série" },
                  { title: "Aplicação", duration: "10 min", description: "Autoavaliação do pensamento crítico" },
                  { title: "Fechamento", duration: "5 min", description: "Expectativas para a 3ª série" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Carta ao 'Eu' do Futuro",
                  description: "Escreva uma carta para você mesmo na 3ª série, resumindo a lição mais importante que você aprendeu em filosofia este ano."
                }
              ],
              reflectionQuestions: [
                "Qual foi o tema que mais mudou sua visão de mundo este ano?",
                "Você se sente mais preparado para participar da vida política?",
                "Qual a importância de continuar estudando filosofia no próximo ano?"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "s3",
      number: 3,
      title: "3ª SÉRIE – EXISTENCIALISMO, CIÊNCIA, TECNOLOGIA E MEIO AMBIENTE",
      bimestres: [
        {
          id: "s3b1",
          number: 1,
          title: "FILOSOFIA CONTEMPORÂNEA E EXISTENCIALISMO",
          classes: [
            {
              id: "c51",
              class_number: 51,
              title: "Introdução à Filosofia contemporânea",
              objectives: ["Compreender o pluralismo contemporâneo"],
              theory: { title: "A Crise da Modernidade", content: "A filosofia contemporânea questiona as metanarrativas.", sections: [] },
              methodology: { steps: [] },
              activities: [],
              reflectionQuestions: []
            },
            {
              id: "c52",
              class_number: 52,
              title: "Soren Kierkegaard: a angústia da escolha",
              objectives: [
                "Compreender o pensamento de Kierkegaard como precursor do existencialismo",
                "Analisar os conceitos de angústia, desespero e fé"
              ],
              theory: {
                title: "A Verdade é Subjetividade",
                content: "Kierkegaard foca na existência individual e na relação pessoal com Deus.",
                sections: [
                  {
                    title: "Os Três Estádios da Existência",
                    items: [
                      "Estádio Estético: Busca do prazer imediato",
                      "Estádio Ético: Compromisso moral e dever",
                      "Estádio Religioso: Relação pessoal com Deus (fé)"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Discussão sobre momentos de angústia e escolha" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Os Três Estádios",
                  description: "Identifique características dos estádios em diferentes idades (infância, juventude, idade adulta)."
                }
              ],
              reflectionQuestions: [
                "A angústia é necessária para o crescimento pessoal?",
                "É possível viver autenticamente na sociedade atual?"
              ]
            },
            {
              id: "c53",
              class_number: 53,
              title: "Friedrich Nietzsche: a morte de Deus e o além-do-homem",
              objectives: [
                "Compreender a crítica de Nietzsche à moral ocidental",
                "Analisar o conceito de niilismo e a morte de Deus",
                "Explorar a ideia do Übermensch (além-do-homem)"
              ],
              theory: {
                title: "A Transvaloração dos Valores",
                content: "Nietzsche questiona as bases da moral cristã e racionalista, propondo uma afirmação da vida e da vontade de poder.",
                sections: [
                  {
                    title: "A Morte de Deus",
                    items: [
                      "Fim das certezas absolutas e dos valores transcendentais",
                      "Niilismo: A perda de sentido do mundo",
                      "O desafio de criar novos valores a partir da própria vida"
                    ]
                  },
                  {
                    title: "O Além-do-Homem",
                    items: [
                      "Aquele que supera a moral de rebanho",
                      "Amor Fati: Amar o destino e a vida como ela é",
                      "Eterno Retorno: Viver de tal forma que você desejaria repetir cada momento infinitamente"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Análise da frase 'Deus está morto'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre niilismo e superação" },
                  { title: "Aplicação", duration: "10 min", description: "Discussão sobre autonomia e criação de valores" },
                  { title: "Fechamento", duration: "5 min", description: "Nietzsche e a cultura contemporânea" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Criando Valores",
                  description: "Se não houvesse regras impostas por ninguém, quais seriam os três valores mais importantes para você?"
                }
              ],
              reflectionQuestions: [
                "O que Nietzsche quis dizer com 'morte de Deus'?",
                "Você seria capaz de viver sua vida novamente, exatamente igual, infinitas vezes?",
                "Como a filosofia de Nietzsche nos desafia a sermos mais autênticos?"
              ]
            },
            {
              id: "c54",
              class_number: 54,
              title: "Jean-Paul Sartre: a existência precede a essência",
              objectives: [
                "Compreender o existencialismo ateu de Sartre",
                "Analisar o conceito de liberdade e responsabilidade",
                "Discutir a ideia de 'má-fé'"
              ],
              theory: {
                title: "O Homem está Condenado a ser Livre",
                content: "Para Sartre, não há um projeto prévio para o ser humano. Nós nos definimos através de nossas escolhas e ações.",
                sections: [
                  {
                    title: "Liberdade Radical",
                    items: [
                      "Não há desculpas: Somos responsáveis por tudo o que somos",
                      "Angústia: O peso de saber que nossas escolhas definem a humanidade",
                      "Má-fé: Fugir da responsabilidade fingindo que não temos escolha"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Dilema: 'Você é livre para escolher seu futuro?'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre o existencialismo sartriano" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de situações de má-fé no cotidiano" },
                  { title: "Fechamento", duration: "5 min", description: "A responsabilidade de ser livre" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: O Projeto de Si",
                  description: "Descreva quem você é hoje baseando-se apenas nas escolhas que você fez no último ano."
                }
              ],
              reflectionQuestions: [
                "O que significa dizer que 'estamos condenados a ser livres'?",
                "Você já agiu com 'má-fé' para evitar uma responsabilidade?",
                "Como a liberdade de um indivíduo afeta a liberdade dos outros?"
              ]
            },
            {
              id: "c55",
              class_number: 55,
              title: "Simone de Beauvoir: o tornar-se mulher",
              objectives: [
                "Conhecer a contribuição de Beauvoir ao existencialismo",
                "Analisar a construção social do gênero",
                "Discutir a liberdade feminina e a alteridade"
              ],
              theory: {
                title: "O Segundo Sexo",
                content: "Beauvoir aplica o existencialismo à condição feminina, argumentando que a 'feminilidade' é uma construção cultural, não um destino biológico.",
                sections: [
                  {
                    title: "A Construção do Gênero",
                    items: [
                      "'Não se nasce mulher, torna-se mulher'",
                      "A mulher como o 'Outro' em relação ao homem (o Sujeito)",
                      "A luta pela transcendência e autonomia"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Discussão sobre papéis de gênero na sociedade" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre o pensamento de Beauvoir" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de estereótipos na mídia" },
                  { title: "Fechamento", duration: "5 min", description: "O legado do feminismo existencialista" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Tornar-se",
                  description: "Explique o que Beauvoir quis dizer com a frase 'Não se nasce mulher, torna-se mulher' e como isso se aplica a outros aspectos da identidade."
                }
              ],
              reflectionQuestions: [
                "Quais comportamentos você considera 'naturais' e quais são 'culturais'?",
                "Como a liberdade das mulheres beneficia a sociedade como um todo?",
                "Ainda vivemos em uma sociedade onde um gênero é visto como o 'Outro'?"
              ]
            }
          ]
        },
        {
          id: "s3b2",
          number: 2,
          title: "CIÊNCIA, TECNOLOGIA E TEORIA DO CONHECIMENTO",
          classes: [
            {
              id: "c56",
              class_number: 56,
              title: "O que é Ciência? Popper e Kuhn",
              objectives: [
                "Diferenciar conhecimento científico de senso comum",
                "Compreender o critério de falseabilidade de Popper",
                "Analisar o conceito de paradigmas de Kuhn"
              ],
              theory: {
                title: "Filosofia da Ciência",
                content: "A ciência não é um conjunto de verdades absolutas, mas um processo rigoroso de investigação e revisão constante.",
                sections: [
                  {
                    title: "Karl Popper: Falseabilidade",
                    items: [
                      "Uma teoria só é científica se puder ser testada e potencialmente refutada",
                      "A ciência progride por tentativas e erros"
                    ]
                  },
                  {
                    title: "Thomas Kuhn: Paradigmas",
                    items: [
                      "Ciência Normal vs Revolução Científica",
                      "Paradigmas são modelos que orientam a pesquisa em determinada época",
                      "A ciência muda através de saltos qualitativos (mudança de paradigma)"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Exemplo: 'Todos os cisnes são brancos?'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre Popper e Kuhn" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de revoluções científicas (ex: Copérnico, Einstein)" },
                  { title: "Fechamento", duration: "5 min", description: "A natureza provisória da ciência" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Falseando Teorias",
                  description: "Tente criar uma afirmação que não possa ser falseada (não científica) e uma que possa (científica)."
                }
              ],
              reflectionQuestions: [
                "Por que a ciência precisa estar aberta a críticas?",
                "O que acontece quando um paradigma científico entra em crise?",
                "Podemos confiar totalmente na ciência?"
              ]
            },
            {
              id: "c57",
              class_number: 57,
              title: "Tecnologia e Sociedade: impactos e reflexões",
              objectives: [
                "Analisar a relação entre técnica e tecnologia",
                "Discutir o impacto da tecnologia na vida cotidiana",
                "Refletir sobre o determinismo tecnológico"
              ],
              theory: {
                title: "A Era da Técnica",
                content: "A tecnologia não é apenas uma ferramenta neutra; ela molda nossa forma de pensar, agir e nos relacionar com o mundo.",
                sections: [
                  {
                    title: "Técnica vs Tecnologia",
                    items: [
                      "Técnica: Saber fazer manual e tradicional",
                      "Tecnologia: Aplicação sistemática do conhecimento científico à produção",
                      "A tecnologia como mediadora da realidade"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Lista de tecnologias essenciais no dia a dia" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre filosofia da tecnologia" },
                  { title: "Aplicação", duration: "10 min", description: "Debate: 'A tecnologia nos liberta ou nos escraviza?'" },
                  { title: "Fechamento", duration: "5 min", description: "O uso consciente da tecnologia" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Um Dia Sem Tecnologia",
                  description: "Imagine e descreva como seria um dia da sua vida sem nenhuma tecnologia digital. O que mudaria na sua percepção do tempo e das pessoas?"
                }
              ],
              reflectionQuestions: [
                "A tecnologia é neutra ou possui valores embutidos?",
                "Como as redes sociais mudaram nossa forma de amizade?",
                "Existe algum limite para o avanço tecnológico?"
              ]
            },
            {
              id: "c58",
              class_number: 58,
              title: "Escola de Frankfurt: Teoria Crítica",
              objectives: [
                "Conhecer as origens e objetivos da Escola de Frankfurt",
                "Diferenciar Razão Instrumental de Razão Crítica",
                "Compreender o conceito de Indústria Cultural"
              ],
              theory: {
                title: "A Crítica à Razão Instrumental",
                content: "Os pensadores de Frankfurt analisaram como a razão, que deveria libertar o homem, tornou-se um instrumento de dominação na sociedade industrial.",
                sections: [
                  {
                    title: "Razão Instrumental",
                    items: [
                      "Focada apenas na eficácia e nos meios, ignorando os fins éticos",
                      "Trata a natureza e os seres humanos como meros objetos de uso"
                    ]
                  },
                  {
                    title: "Indústria Cultural",
                    items: [
                      "A arte e a cultura transformadas em mercadoria",
                      "Padronização do gosto e passividade do espectador",
                      "Entretenimento como forma de controle social"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Análise de um hit musical ou filme de sucesso" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre a Escola de Frankfurt" },
                  { title: "Aplicação", duration: "10 min", description: "Discussão sobre consumo e alienação" },
                  { title: "Fechamento", duration: "5 min", description: "A necessidade de um pensamento crítico" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Analisando a Indústria Cultural",
                  description: "Escolha um produto cultural (série, jogo, música) e identifique elementos de padronização e apelo ao consumo."
                }
              ],
              reflectionQuestions: [
                "A cultura de massa nos torna mais inteligentes ou mais passivos?",
                "É possível produzir arte verdadeira dentro da indústria cultural?",
                "Como a razão pode voltar a ser libertadora?"
              ]
            },
            {
              id: "c59",
              class_number: 59,
              title: "Walter Benjamin: a obra de arte na era da reprodutibilidade técnica",
              objectives: [
                "Compreender o conceito de 'aura' da obra de arte",
                "Analisar o impacto da fotografia e do cinema na arte",
                "Discutir a democratização vs. banalização da cultura"
              ],
              theory: {
                title: "A Perda da Aura",
                content: "Benjamin observou que a capacidade de reproduzir obras de arte infinitamente mudou nossa relação com o belo e com o sagrado.",
                sections: [
                  {
                    title: "Aura",
                    items: [
                      "O 'aqui e agora' da obra original, sua singularidade e tradição",
                      "A reprodução técnica destrói a aura, mas torna a arte acessível às massas",
                      "O potencial político da arte reproduzida"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Comparação: Ver a Monalisa no Louvre vs. no Google Imagens" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre o pensamento de Benjamin" },
                  { title: "Aplicação", duration: "10 min", description: "Análise da fotografia e do cinema como artes de massa" },
                  { title: "Fechamento", duration: "5 min", description: "Arte e política hoje" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: O Valor da Cópia",
                  description: "Você acha que uma reprodução perfeita de um quadro tem o mesmo valor que o original? Justifique sua resposta usando os conceitos de Benjamin."
                }
              ],
              reflectionQuestions: [
                "A facilidade de acesso à música e filmes diminuiu nosso interesse por eles?",
                "O que torna algo 'único' hoje em dia?",
                "Como a tecnologia mudou sua forma de apreciar a arte?"
              ]
            },
            {
              id: "c60",
              class_number: 60,
              title: "Habermas: agir comunicativo e esfera pública",
              objectives: [
                "Conhecer a teoria da ação comunicativa",
                "Compreender o conceito de ética do discurso",
                "Analisar a importância da esfera pública para a democracia"
              ],
              theory: {
                title: "A Razão Comunicativa",
                content: "Habermas propõe que a razão não deve ser apenas instrumental, mas baseada no diálogo e no entendimento mútuo.",
                sections: [
                  {
                    title: "Agir Comunicativo",
                    items: [
                      "Busca do consenso através do melhor argumento",
                      "Situação Ideal de Fala: Onde todos podem participar sem coação",
                      "A democracia como processo de deliberação pública"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Dinâmica de debate sobre um tema polêmico" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre Habermas" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de fóruns de discussão e redes sociais" },
                  { title: "Fechamento", duration: "5 min", description: "O diálogo como base da convivência" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Regras do Discurso",
                  description: "Crie cinco regras que você considera essenciais para que um debate na internet seja produtivo e respeitoso."
                }
              ],
              reflectionQuestions: [
                "É possível chegar a um consenso em uma sociedade tão dividida?",
                "As redes sociais ajudam ou atrapalham a 'esfera pública'?",
                "Qual a diferença entre convencer alguém e vencer uma discussão?"
              ]
            }
          ]
        },
        {
          id: "s3b3",
          number: 3,
          title: "BIOÉTICA, MEIO AMBIENTE E FUTURO",
          classes: [
            {
              id: "c61",
              class_number: 61,
              title: "Introdução à Bioética: a vida em questão",
              objectives: [
                "Definir o campo da Bioética",
                "Conhecer os princípios fundamentais da bioética",
                "Analisar dilemas éticos na medicina e biologia"
              ],
              theory: {
                title: "Ética da Vida",
                content: "A bioética surge para responder aos desafios impostos pelo avanço das biotecnologias sobre a vida humana e não-humana.",
                sections: [
                  {
                    title: "Os Quatro Princípios",
                    items: [
                      "Autonomia: Respeito à vontade do paciente",
                      "Beneficência: Fazer o bem",
                      "Não-maleficência: Não causar dano",
                      "Justiça: Distribuição equitativa de recursos"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Apresentação de um caso ético real (ex: transplante)" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre os princípios da bioética" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de dilemas (aborto, eutanásia, clonagem)" },
                  { title: "Fechamento", duration: "5 min", description: "A responsabilidade ética diante da ciência" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Aplicando Princípios",
                  description: "Escolha um dilema bioético e tente resolvê-lo utilizando os quatro princípios apresentados."
                }
              ],
              reflectionQuestions: [
                "Quem deve decidir sobre o fim da vida de uma pessoa?",
                "Até onde a ciência pode interferir na natureza humana?",
                "Como garantir que a tecnologia médica seja acessível a todos?"
              ]
            },
            {
              id: "c62",
              class_number: 62,
              title: "Hans Jonas: o imperativo da responsabilidade",
              objectives: [
                "Compreender a crítica de Jonas à ética tradicional",
                "Analisar o conceito de responsabilidade para com o futuro",
                "Discutir a heurística do temor"
              ],
              theory: {
                title: "Ética para a Civilização Tecnológica",
                content: "Jonas argumenta que as éticas antigas não previram o poder destrutivo da tecnologia moderna, sendo necessária uma nova ética focada na sobrevivência da humanidade.",
                sections: [
                  {
                    title: "O Imperativo de Jonas",
                    items: [
                      "'Age de tal maneira que os efeitos da tua ação não sejam destrutivos para a possibilidade futura de uma vida humana autêntica'",
                      "Responsabilidade assimétrica: O poder gera dever",
                      "Heurística do Temor: Devemos dar mais peso às previsões de catástrofe do que às de progresso ao tomar decisões tecnológicas"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Discussão sobre mudanças climáticas e gerações futuras" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre o pensamento de Hans Jonas" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de projetos tecnológicos de longo prazo" },
                  { title: "Fechamento", duration: "5 min", description: "Cuidar do que ainda não existe" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Carta ao Futuro",
                  description: "Escreva uma mensagem para um jovem que viverá daqui a 100 anos, explicando o que sua geração está fazendo para garantir que ele tenha um mundo habitável."
                }
              ],
              reflectionQuestions: [
                "Temos obrigações morais com pessoas que ainda não nasceram?",
                "Por que é difícil agir pensando no longo prazo?",
                "Você concorda com a 'heurística do temor'?"
              ]
            },
            {
              id: "c63",
              class_number: 63,
              title: "Peter Singer: ética animal e libertação",
              objectives: [
                "Conhecer o conceito de especismo",
                "Compreender o princípio da igual consideração de interesses",
                "Discutir as implicações éticas do consumo de animais"
              ],
              theory: {
                title: "Libertação Animal",
                content: "Singer propõe que a capacidade de sofrer, e não a inteligência ou a espécie, deve ser o critério para a consideração ética.",
                sections: [
                  {
                    title: "Especismo",
                    items: [
                      "Preconceito ou atitude de viés em favor dos interesses de membros da própria espécie",
                      "Igual consideração de interesses: Sofrimentos iguais devem ser tratados com pesos iguais",
                      "A crítica ao uso de animais em testes e na alimentação industrial"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Discussão: 'Por que amamos cães e comemos porcos?'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre a ética de Peter Singer" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de vídeos ou textos sobre bem-estar animal" },
                  { title: "Fechamento", duration: "5 min", description: "Expandindo o círculo da ética" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: O Círculo Ético",
                  description: "Desenhe círculos concêntricos representando quem você considera digno de respeito ético (família, amigos, humanos, animais domésticos, todos os animais, plantas). Justifique seus limites."
                }
              ],
              reflectionQuestions: [
                "O sofrimento de um animal vale menos que o de um humano? Por quê?",
                "É possível ser ético e consumir produtos de origem animal?",
                "Como a sociedade mudaria se levássemos a sério a libertação animal?"
              ]
            },
            {
              id: "c64",
              class_number: 64,
              title: "Ética Ambiental e Sustentabilidade",
              objectives: [
                "Diferenciar Antropocentrismo de Ecocentrismo",
                "Compreender o conceito de desenvolvimento sustentável",
                "Refletir sobre o consumo consciente"
              ],
              theory: {
                title: "A Terra como Nossa Casa Comum",
                content: "A filosofia ambiental questiona nossa relação de domínio sobre a natureza e propõe novos modelos de convivência com o ecossistema.",
                sections: [
                  {
                    title: "Modelos Éticos",
                    items: [
                      "Antropocentrismo: A natureza existe para servir ao homem",
                      "Biocentrismo: Toda forma de vida tem valor intrínseco",
                      "Ecocentrismo: O valor está no equilíbrio do ecossistema como um todo"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Análise da pegada ecológica dos alunos" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre ética ambiental" },
                  { title: "Aplicação", duration: "10 min", description: "Discussão sobre soluções locais para problemas globais" },
                  { title: "Fechamento", duration: "5 min", description: "Sustentabilidade como escolha ética" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Plano de Sustentabilidade",
                  description: "Crie três ações práticas que sua escola ou sua casa poderiam adotar para serem mais sustentáveis."
                }
              ],
              reflectionQuestions: [
                "O progresso econômico é sempre inimigo da natureza?",
                "O que significa 'viver bem' sem consumir excessivamente?",
                "Qual o papel da filosofia na crise ambiental?"
              ]
            },
            {
              id: "c65",
              class_number: 65,
              title: "Filosofia e o Futuro da Humanidade",
              objectives: [
                "Discutir o Transumanismo e o Pós-humanismo",
                "Refletir sobre a Inteligência Artificial e a consciência",
                "Sintetizar os desafios éticos do século XXI"
              ],
              theory: {
                title: "Para onde vamos?",
                content: "O avanço da IA, da edição genética e da exploração espacial nos obriga a repensar o que significa ser humano.",
                sections: [
                  {
                    title: "Desafios Futuros",
                    items: [
                      "Transumanismo: O uso da tecnologia para superar limites biológicos",
                      "Singularidade: O momento em que a IA supera a inteligência humana",
                      "Ética Algorítmica: Quem é responsável pelas decisões das máquinas?"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Trailer de um filme de ficção científica (ex: Blade Runner, Her)" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre transumanismo e IA" },
                  { title: "Aplicação", duration: "10 min", description: "Debate: 'Uma máquina pode ter alma ou direitos?'" },
                  { title: "Fechamento", duration: "5 min", description: "A filosofia como bússola para o futuro" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: O Humano do Futuro",
                  description: "Se você pudesse fazer um 'upgrade' tecnológico no seu corpo ou mente, qual seria? Quais seriam as consequências éticas dessa escolha?"
                }
              ],
              reflectionQuestions: [
                "O que nos torna humanos: nossa biologia ou nossa consciência?",
                "Devemos temer ou abraçar a inteligência artificial?",
                "Como manter a ética em um mundo em constante transformação tecnológica?"
              ]
            }
          ]
        },
        {
          id: "s3b4",
          number: 4,
          title: "DESAFIOS CONTEMPORÂNEOS E SÍNTESE FINAL",
          classes: [
            {
              id: "c66",
              class_number: 66,
              title: "Pós-modernidade: o fim das grandes narrativas",
              objectives: [
                "Compreender o conceito de pós-modernidade",
                "Analisar a fragmentação da identidade e do conhecimento",
                "Discutir a era da pós-verdade"
              ],
              theory: {
                title: "A Condição Pós-Moderna",
                content: "A pós-modernidade é marcada pela queda das certezas absolutas e pelo surgimento de múltiplas perspectivas e verdades locais.",
                sections: [
                  {
                    title: "Características",
                    items: [
                      "Desconfiança das 'Metanarrativas' (grandes explicações do mundo)",
                      "Hibridismo cultural e fragmentação",
                      "O império da imagem e do efêmero"
                    ]
                  },
                  {
                    title: "Pós-Verdade",
                    items: [
                      "Quando os fatos importam menos que as crenças e emoções",
                      "O desafio de encontrar a verdade na era da informação excessiva"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Análise de memes e cultura de internet" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre pós-modernidade" },
                  { title: "Aplicação", duration: "10 min", description: "Discussão sobre fake news e bolhas sociais" },
                  { title: "Fechamento", duration: "5 min", description: "Navegando na incerteza" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Múltiplas Verdades",
                  description: "Escolha um evento atual e mostre como ele é interpretado de formas completamente diferentes por diferentes grupos. Existe uma verdade neutra?"
                }
              ],
              reflectionQuestions: [
                "A falta de certezas absolutas é libertadora ou assustadora?",
                "Como saber em quem confiar hoje em dia?",
                "O que define sua identidade em um mundo tão fragmentado?"
              ]
            },
            {
              id: "c67",
              class_number: 67,
              title: "Zygmunt Bauman: Modernidade Líquida",
              objectives: [
                "Compreender o conceito de liquidez social",
                "Analisar a fragilidade dos laços humanos",
                "Discutir o consumo como forma de identidade"
              ],
              theory: {
                title: "Tudo o que é sólido se desmancha no ar",
                content: "Bauman descreve nossa época como 'líquida', onde nada é feito para durar, desde objetos até relacionamentos.",
                sections: [
                  {
                    title: "Vida Líquida",
                    items: [
                      "Insegurança e incerteza constantes",
                      "Relacionamentos 'conexões' (fáceis de desconectar)",
                      "O medo de ficar de fora (FOMO) e a busca por novidades"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Discussão: 'Quanto tempo dura um celular ou uma amizade hoje?'" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre Bauman" },
                  { title: "Aplicação", duration: "10 min", description: "Análise do impacto das redes sociais nos laços afetivos" },
                  { title: "Fechamento", duration: "5 min", description: "A busca por solidez em um mundo líquido" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Conexões vs Relacionamentos",
                  description: "Explique a diferença que Bauman faz entre 'conectar-se' e 'relacionar-se'. Qual predomina na sua vida?"
                }
              ],
              reflectionQuestions: [
                "Por que temos tanta pressa e medo de perder tempo?",
                "É possível construir algo duradouro na modernidade líquida?",
                "Como o consumo substituiu a cidadania?"
              ]
            },
            {
              id: "c68",
              class_number: 68,
              title: "Byung-Chul Han: Sociedade do Cansaço",
              objectives: [
                "Analisar a transição da sociedade disciplinar para a sociedade do desempenho",
                "Compreender o conceito de autoexploração",
                "Discutir a saúde mental no mundo contemporâneo"
              ],
              theory: {
                title: "O Sujeito do Desempenho",
                content: "Han argumenta que não somos mais explorados por patrões externos, mas por nós mesmos, na busca incessante por produtividade e sucesso.",
                sections: [
                  {
                    title: "Sociedade do Cansaço",
                    items: [
                      "O excesso de positividade ('Você consegue!', 'Just do it!')",
                      "Burnout, depressão e TDAH como doenças da época",
                      "A perda da capacidade de contemplação e do ócio criativo"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Relatos sobre cansaço e pressão por resultados" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre Byung-Chul Han" },
                  { title: "Aplicação", duration: "10 min", description: "Análise de discursos de autoajuda e produtividade" },
                  { title: "Fechamento", duration: "5 min", description: "A importância de saber parar" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: O Elogio do Ócio",
                  description: "Escreva sobre a última vez que você não fez absolutamente nada produtivo. Como você se sentiu? Houve culpa?"
                }
              ],
              reflectionQuestions: [
                "Você se sente pressionado a ser 'alguém' o tempo todo?",
                "A liberdade de fazer o que quiser se tornou uma nova forma de prisão?",
                "Como podemos recuperar o tempo para o pensamento profundo?"
              ]
            },
            {
              id: "c69",
              class_number: 69,
              title: "Filosofia e Cultura Digital",
              objectives: [
                "Refletir sobre a ética nos algoritmos e dados",
                "Analisar o impacto da IA na criatividade e no trabalho",
                "Discutir a privacidade e a vigilância digital"
              ],
              theory: {
                title: "O Panóptico Digital",
                content: "Vivemos em uma sociedade de transparência total, onde nossos dados são o novo petróleo e nossa atenção é a mercadoria mais valiosa.",
                sections: [
                  {
                    title: "Temas Digitais",
                    items: [
                      "Bolhas de Filtro: Só vemos o que o algoritmo quer",
                      "Vigilância de Dados: Somos vigiados por nossas próprias escolhas",
                      "A IA e o fim do trabalho humano como o conhecemos"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Análise das permissões de um aplicativo comum" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Exposição sobre filosofia digital" },
                  { title: "Aplicação", duration: "10 min", description: "Debate sobre o futuro do emprego e da renda básica" },
                  { title: "Fechamento", duration: "5 min", description: "Ser humano em bits" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Auditoria de Atenção",
                  description: "Verifique o tempo de uso do seu celular. Quanto desse tempo foi gasto de forma consciente e quanto foi 'sugado' pelo algoritmo?"
                }
              ],
              reflectionQuestions: [
                "Nós usamos a internet ou ela nos usa?",
                "A privacidade ainda é possível ou necessária?",
                "Como a IA mudará o que significa ser um 'estudante'?"
              ]
            },
            {
              id: "c70",
              class_number: 70,
              title: "Síntese Final: A Jornada Filosófica",
              objectives: [
                "Revisar o percurso do Ensino Médio (1ª a 3ª série)",
                "Sintetizar as principais ferramentas do pensamento filosófico",
                "Refletir sobre o papel da filosofia na vida adulta"
              ],
              theory: {
                title: "O Fim é Apenas o Começo",
                content: "A filosofia não termina na escola. Ela é uma postura diante da vida: a coragem de pensar por si mesmo e de nunca parar de perguntar 'por quê?'.",
                sections: [
                  {
                    title: "O Legado do Pensamento",
                    items: [
                      "Capacidade Crítica: Não aceitar o óbvio",
                      "Ética: Responsabilidade pelas próprias escolhas",
                      "Cidadania: Participação consciente na polis",
                      "Autoconhecimento: A busca pela própria verdade"
                    ]
                  }
                ]
              },
              methodology: {
                steps: [
                  { title: "Abertura", duration: "10 min", description: "Retrospectiva dos temas favoritos dos três anos" },
                  { title: "Desenvolvimento", duration: "25 min", description: "Grande mapa mental da filosofia" },
                  { title: "Aplicação", duration: "10 min", description: "Redação final: 'Minha Filosofia de Vida'" },
                  { title: "Fechamento", duration: "5 min", description: "Mensagem de despedida e encorajamento" }
                ]
              },
              activities: [
                {
                  title: "Atividade 1: Manifesto Filosófico",
                  description: "Escreva um pequeno manifesto com cinco princípios que guiarão sua vida após o ensino médio, baseando-se no que você aprendeu em filosofia."
                }
              ],
              reflectionQuestions: [
                "Como a filosofia mudou sua forma de ver o mundo nesses três anos?",
                "Qual filósofo você levará 'no bolso' para o resto da vida?",
                "Por que o mundo precisa de mais pessoas que pensam filosoficamente?"
              ]
            }
          ]
        }
      ]
    }
  ]
};
