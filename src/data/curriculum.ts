export interface LiteracyWord {
  id: string;
  word: string;
  syllables: string[];
  highlight: string;
  emoji: string;
  meaningHint: string;
}

export interface LiteracyModule {
  id: string;
  title: string;
  symbol: string;
  subtitle: string;
  category: 'casos_leitura' | 'silabas_complexas' | 'consoantes';
  pageRef: number;
  badgeColor: string;
  textColor: string;
  borderColor: string;
  accentBg: string;
  mascot: {
    name: string;
    animal: string;
    emoji: string;
    quote: string;
  };
  ruleExplanation: string;
  pedagogicalTip: string;
  highlightPhoneme: string;
  markerColorName: string;
  markerColorHex: string;
  words: LiteracyWord[];
  detectiveChallenges?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export const CURRICULUM_DATA: LiteracyModule[] = [
  // ==================== CASOS DE LEITURA ====================
  {
    id: 'caso-lh',
    title: 'Dígrafo LH',
    symbol: 'lh',
    subtitle: 'lha, lhe, lhi, lho, lhu',
    category: 'casos_leitura',
    pageRef: 45,
    badgeColor: 'bg-purple-100 text-purple-700 border-purple-300',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    accentBg: 'bg-purple-50',
    mascot: {
      name: 'Coelhinho Orelhudo',
      animal: 'Coelho',
      emoji: '🐰',
      quote: 'O L deu a pata ao H e formou o som molhadinho de coelho!'
    },
    ruleExplanation: 'Quando a letra L se junta com o H, elas formam um único som fofinho e molhado: lha, lhe, lhi, lho, lhu!',
    pedagogicalTip: 'Presta atenção ao movimento da língua no céu da boca ao pronunciar "coelho" e "palhaço".',
    highlightPhoneme: 'lh',
    markerColorName: 'Roxo / Lilás',
    markerColorHex: '#9333ea',
    words: [
      { id: 'w-lh-1', word: 'coelho', syllables: ['co', 'e', 'lho'], highlight: 'lho', emoji: '🐰', meaningHint: 'Animal fofinho de orelhas compridas' },
      { id: 'w-lh-2', word: 'palhaço', syllables: ['pa', 'lha', 'ço'], highlight: 'lha', emoji: '🤡', meaningHint: 'Faz rir no circo' },
      { id: 'w-lh-3', word: 'abelha', syllables: ['a', 'be', 'lha'], highlight: 'lha', emoji: '🐝', meaningHint: 'Inseto que faz mel doce' },
      { id: 'w-lh-4', word: 'milho', syllables: ['mi', 'lho'], highlight: 'lho', emoji: '🌽', meaningHint: 'Grão amarelo delicioso' },
      { id: 'w-lh-5', word: 'folhinha', syllables: ['fo', 'lhi', 'nha'], highlight: 'lhi', emoji: '🍃', meaningHint: 'Folha pequenina da árvore' },
      { id: 'w-lh-6', word: 'toalha', syllables: ['to', 'a', 'lha'], highlight: 'lha', emoji: '🧖', meaningHint: 'Usamos para nos secar' },
      { id: 'w-lh-7', word: 'ovelha', syllables: ['o', 've', 'lha'], highlight: 'lha', emoji: '🐑', meaningHint: 'Dá lã quentinha' },
      { id: 'w-lh-8', word: 'ramalhete', syllables: ['ra', 'ma', 'lhe', 'te'], highlight: 'lhe', emoji: '💐', meaningHint: 'Conjunto de flores perfumadas' },
      { id: 'w-lh-9', word: 'olho', syllables: ['o', 'lho'], highlight: 'lho', emoji: '👁️', meaningHint: 'Usamos para ver o mundo' }
    ],
    detectiveChallenges: [
      {
        question: 'Qual é a sílaba que completa a palavra: coe___ ?',
        options: ['lho', 'nho', 'cho'],
        correctIndex: 0,
        explanation: 'Escreve-se "coelho" com a sílaba LHO!'
      },
      {
        question: 'Qual destas palavras tem o som LH?',
        options: ['bola', 'toalha', 'lata'],
        correctIndex: 1,
        explanation: 'Muito bem! "Toalha" tem o som LH!'
      }
    ]
  },
  {
    id: 'caso-nh',
    title: 'Dígrafo NH',
    symbol: 'nh',
    subtitle: 'nha, nhe, nhi, nho, nhu',
    category: 'casos_leitura',
    pageRef: 44,
    badgeColor: 'bg-cyan-100 text-cyan-700 border-cyan-300',
    textColor: 'text-cyan-600',
    borderColor: 'border-cyan-200',
    accentBg: 'bg-cyan-50',
    mascot: {
      name: 'Golfinho Saltitão',
      animal: 'Golfinho',
      emoji: '🐬',
      quote: 'O N abraçou o H com um sonzinho nasal e divertido!'
    },
    ruleExplanation: 'A letra N junta-se ao H para criar um som suave e nasal: nha, nhe, nhi, nho, nhu!',
    pedagogicalTip: 'Sente o ar a passar pelo nariz quando dizes "golfinho" ou "joaninha"!',
    highlightPhoneme: 'nh',
    markerColorName: 'Azul-Ciano',
    markerColorHex: '#06b6d4',
    words: [
      { id: 'w-nh-1', word: 'golfinho', syllables: ['gol', 'fi', 'nho'], highlight: 'nho', emoji: '🐬', meaningHint: 'Amigo do mar que salta alto' },
      { id: 'w-nh-2', word: 'unha', syllables: ['u', 'nha'], highlight: 'nha', emoji: '💅', meaningHint: 'Fica na ponta dos nossos dedos' },
      { id: 'w-nh-3', word: 'pinha', syllables: ['pi', 'nha'], highlight: 'nha', emoji: '🌲', meaningHint: 'Fruto do pinheiro' },
      { id: 'w-nh-4', word: 'joaninha', syllables: ['jo', 'a', 'ni', 'nha'], highlight: 'nha', emoji: '🐞', meaningHint: 'Inseto vermelho com pintinhas pretas' },
      { id: 'w-nh-5', word: 'pinheiro', syllables: ['pi', 'nhei', 'ro'], highlight: 'nhei', emoji: '🎄', meaningHint: 'Árvore de Natal verde' },
      { id: 'w-nh-6', word: 'marinheiro', syllables: ['ma', 'ri', 'nhei', 'ro'], highlight: 'nhei', emoji: '🧑‍✈️', meaningHint: 'Navega em barcos nos mares' },
      { id: 'w-nh-7', word: 'gafanhoto', syllables: ['ga', 'fa', 'nho', 'to'], highlight: 'nho', emoji: '🦗', meaningHint: 'Inseto verde que salta na erva' },
      { id: 'w-nh-8', word: 'moinho', syllables: ['mo', 'i', 'nho'], highlight: 'nho', emoji: '💨', meaningHint: 'Gira as pás com a força do vento' },
      { id: 'w-nh-9', word: 'galinha', syllables: ['ga', 'li', 'nha'], highlight: 'nha', emoji: '🐔', meaningHint: 'Põe ovos no galinheiro' }
    ],
    detectiveChallenges: [
      {
        question: 'Qual é a sílaba que completa: gol-fi-___ ?',
        options: ['lho', 'nho', 'ro'],
        correctIndex: 1,
        explanation: 'Excelente! Golfinho termina com NHO!'
      },
      {
        question: 'Onde está o som NH na palavra "joaninha"?',
        options: ['No início', 'No meio', 'No fim'],
        correctIndex: 2,
        explanation: 'A sílaba NHA está no final da palavra joaninha!'
      }
    ]
  },
  {
    id: 'caso-ch',
    title: 'Dígrafo CH',
    symbol: 'ch',
    subtitle: 'cha, che, chi, cho, chu',
    category: 'casos_leitura',
    pageRef: 39,
    badgeColor: 'bg-rose-100 text-rose-700 border-rose-300',
    textColor: 'text-rose-600',
    borderColor: 'border-rose-200',
    accentBg: 'bg-rose-50',
    mascot: {
      name: 'Chita Veloz',
      animal: 'Chita',
      emoji: '🐆',
      quote: 'O C com o H faz o som de chuva e chocolate: chhh!'
    },
    ruleExplanation: 'O C dá as mãos ao H e faz um som suave como o barulhinho de pedir silêncio ou da chuva: cha, che, chi, cho, chu!',
    pedagogicalTip: 'Faz o som "Chiii!" como quando pedes silêncio numa brincadeira.',
    highlightPhoneme: 'ch',
    markerColorName: 'Cor-de-Rosa',
    markerColorHex: '#f43f5e',
    words: [
      { id: 'w-ch-1', word: 'chita', syllables: ['chi', 'ta'], highlight: 'chi', emoji: '🐆', meaningHint: 'O felino mais veloz da savana' },
      { id: 'w-ch-2', word: 'chávena', syllables: ['chá', 've', 'na'], highlight: 'chá', emoji: '☕', meaningHint: 'Para beber chá quentinho' },
      { id: 'w-ch-3', word: 'chocolate', syllables: ['cho', 'co', 'la', 'te'], highlight: 'cho', emoji: '🍫', meaningHint: 'Doce delicioso de cacau' },
      { id: 'w-ch-4', word: 'chefe', syllables: ['che', 'fe'], highlight: 'che', emoji: '👨‍🍳', meaningHint: 'Manda na cozinha ou na equipa' },
      { id: 'w-ch-5', word: 'duche', syllables: ['du', 'che'], highlight: 'che', emoji: '🚿', meaningHint: 'Banho refrescante com água' },
      { id: 'w-ch-6', word: 'mochila', syllables: ['mo', 'chi', 'la'], highlight: 'chi', emoji: '🎒', meaningHint: 'Onde levamos os livros para a escola' },
      { id: 'w-ch-7', word: 'chuteira', syllables: ['chu', 'tei', 'ra'], highlight: 'chu', emoji: '👟', meaningHint: 'Bota para jogar futebol' },
      { id: 'w-ch-8', word: 'chave', syllables: ['cha', 've'], highlight: 'cha', emoji: '🔑', meaningHint: 'Abre e fecha as portas de casa' },
      { id: 'w-ch-9', word: 'chuva', syllables: ['chu', 'va'], highlight: 'chu', emoji: '🌧️', meaningHint: 'Gotas de água a cair do céu' }
    ],
    detectiveChallenges: [
      {
        question: 'Qual palavra começa com o som CH?',
        options: ['sapo', 'chocolate', 'casa'],
        correctIndex: 1,
        explanation: 'Muito bem! "Chocolate" começa com CHO!'
      },
      {
        question: 'Completa a palavra: mo-___-la',
        options: ['chi', 'si', 'ti'],
        correctIndex: 0,
        explanation: 'Correto! Mochila escreve-se com CHI!'
      }
    ]
  },
  {
    id: 'caso-rr-r',
    title: 'R Forte (-rr-) vs R Fraco (-r-)',
    symbol: '-rr- / -r-',
    subtitle: 'carro (forte) vs amarelo (brando)',
    category: 'casos_leitura',
    pageRef: 29,
    badgeColor: 'bg-amber-100 text-amber-700 border-amber-300',
    textColor: 'text-amber-600',
    borderColor: 'border-amber-200',
    accentBg: 'bg-amber-50',
    mascot: {
      name: 'Carro de Corrida',
      animal: 'Carro Veloz',
      emoji: '🏎️',
      quote: 'Dois RR correm com som forte, e um só R entre vogais treme suave!'
    },
    ruleExplanation: 'No meio de duas vogais: usamos RR para o som forte que arranha a garganta (carro, torre), e apenas um R para o som brando que faz a língua tremer (amarelo, coroa)!',
    pedagogicalTip: 'Repara que nunca iniciamos uma palavra com dois RR (rato começa só com um R forte)!',
    highlightPhoneme: 'rr',
    markerColorName: 'Azul (RR forte) e Amarelo (R fraco)',
    markerColorHex: '#3b82f6',
    words: [
      { id: 'w-rr-1', word: 'carro', syllables: ['car', 'ro'], highlight: 'rr', emoji: '🚗', meaningHint: 'Veículo com 4 rodas (R forte)' },
      { id: 'w-rr-2', word: 'torre', syllables: ['tor', 're'], highlight: 'rr', emoji: '🏰', meaningHint: 'Construção muito alta (R forte)' },
      { id: 'w-rr-3', word: 'burro', syllables: ['bur', 'ro'], highlight: 'rr', emoji: '🫏', meaningHint: 'Animal simpático com orelhas (R forte)' },
      { id: 'w-rr-4', word: 'terra', syllables: ['ter', 'ra'], highlight: 'rr', emoji: '🌍', meaningHint: 'O nosso planeta e o chão fértil (R forte)' },
      { id: 'w-rr-5', word: 'amarelo', syllables: ['a', 'ma', 're', 'lo'], highlight: 'r', emoji: '🟡', meaningHint: 'A cor brilhante do sol (R brando)' },
      { id: 'w-rr-6', word: 'peru', syllables: ['pe', 'ru'], highlight: 'r', emoji: '🦃', meaningHint: 'Ave grande de quinta (R brando)' },
      { id: 'w-rr-7', word: 'coroa', syllables: ['co', 'ro', 'a'], highlight: 'r', emoji: '👑', meaningHint: 'O que o rei usa na cabeça (R brando)' },
      { id: 'w-rr-8', word: 'arara', syllables: ['a', 'ra', 'ra'], highlight: 'r', emoji: '🦜', meaningHint: 'Pássaro colorido que repete sons (R brando)' },
      { id: 'w-rr-9', word: 'amora', syllables: ['a', 'mo', 'ra'], highlight: 'r', emoji: '🫐', meaningHint: 'Fruto silvestre bem doce (R brando)' }
    ],
    detectiveChallenges: [
      {
        question: 'A palavra "CA___O" para andar na estrada leva R ou RR?',
        options: ['RR (carro - som forte)', 'R (caro - som brando)'],
        correctIndex: 0,
        explanation: 'Exato! O carro veloz precisa de dois RR para fazer força!'
      },
      {
        question: 'Na palavra "amarelo", o som do R é...',
        options: ['Forte (arranha a garganta)', 'Brando / Fraco (a língua treme)'],
        correctIndex: 1,
        explanation: 'Fantástico! É o som brando, por isso leva só um R!'
      }
    ]
  },
  {
    id: 'caso-ss',
    title: 'Dígrafo -SS-',
    symbol: '-ss-',
    subtitle: 'pássaro, osso, vassoura',
    category: 'casos_leitura',
    pageRef: 33,
    badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-300',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    accentBg: 'bg-emerald-50',
    mascot: {
      name: 'Pássaro Cantador',
      animal: 'Pássaro',
      emoji: '🐦',
      quote: 'Dois SS juntos entre vogais assobiam bem forte como o vento!'
    },
    ruleExplanation: 'Para ter o som de /s/ forte no meio de duas vogais, chamamos os dois irmãos SS! Se ficasse só um S, teria som de Z!',
    pedagogicalTip: 'Lembra-te: nenhuma palavra começa com SS!',
    highlightPhoneme: 'ss',
    markerColorName: 'Verde Esmeralda',
    markerColorHex: '#10b981',
    words: [
      { id: 'w-ss-1', word: 'pássaro', syllables: ['pás', 'sa', 'ro'], highlight: 'ss', emoji: '🐦', meaningHint: 'Voa pelo céu e canta' },
      { id: 'w-ss-2', word: 'osso', syllables: ['os', 'so'], highlight: 'ss', emoji: '🦴', meaningHint: 'O cão adora roer' },
      { id: 'w-ss-3', word: 'vassoura', syllables: ['vas', 'sou', 'ra'], highlight: 'ss', emoji: '🧹', meaningHint: 'Serve para varrer a casa' },
      { id: 'w-ss-4', word: 'assado', syllables: ['as', 'sa', 'do'], highlight: 'ss', emoji: '🍗', meaningHint: 'Comida feita no forno' },
      { id: 'w-ss-5', word: 'massa', syllables: ['mas', 'sa'], highlight: 'ss', emoji: '🍝', meaningHint: 'Esparguete saboroso' },
      { id: 'w-ss-6', word: 'dinossauro', syllables: ['di', 'nos', 'sau', 'ro'], highlight: 'ss', emoji: '🦖', meaningHint: 'Animal gigante pré-histórico' },
      { id: 'w-ss-7', word: 'pêssego', syllables: ['pês', 'se', 'go'], highlight: 'ss', emoji: '🍑', meaningHint: 'Fruta doce e aveludada' },
      { id: 'w-ss-8', word: 'carrossel', syllables: ['car', 'ros', 'sel'], highlight: 'ss', emoji: '🎠', meaningHint: 'Brinquedo que gira na feira' },
      { id: 'w-ss-9', word: 'sussurro', syllables: ['sus', 'sur', 'ro'], highlight: 'ss', emoji: '🤫', meaningHint: 'Falar baixinho ao ouvido' }
    ],
    detectiveChallenges: [
      {
        question: 'Se escrevermos "pássaro" apenas com um S ("pásaro"), a leitura soaria a som de quê?',
        options: ['Som de Z (pázaro)', 'Som de X', 'Som de P'],
        correctIndex: 0,
        explanation: 'Exatamente! Um S entre duas vogais ganha som de Z, por isso precisamos de SS!'
      },
      {
        question: 'Qual palavra está escrita de forma correta?',
        options: ['vassoura', 'vasoura', 'vasssoura'],
        correctIndex: 0,
        explanation: 'Muito bem! "Vassoura" escreve-se com SS!'
      }
    ]
  },
  {
    id: 'caso-s-z',
    title: 'S com som de Z (-s-)',
    symbol: '-s-',
    subtitle: 'raposa, casa, tesouro',
    category: 'casos_leitura',
    pageRef: 37,
    badgeColor: 'bg-orange-100 text-orange-700 border-orange-300',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    accentBg: 'bg-orange-50',
    mascot: {
      name: 'Raposinha Astuta',
      animal: 'Raposa',
      emoji: '🦊',
      quote: 'Quando estou sozinha no meio de duas vogais, zumbio como uma abelha: zzzz!'
    },
    ruleExplanation: 'A letra S, quando está sozinha entre duas vogais (a, e, i, o, u), tem som de Z: raposa, casa, casaco!',
    pedagogicalTip: 'Ouve a palavra "casa": vê-se a letra S, mas ouve-se o som do Z!',
    highlightPhoneme: 's',
    markerColorName: 'Laranja Raposa',
    markerColorHex: '#f97316',
    words: [
      { id: 'w-sz-1', word: 'raposa', syllables: ['ra', 'po', 'sa'], highlight: 'sa', emoji: '🦊', meaningHint: 'Animal esperto da floresta' },
      { id: 'w-sz-2', word: 'casa', syllables: ['ca', 'sa'], highlight: 'sa', emoji: '🏠', meaningHint: 'Onde mora a nossa família' },
      { id: 'w-sz-3', word: 'casaco', syllables: ['ca', 'sa', 'co'], highlight: 'sa', emoji: '🧥', meaningHint: 'Roupa quente de inverno' },
      { id: 'w-sz-4', word: 'tesouro', syllables: ['te', 'sou', 'ro'], highlight: 'sou', emoji: '🪙', meaningHint: 'Moedas de ouro do pirata' },
      { id: 'w-sz-5', word: 'lapiseira', syllables: ['la', 'pi', 'sei', 'ra'], highlight: 'sei', emoji: '✏️', meaningHint: 'Escreve com bico fino' },
      { id: 'w-sz-6', word: 'sorriso', syllables: ['sor', 'ri', 'so'], highlight: 'so', emoji: '😄', meaningHint: 'Mostra os dentes de alegria' },
      { id: 'w-sz-7', word: 'camisete', syllables: ['ca', 'mi', 'se', 'te'], highlight: 'se', emoji: '👕', meaningHint: 'Roupa fresca de verão' },
      { id: 'w-sz-8', word: 'cosido', syllables: ['co', 'si', 'do'], highlight: 'si', emoji: '🧵', meaningHint: 'Arranjado com linha e agulha' },
      { id: 'w-sz-9', word: 'casulo', syllables: ['ca', 'su', 'lo'], highlight: 'su', emoji: '🐛', meaningHint: 'Onde a lagarta vira borboleta' }
    ],
    detectiveChallenges: [
      {
        question: 'Na palavra "casa", a letra S soa como...',
        options: ['Som de Z', 'Som de S forte', 'Som de M'],
        correctIndex: 0,
        explanation: 'Certíssimo! Está entre as vogais A e A, por isso tem som de Z!'
      },
      {
        question: 'Qual destas palavras tem um S com som de Z?',
        options: ['sapo', 'raposa', 'sol'],
        correctIndex: 1,
        explanation: 'Muito bem! "Raposa" tem o S entre vogais com som de Z!'
      }
    ]
  },
  {
    id: 'caso-gue-gui',
    title: 'Casos GUE e GUI',
    symbol: 'gue, gui',
    subtitle: 'guerreiro, guitarra, foguetão',
    category: 'casos_leitura',
    pageRef: 31,
    badgeColor: 'bg-red-100 text-red-700 border-red-300',
    textColor: 'text-red-600',
    borderColor: 'border-red-200',
    accentBg: 'bg-red-50',
    mascot: {
      name: 'Pequeno Guerreiro',
      animal: 'Guerreiro & Guitarra',
      emoji: '🎸',
      quote: 'A letra U protege o G para que ele mantenha o som duro antes de E e I!'
    },
    ruleExplanation: 'Para que o G soe como "gato" antes de E ou I, pomos um U no meio: gue e gui (guerreiro, guitarra)!',
    pedagogicalTip: 'Lembra-te: o U não se ouve nestas palavras, ele é um amigo protetor!',
    highlightPhoneme: 'gue/gui',
    markerColorName: 'Vermelho e Azul',
    markerColorHex: '#ef4444',
    words: [
      { id: 'w-gg-1', word: 'guerreiro', syllables: ['guer', 'rei', 'ro'], highlight: 'guer', emoji: '🛡️', meaningHint: 'Lutador corajoso com escudo' },
      { id: 'w-gg-2', word: 'guitarra', syllables: ['gui', 'tar', 'ra'], highlight: 'gui', emoji: '🎸', meaningHint: 'Instrumento musical com cordas' },
      { id: 'w-gg-3', word: 'foguetão', syllables: ['fo', 'gue', 'tão'], highlight: 'gue', emoji: '🚀', meaningHint: 'Voa veloz até ao espaço' },
      { id: 'w-gg-4', word: 'baguete', syllables: ['ba', 'gue', 'te'], highlight: 'gue', emoji: '🥖', meaningHint: 'Pão comprido crocante' },
      { id: 'w-gg-5', word: 'caranguejo', syllables: ['ca', 'ran', 'gue', 'jo'], highlight: 'gue', emoji: '🦀', meaningHint: 'Anda de lado na praia' },
      { id: 'w-gg-6', word: 'fogueira', syllables: ['fo', 'guei', 'ra'], highlight: 'guei', emoji: '🔥', meaningHint: 'Lume para aquecer na festa' },
      { id: 'w-gg-7', word: 'guizo', syllables: ['gui', 'zo'], highlight: 'gui', emoji: '🔔', meaningHint: 'Campainha pequena que faz tilintar' },
      { id: 'w-gg-8', word: 'águia', syllables: ['á', 'guia'], highlight: 'guia', emoji: '🦅', meaningHint: 'Ave majestosa de asas grandes' },
      { id: 'w-gg-9', word: 'nogueira', syllables: ['no', 'guei', 'ra'], highlight: 'guei', emoji: '🌳', meaningHint: 'Árvore que dá nozes saborosas' }
    ],
    detectiveChallenges: [
      {
        question: 'Como se escreve o instrumento que faz música: ___tarra?',
        options: ['gui', 'gi', 'qui'],
        correctIndex: 0,
        explanation: 'Correto! Escreve-se guitarra com GUI!'
      },
      {
        question: 'O veículo que viaja no espaço chama-se fo___tão:',
        options: ['gue', 'ge', 'je'],
        correctIndex: 0,
        explanation: 'Fantástico! Fo-gue-tão com GUE!'
      }
    ]
  },
  {
    id: 'caso-ge-gi',
    title: 'Casos GE e GI',
    symbol: 'ge, gi',
    subtitle: 'girafa, gelado, gigante',
    category: 'casos_leitura',
    pageRef: 32,
    badgeColor: 'bg-pink-100 text-pink-700 border-pink-300',
    textColor: 'text-pink-600',
    borderColor: 'border-pink-200',
    accentBg: 'bg-pink-50',
    mascot: {
      name: 'Girafinha Doce',
      animal: 'Girafa',
      emoji: '🦒',
      quote: 'Sem o amigo U, o G junto de E e I soa suave como o J: ge, gi!'
    },
    ruleExplanation: 'Junto das vogais E e I (sem o U), a letra G tem o mesmo som da letra J: ge (gelado) e gi (girafa)!',
    pedagogicalTip: 'Ouve bem: "gelado" soa como "je", mas escreve-se com G!',
    highlightPhoneme: 'ge/gi',
    markerColorName: 'Cor-de-Rosa e Azul',
    markerColorHex: '#ec4899',
    words: [
      { id: 'w-ge-1', word: 'girafa', syllables: ['gi', 'ra', 'fa'], highlight: 'gi', emoji: '🦒', meaningHint: 'Animal de pescoço muito alto' },
      { id: 'w-ge-2', word: 'gelado', syllables: ['ge', 'la', 'do'], highlight: 'ge', emoji: '🍦', meaningHint: 'Sobremesa fresca no verão' },
      { id: 'w-ge-3', word: 'girassol', syllables: ['gi', 'ras', 'sol'], highlight: 'gi', emoji: '🌻', meaningHint: 'Flor amarela que segue o sol' },
      { id: 'w-ge-4', word: 'gelo', syllables: ['ge', 'lo'], highlight: 'ge', emoji: '🧊', meaningHint: 'Água congelada e fria' },
      { id: 'w-ge-5', word: 'gigante', syllables: ['gi', 'gan', 'te'], highlight: 'gi', emoji: '🧌', meaningHint: 'Ser enorme e forte nas lendas' },
      { id: 'w-ge-6', word: 'gema', syllables: ['ge', 'ma'], highlight: 'ge', emoji: '🍳', meaningHint: 'A parte amarela dentro do ovo' },
      { id: 'w-ge-7', word: 'geleia', syllables: ['ge', 'lei', 'a'], highlight: 'ge', emoji: '🫙', meaningHint: 'Doce espalhado no pão' },
      { id: 'w-ge-8', word: 'gelatina', syllables: ['ge', 'la', 'ti', 'na'], highlight: 'ge', emoji: '🍮', meaningHint: 'Sobremesa colorida que abana' },
      { id: 'w-ge-9', word: 'génio', syllables: ['gé', 'nio'], highlight: 'gé', emoji: '🧞', meaningHint: 'Mágico que sai da lâmpada' }
    ],
    detectiveChallenges: [
      {
        question: 'O animal de pescoço comprido é a ___rafa:',
        options: ['gi (com G)', 'ji (com J)', 'gui (com GUI)'],
        correctIndex: 0,
        explanation: 'Muito bem! "Girafa" escreve-se com GI!'
      },
      {
        question: 'A sobremesa refrescante de cone é um ___lado:',
        options: ['ge', 'je', 'gue'],
        correctIndex: 0,
        explanation: 'Correto! Gelado escreve-se com GE!'
      }
    ]
  },
  {
    id: 'caso-ce-ci',
    title: 'Casos CE e CI',
    symbol: 'ce, ci',
    subtitle: 'cegonha, cisne, cereja, cidade',
    category: 'casos_leitura',
    pageRef: 34,
    badgeColor: 'bg-sky-100 text-sky-700 border-sky-300',
    textColor: 'text-sky-600',
    borderColor: 'border-sky-200',
    accentBg: 'bg-sky-50',
    mascot: {
      name: 'Cegonha Elegante',
      animal: 'Cegonha',
      emoji: '🪶',
      quote: 'Antes de E e I, a letra C fala suavemente como se fosse um S!'
    },
    ruleExplanation: 'A letra C antes das vogais E e I tem som suave de /s/: ce (cenoura, cebola) e ci (cinema, cidade)!',
    pedagogicalTip: 'Não precisa de cedilha antes de E ou I; o C já é suave por natureza!',
    highlightPhoneme: 'ce/ci',
    markerColorName: 'Azul-Céu e Rosa',
    markerColorHex: '#0284c7',
    words: [
      { id: 'w-ce-1', word: 'cegonha', syllables: ['ce', 'go', 'nha'], highlight: 'ce', emoji: '🪶', meaningHint: 'Ave de bico longo que faz ninho alto' },
      { id: 'w-ce-2', word: 'cisne', syllables: ['cis', 'ne'], highlight: 'cis', emoji: '🦢', meaningHint: 'Ave branca que nada com beleza' },
      { id: 'w-ce-3', word: 'cereja', syllables: ['ce', 're', 'ja'], highlight: 'ce', emoji: '🍒', meaningHint: 'Fruta vermelha pequenina em pares' },
      { id: 'w-ce-4', word: 'cigarra', syllables: ['ci', 'gar', 'ra'], highlight: 'ci', emoji: '🦗', meaningHint: 'Canta nos dias quentes de verão' },
      { id: 'w-ce-5', word: 'céu', syllables: ['céu'], highlight: 'céu', emoji: '☁️', meaningHint: 'Onde brilham as nuvens e as estrelas' },
      { id: 'w-ce-6', word: 'cidade', syllables: ['ci', 'da', 'de'], highlight: 'ci', emoji: '🏙️', meaningHint: 'Com prédios, ruas e automóveis' },
      { id: 'w-ce-7', word: 'cebola', syllables: ['ce', 'bo', 'la'], highlight: 'ce', emoji: '🧅', meaningHint: 'Vegetal que às vezes faz chorar' },
      { id: 'w-ce-8', word: 'cenoura', syllables: ['ce', 'nou', 'ra'], highlight: 'ce', emoji: '🥕', meaningHint: 'O vegetal laranja favorito do coelho' },
      { id: 'w-ce-9', word: 'cinema', syllables: ['ci', 'ne', 'ma'], highlight: 'ci', emoji: '🎬', meaningHint: 'Onde vemos filmes com pipocas' }
    ],
    detectiveChallenges: [
      {
        question: 'Onde comemos pipocas e vemos filmes? No ___nema:',
        options: ['ci', 'si', 'ti'],
        correctIndex: 0,
        explanation: 'Excelente! "Cinema" escreve-se com CI!'
      },
      {
        question: 'Qual o vegetal cor-de-laranja que o coelho come?',
        options: ['cenoura', 'senoura', 'tenoura'],
        correctIndex: 0,
        explanation: 'Perfeito! "Cenoura" começa com CE!'
      }
    ]
  },
  {
    id: 'caso-cedilha',
    title: 'Cedilha: ÇA, ÇO, ÇU',
    symbol: 'ça, ço, çu',
    subtitle: 'taça, palhaço, açúcar',
    category: 'casos_leitura',
    pageRef: 35,
    badgeColor: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    textColor: 'text-amber-600',
    borderColor: 'border-yellow-200',
    accentBg: 'bg-yellow-50',
    mascot: {
      name: 'Palhacinho Alegria',
      animal: 'Palhaço',
      emoji: '🎪',
      quote: 'A cedilha é uma cobrinha brincalhona que dá ao C o som de S antes de A, O e U!'
    },
    ruleExplanation: 'A cedilha (ç) coloca-se no C antes de A, O ou U para soar como S: taça, palhaço, açúcar. Nunca se usa no início de palavras!',
    pedagogicalTip: 'Atenção à regra de ouro: nunca pomos cedilha antes de E ou I!',
    highlightPhoneme: 'ç',
    markerColorName: 'Amarelo e Azul',
    markerColorHex: '#eab308',
    words: [
      { id: 'w-cd-1', word: 'taça', syllables: ['ta', 'ça'], highlight: 'ça', emoji: '🏆', meaningHint: 'Troféu dourado do campeão' },
      { id: 'w-cd-2', word: 'palhaço', syllables: ['pa', 'lha', 'ço'], highlight: 'ço', emoji: '🤡', meaningHint: 'Artista alegre do circo' },
      { id: 'w-cd-3', word: 'açúcar', syllables: ['a', 'çú', 'car'], highlight: 'çú', emoji: '🧂', meaningHint: 'Adoça o leite e os bolos' },
      { id: 'w-cd-4', word: 'carapaça', syllables: ['ca', 'ra', 'pa', 'ça'], highlight: 'ça', emoji: '🐢', meaningHint: 'Casca dura da tartaruga' },
      { id: 'w-cd-5', word: 'ouriço', syllables: ['ou', 'ri', 'ço'], highlight: 'ço', emoji: '🦔', meaningHint: 'Animal com picos redondos' },
      { id: 'w-cd-6', word: 'berço', syllables: ['ber', 'ço'], highlight: 'ço', emoji: '👶', meaningHint: 'Cama pequenina do bebé' },
      { id: 'w-cd-7', word: 'poço', syllables: ['po', 'ço'], highlight: 'ço', emoji: '🪣', meaningHint: 'Buraco fundo para tirar água limpa' },
      { id: 'w-cd-8', word: 'baloiço', syllables: ['ba', 'loi', 'ço'], highlight: 'ço', emoji: '🪅', meaningHint: 'Para andar para trás e para a frente no parque' },
      { id: 'w-cd-9', word: 'maçã', syllables: ['ma', 'çã'], highlight: 'çã', emoji: '🍎', meaningHint: 'Fruta vermelha e saborosa' }
    ],
    detectiveChallenges: [
      {
        question: 'Podemos começar uma palavra com a letra Ç (cedilha)?',
        options: ['Não, nunca!', 'Sim, sempre!'],
        correctIndex: 0,
        explanation: 'Excelente! Nenhuma palavra da nossa língua começa com Ç!'
      },
      {
        question: 'Como se escreve o troféu dos vencedores: ta___ ?',
        options: ['ça', 'sa', 'ca'],
        correctIndex: 0,
        explanation: 'Muito bem! "Taça" escreve-se com ÇA!'
      }
    ]
  },
  {
    id: 'caso-valores-x',
    title: 'Os 4 Sons do X',
    symbol: 'valores de x',
    subtitle: 'X = CH, Z, S ou CS',
    category: 'casos_leitura',
    pageRef: 48,
    badgeColor: 'bg-indigo-100 text-indigo-700 border-indigo-300',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-200',
    accentBg: 'bg-indigo-50',
    mascot: {
      name: 'Xadrez Mágico',
      animal: 'Mágico do X',
      emoji: '♟️',
      quote: 'A letra X é camaleónica e tem quatro sons diferentes!'
    },
    ruleExplanation: 'A letra X pode soar a CH (peixe, xadrez), a Z (exame, exemplo), a S/SS (máximo, trouxe) ou a CS (táxi, fixo)!',
    pedagogicalTip: 'Descobre o som de cada X pronunciando devagarinho a palavra.',
    highlightPhoneme: 'x',
    markerColorName: 'Multicor',
    markerColorHex: '#6366f1',
    words: [
      { id: 'w-x-1', word: 'xadrez', syllables: ['xa', 'drez'], highlight: 'xa', emoji: '♟️', meaningHint: 'Jogo de reis e rainhas (som de CH)' },
      { id: 'w-x-2', word: 'peixe', syllables: ['pei', 'xe'], highlight: 'xe', emoji: '🐟', meaningHint: 'Nada na água (som de CH)' },
      { id: 'w-x-3', word: 'bruxa', syllables: ['bru', 'xa'], highlight: 'xa', emoji: '🧙‍♀️', meaningHint: 'Voa na vassoura nos contos (som de CH)' },
      { id: 'w-x-4', word: 'exame', syllables: ['e', 'xa', 'me'], highlight: 'xa', emoji: '📝', meaningHint: 'Teste escolar (som de Z)' },
      { id: 'w-x-5', word: 'exército', syllables: ['e', 'xér', 'ci', 'to'], highlight: 'xér', emoji: '🪖', meaningHint: 'Grupo de soldados (som de Z)' },
      { id: 'w-x-6', word: 'máximo', syllables: ['má', 'xi', 'mo'], highlight: 'xi', emoji: '🔝', meaningHint: 'O topo mais alto (som de S/SS)' },
      { id: 'w-x-7', word: 'próximo', syllables: ['pró', 'xi', 'mo'], highlight: 'xi', emoji: '➡️', meaningHint: 'Aquele que vem logo a seguir (som de S/SS)' },
      { id: 'w-x-8', word: 'táxi', syllables: ['tá', 'xi'], highlight: 'xi', emoji: '🚕', meaningHint: 'Carro que transporta passageiros (som de CS)' },
      { id: 'w-x-9', word: 'saxofone', syllables: ['sa', 'xo', 'fo', 'ne'], highlight: 'xo', emoji: '🎷', meaningHint: 'Instrumento dourado de jazz (som de CS)' }
    ],
    detectiveChallenges: [
      {
        question: 'O X da palavra "TÁXI" soa como...',
        options: ['Som de CS (tác-si)', 'Som de CH', 'Som de Z'],
        correctIndex: 0,
        explanation: 'Perfeito! Em "táxi", o X tem som de CS!'
      },
      {
        question: 'O X de "peixe" soa como...',
        options: ['Som de CH', 'Som de CS', 'Som de Z'],
        correctIndex: 0,
        explanation: 'Muito bem! "Peixe" tem o som macio de CH!'
      }
    ]
  },

  // ==================== SÍLABAS COMPLEXAS ====================
  {
    id: 'complex-ar-er-ir-or-ur',
    title: 'AR, ER, IR, OR, UR',
    symbol: 'ar, er, ir, or, ur',
    subtitle: 'árvore, urso, carta, porta',
    category: 'silabas_complexas',
    pageRef: 30,
    badgeColor: 'bg-lime-100 text-lime-700 border-lime-300',
    textColor: 'text-lime-600',
    borderColor: 'border-lime-200',
    accentBg: 'bg-lime-50',
    mascot: {
      name: 'Ursinho da Floresta',
      animal: 'Urso & Árvore',
      emoji: '🐻',
      quote: 'A vogal encontra o R no final da sílaba e faz o som esticar: ar, er, ir, or, ur!'
    },
    ruleExplanation: 'Quando a letra R fica no final da sílaba, ela puxa a vogal para trás com força: ar (árvore), er (erva), ir (irmão), or (porta), ur (urso)!',
    pedagogicalTip: 'Presta atenção ao fecho da sílaba: car-ta, dor-mir, por-ta.',
    highlightPhoneme: 'ar/er/ir/or/ur',
    markerColorName: 'Cores do Arco-íris',
    markerColorHex: '#84cc16',
    words: [
      { id: 'w-ar-1', word: 'árvore', syllables: ['ár', 'vo', 're'], highlight: 'ár', emoji: '🌳', meaningHint: 'Dá sombra fresca e folhas verdes' },
      { id: 'w-ar-2', word: 'urso', syllables: ['ur', 'so'], highlight: 'ur', emoji: '🐻', meaningHint: 'Animal grande que dorme no inverno' },
      { id: 'w-ar-3', word: 'carta', syllables: ['car', 'ta'], highlight: 'car', emoji: '✉️', meaningHint: 'Mensagem enviada pelo correio' },
      { id: 'w-ar-4', word: 'porta', syllables: ['por', 'ta'], highlight: 'por', emoji: '🚪', meaningHint: 'Para entrar e sair dos quartos' },
      { id: 'w-ar-5', word: 'dormir', syllables: ['dor', 'mir'], highlight: 'dor/mir', emoji: '😴', meaningHint: 'Descansar de olhos fechados na cama' },
      { id: 'w-ar-6', word: 'erva', syllables: ['er', 'va'], highlight: 'er', emoji: '🌱', meaningHint: 'Planta verde e rasteira no jardim' },
      { id: 'w-ar-7', word: 'porco', syllables: ['por', 'co'], highlight: 'por', emoji: '🐷', meaningHint: 'Animal cor-de-rosa com focinho' },
      { id: 'w-ar-8', word: 'tarte', syllables: ['tar', 'te'], highlight: 'tar', emoji: '🥧', meaningHint: 'Doce delicioso com maçã' },
      { id: 'w-ar-9', word: 'iogurte', syllables: ['io', 'gur', 'te'], highlight: 'gur', emoji: '🥣', meaningHint: 'Alimento fresco feito de leite' }
    ],
    detectiveChallenges: [
      {
        question: 'Qual sílaba completa a palavra da árvore verde: ___vore ?',
        options: ['Ár', 'Al', 'An'],
        correctIndex: 0,
        explanation: 'Muito bem! "Árvore" começa com ÁR!'
      },
      {
        question: 'O animal fofinho que dorme no inverno é o ___so:',
        options: ['ur', 'ul', 'un'],
        correctIndex: 0,
        explanation: 'Excelente! Ur-so com UR!'
      }
    ]
  },
  {
    id: 'complex-al-el-il-ol-ul',
    title: 'AL, EL, IL, OL, UL',
    symbol: 'al, el, il, ol, ul',
    subtitle: 'palmeira, barril, polvo, sol',
    category: 'silabas_complexas',
    pageRef: 40,
    badgeColor: 'bg-teal-100 text-teal-700 border-teal-300',
    textColor: 'text-teal-600',
    borderColor: 'border-teal-200',
    accentBg: 'bg-teal-50',
    mascot: {
      name: 'Polvo dos Mares',
      animal: 'Polvo & Palmeira',
      emoji: '🐙',
      quote: 'A letra L no final da sílaba soa melodiosa: al, el, il, ol, ul!'
    },
    ruleExplanation: 'A letra L no final da sílaba enrola a língua: pal-mei-ra, bar-ril, pol-vo, a-zul, caracol, sol!',
    pedagogicalTip: 'Repara como a língua sobe para tocar nos dentes de cima ao dizer "sol" e "polvo".',
    highlightPhoneme: 'al/el/il/ol/ul',
    markerColorName: 'Verde e Azul Marinho',
    markerColorHex: '#0d9488',
    words: [
      { id: 'w-al-1', word: 'palmeira', syllables: ['pal', 'mei', 'ra'], highlight: 'pal', emoji: '🌴', meaningHint: 'Árvore tropical que dá cocos' },
      { id: 'w-al-2', word: 'polvo', syllables: ['pol', 'vo'], highlight: 'pol', emoji: '🐙', meaningHint: 'Criatura marinha com 8 tentáculos' },
      { id: 'w-al-3', word: 'barril', syllables: ['bar', 'ril'], highlight: 'ril', emoji: '🛢️', meaningHint: 'Recipiente de madeira redondo' },
      { id: 'w-al-4', word: 'sol', syllables: ['sol'], highlight: 'sol', emoji: '☀️', meaningHint: 'A grande estrela que ilumina o dia' },
      { id: 'w-al-5', word: 'anel', syllables: ['a', 'nel'], highlight: 'nel', emoji: '💍', meaningHint: 'Joia que pomos no dedo' },
      { id: 'w-al-6', word: 'caracol', syllables: ['ca', 'ra', 'col'], highlight: 'col', emoji: '🐌', meaningHint: 'Leva a sua casinha às costas' },
      { id: 'w-al-7', word: 'azul', syllables: ['a', 'zul'], highlight: 'zul', emoji: '🔷', meaningHint: 'A cor bonita do mar e do céu' },
      { id: 'w-al-8', word: 'jornal', syllables: ['jor', 'nal'], highlight: 'nal', emoji: '📰', meaningHint: 'Traz notícias impressas em papel' },
      { id: 'w-al-9', word: 'almofada', syllables: ['al', 'mo', 'fa', 'da'], highlight: 'al', emoji: '🛋️', meaningHint: 'Onde pousamos a cabeça na cama' }
    ],
    detectiveChallenges: [
      {
        question: 'O animal marinho de 8 braços é o ___vo:',
        options: ['pol', 'por', 'pon'],
        correctIndex: 0,
        explanation: 'Correto! Pol-vo com OL!'
      },
      {
        question: 'O brilho no céu de dia é o ___:',
        options: ['sol', 'sor', 'son'],
        correctIndex: 0,
        explanation: 'Excelente! O Sol termina com a letra L!'
      }
    ]
  },
  {
    id: 'complex-as-es-is-os-us',
    title: 'AS, ES, IS, OS, US',
    symbol: 'as, es, is, os, us',
    subtitle: 'esquilo, pasta, lápis, óculos',
    category: 'silabas_complexas',
    pageRef: 36,
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    textColor: 'text-emerald-700',
    borderColor: 'border-emerald-200',
    accentBg: 'bg-emerald-50',
    mascot: {
      name: 'Esquilo Saltador',
      animal: 'Esquilo & Lápis',
      emoji: '🐿️',
      quote: 'A letra S fecha a sílaba com um assobio rápido: as, es, is, os, us!'
    },
    ruleExplanation: 'No final da sílaba ou no fim da palavra, a letra S faz um sopro suave: pas-ta, es-qui-lo, lá-pis, ó-cu-los, cas-te-lo!',
    pedagogicalTip: 'Ouve a diferença entre "pa-ta" e "pas-ta": o S muda tudo!',
    highlightPhoneme: 'as/es/is/os/us',
    markerColorName: 'Verde e Laranja',
    markerColorHex: '#059669',
    words: [
      { id: 'w-as-1', word: 'esquilo', syllables: ['es', 'qui', 'lo'], highlight: 'es', emoji: '🐿️', meaningHint: 'Gosta de avelãs e salta de galho em galho' },
      { id: 'w-as-2', word: 'pasta', syllables: ['pas', 'ta'], highlight: 'pas', emoji: '💼', meaningHint: 'Mala para guardar cadernos' },
      { id: 'w-as-3', word: 'lápis', syllables: ['lá', 'pis'], highlight: 'pis', emoji: '✏️', meaningHint: 'Para desenhar e escrever' },
      { id: 'w-as-4', word: 'óculos', syllables: ['ó', 'cu', 'los'], highlight: 'los', emoji: '👓', meaningHint: 'Ajudam os olhos a ver melhor' },
      { id: 'w-as-5', word: 'castelo', syllables: ['cas', 'te', 'lo'], highlight: 'cas', emoji: '🏰', meaningHint: 'Construção nobre de cavaleiros' },
      { id: 'w-as-6', word: 'biscoito', syllables: ['bis', 'coi', 'to'], highlight: 'bis', emoji: '🍪', meaningHint: 'Bolacha crocante e gostosa' },
      { id: 'w-as-7', word: 'estojo', syllables: ['es', 'to', 'jo'], highlight: 'es', emoji: '👝', meaningHint: 'Onde guardamos canetas e borracha' },
      { id: 'w-as-8', word: 'susto', syllables: ['sus', 'to'], highlight: 'sus', emoji: '😱', meaningHint: 'Surpresa de repente com medo' },
      { id: 'w-as-9', word: 'ananás', syllables: ['a', 'na', 'nás'], highlight: 'nás', emoji: '🍍', meaningHint: 'Fruta com coroa e casca áspera' }
    ],
    detectiveChallenges: [
      {
        question: 'O animal veloz que guarda avelãs é o ___quilo:',
        options: ['es', 'em', 'el'],
        correctIndex: 0,
        explanation: 'Excelente! Es-qui-lo com ES!'
      },
      {
        question: 'Onde pomos as canetas e a borracha? No ___tojo:',
        options: ['es', 'er', 'en'],
        correctIndex: 0,
        explanation: 'Muito bem! "Estojo" começa com ES!'
      }
    ]
  },
  {
    id: 'complex-an-en-in-on-un',
    title: 'AN, EN, IN, ON, UN',
    symbol: 'an, en, in, on, un',
    subtitle: 'panda, tenda, índio, ponte, mundo',
    category: 'silabas_complexas',
    pageRef: 41,
    badgeColor: 'bg-violet-100 text-violet-700 border-violet-300',
    textColor: 'text-violet-600',
    borderColor: 'border-violet-200',
    accentBg: 'bg-violet-50',
    mascot: {
      name: 'Panda Comilão',
      animal: 'Panda & Tenda',
      emoji: '🐼',
      quote: 'Com o N no fim da sílaba, o ar vibra pelo nariz: an, en, in, on, un!'
    },
    ruleExplanation: 'As vogais nasais com N usam-se antes de qualquer consoante, EXCETO antes de P e B (pois antes de P e B é sempre M)!',
    pedagogicalTip: 'Exemplos: pan-da (D), ten-ta (T), fon-te (T), mun-do (D).',
    highlightPhoneme: 'an/en/in/on/un',
    markerColorName: 'Violeta',
    markerColorHex: '#7c3aed',
    words: [
      { id: 'w-an-1', word: 'panda', syllables: ['pan', 'da'], highlight: 'pan', emoji: '🐼', meaningHint: 'Urso fofo preto e branco que come bambu' },
      { id: 'w-an-2', word: 'tenda', syllables: ['ten', 'da'], highlight: 'ten', emoji: '⛺', meaningHint: 'Para acampar na natureza' },
      { id: 'w-an-3', word: 'índio', syllables: ['ín', 'dio'], highlight: 'ín', emoji: '🪶', meaningHint: 'Habitante nativo da floresta' },
      { id: 'w-an-4', word: 'ponte', syllables: ['pon', 'te'], highlight: 'pon', emoji: '🌉', meaningHint: 'Cruza os rios de um lado ao outro' },
      { id: 'w-an-5', word: 'mundo', syllables: ['mun', 'do'], highlight: 'mun', emoji: '🌍', meaningHint: 'O planeta onde todos nós vivemos' },
      { id: 'w-an-6', word: 'morango', syllables: ['mo', 'ran', 'go'], highlight: 'ran', emoji: '🍓', meaningHint: 'Fruta vermelha perfumada' },
      { id: 'w-an-7', word: 'elefante', syllables: ['e', 'le', 'fan', 'te'], highlight: 'fan', emoji: '🐘', meaningHint: 'Animal enorme com tromba longa' },
      { id: 'w-an-8', word: 'pente', syllables: ['pen', 'te'], highlight: 'pen', emoji: '🪮', meaningHint: 'Para desembaraçar o cabelo' },
      { id: 'w-an-9', word: 'tinta', syllables: ['tin', 'ta'], highlight: 'tin', emoji: '🎨', meaningHint: 'Usada para pintar quadros bonitos' }
    ],
    detectiveChallenges: [
      {
        question: 'O urso preto e branco escreve-se: pan-da. Usa N porque a letra seguinte é...',
        options: ['D (não é P nem B)', 'P', 'B'],
        correctIndex: 0,
        explanation: 'Perfeito! Como a letra seguinte é D, usamos N!'
      },
      {
        question: 'Qual a fruta vermelha que contém o som AN?',
        options: ['morango', 'pera', 'uva'],
        correctIndex: 0,
        explanation: 'Muito bem! "Morango" tem o som AN!'
      }
    ]
  },
  {
    id: 'complex-am-em-im-om-um',
    title: 'AM, EM, IM, OM, UM',
    symbol: 'am, em, im, om, um',
    subtitle: 'campeão, comboio, nuvem, tambor',
    category: 'silabas_complexas',
    pageRef: 42,
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-300',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    accentBg: 'bg-blue-50',
    mascot: {
      name: 'Comboio Campeão',
      animal: 'Comboio & Campeão',
      emoji: '🚂',
      quote: 'Regra de Ouro: Antes de P e B usa-se sempre a letra M!'
    },
    ruleExplanation: 'Regra fundamental de leitura e escrita: no final de sílaba antes de P e B, ou no final das palavras, escreve-se sempre M (nunca N)!',
    pedagogicalTip: 'Exemplos: cam-pe-ão (P), com-boi-o (B), tam-bor (B), nu-vem (final de palavra).',
    highlightPhoneme: 'am/em/im/om/um',
    markerColorName: 'Azul Campeão',
    markerColorHex: '#2563eb',
    words: [
      { id: 'w-am-1', word: 'campeão', syllables: ['cam', 'pe', 'ão'], highlight: 'cam', emoji: '🏆', meaningHint: 'Aquele que vence a corrida (antes de P)' },
      { id: 'w-am-2', word: 'comboio', syllables: ['com', 'boi', 'o'], highlight: 'com', emoji: '🚂', meaningHint: 'Anda nos carris e faz piupiu (antes de B)' },
      { id: 'w-am-3', word: 'nuvem', syllables: ['nu', 'vem'], highlight: 'vem', emoji: '☁️', meaningHint: 'Flutua no céu azul (fim de palavra)' },
      { id: 'w-am-4', word: 'tambor', syllables: ['tam', 'bor'], highlight: 'tam', emoji: '🥁', meaningHint: 'Instrumento que bate o ritmo (antes de B)' },
      { id: 'w-am-5', word: 'pinguim', syllables: ['pin', 'guim'], highlight: 'guim', emoji: '🐧', meaningHint: 'Ave engraçada que gosta de gelo' },
      { id: 'w-am-6', word: 'bombeiro', syllables: ['bom', 'bei', 'ro'], highlight: 'bom', emoji: '🧑‍🚒', meaningHint: 'Apaga os fogos e salva pessoas (antes de B)' },
      { id: 'w-am-7', word: 'ambulância', syllables: ['am', 'bu', 'lân', 'cia'], highlight: 'am', emoji: '🚑', meaningHint: 'Carro de socorro médico (antes de B)' },
      { id: 'w-am-8', word: 'jardim', syllables: ['jar', 'dim'], highlight: 'dim', emoji: '🌷', meaningHint: 'Espaço com flores e relva (fim de palavra)' },
      { id: 'w-am-9', word: 'empada', syllables: ['em', 'pa', 'da'], highlight: 'em', emoji: '🥧', meaningHint: 'Salgado delicioso com recheio (antes de P)' }
    ],
    detectiveChallenges: [
      {
        question: 'Regra de ouro: Antes de P e B usa-se...',
        options: ['Sempre a letra M', 'A letra N', 'A letra L'],
        correctIndex: 0,
        explanation: 'Excelente! Antes de P e B usa-se sempre M, como em tamBor e camPeão!'
      },
      {
        question: 'Na palavra "nuvem", a última letra é...',
        options: ['M', 'N', 'L'],
        correctIndex: 0,
        explanation: 'Fantástico! No final da palavra em português usamos M!'
      }
    ]
  },
  {
    id: 'complex-encontros-r',
    title: 'Encontros com R',
    symbol: 'br, cr, dr, fr, gr, pr, tr, vr',
    subtitle: 'cobra, dragão, tigre, estrela, praia',
    category: 'silabas_complexas',
    pageRef: 46,
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    textColor: 'text-amber-700',
    borderColor: 'border-amber-200',
    accentBg: 'bg-amber-50',
    mascot: {
      name: 'Dragãozinho Amigo',
      animal: 'Dragão & Cobra',
      emoji: '🐉',
      quote: 'A letra R mete-se no meio da consoante e faz a sílaba vibrar: tra, pra, gra, bra!'
    },
    ruleExplanation: 'Grupos consonânticos com R: a consoante abraça o R logo a seguir (br, cr, dr, fr, gr, pr, tr, vr), criando sons fortes e enérgicos!',
    pedagogicalTip: 'Pronuncia devagar sentindo a vibração: dra-gão, ti-gre, es-tre-la, prai-a.',
    highlightPhoneme: 'r',
    markerColorName: 'Cores Mistas',
    markerColorHex: '#d97706',
    words: [
      { id: 'w-er-1', word: 'dragão', syllables: ['dra', 'gão'], highlight: 'dra', emoji: '🐉', meaningHint: 'Criatura fantástica que lança fogo' },
      { id: 'w-er-2', word: 'estrela', syllables: ['es', 'tre', 'la'], highlight: 'tre', emoji: '⭐', meaningHint: 'Brilha linda no céu da noite' },
      { id: 'w-er-3', word: 'tigre', syllables: ['ti', 'gre'], highlight: 'gre', emoji: '🐯', meaningHint: 'Grande felino com riscas pretas' },
      { id: 'w-er-4', word: 'cobra', syllables: ['co', 'bra'], highlight: 'bra', emoji: '🐍', meaningHint: 'Rasteja no chão com escamas' },
      { id: 'w-er-5', word: 'praia', syllables: ['prai', 'a'], highlight: 'prai', emoji: '🏖️', meaningHint: 'Onde brincamos com areia e ondas' },
      { id: 'w-er-6', word: 'livro', syllables: ['li', 'vro'], highlight: 'vro', emoji: '📖', meaningHint: 'Cheio de histórias e desenhos' },
      { id: 'w-er-7', word: 'fruta', syllables: ['fru', 'ta'], highlight: 'fru', emoji: '🍎', meaningHint: 'Alimento saudável das árvores' },
      { id: 'w-er-8', word: 'grilo', syllables: ['gri', 'lo'], highlight: 'gri', emoji: '🦗', meaningHint: 'Pequeno inseto que canta à noite' },
      { id: 'w-er-9', word: 'cravo', syllables: ['cra', 'vo'], highlight: 'cra', emoji: '🌺', meaningHint: 'Flor vermelha perfumada' }
    ],
    detectiveChallenges: [
      {
        question: 'O animal com riscas pretas é o ti___:',
        options: ['gre', 'gle', 'gne'],
        correctIndex: 0,
        explanation: 'Muito bem! Ti-gre com GRE!'
      },
      {
        question: 'Onde brincamos com a areia do mar? Na ___ia:',
        options: ['pra', 'pla', 'pa'],
        correctIndex: 0,
        explanation: 'Excelente! Prai-a tem o encontro PR!'
      }
    ]
  },
  {
    id: 'complex-encontros-l',
    title: 'Encontros com L',
    symbol: 'bl, cl, fl, gl, pl, tl',
    subtitle: 'blusão, bicicleta, flor, globo, atleta',
    category: 'silabas_complexas',
    pageRef: 47,
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    textColor: 'text-emerald-700',
    borderColor: 'border-emerald-200',
    accentBg: 'bg-emerald-50',
    mascot: {
      name: 'Florzinha Sorridente',
      animal: 'Flor & Globo',
      emoji: '🌸',
      quote: 'A letra L escorrega suavemente entre a consoante e a vogal: fla, bla, cla, gla, pla!'
    },
    ruleExplanation: 'Grupos consonânticos com L: a consoante junta-se ao L para criar um som fluido e melodioso: flor, globo, bicicleta, blusão, atleta!',
    pedagogicalTip: 'Sente a língua a subir ligeiramente ao pronunciar "flor", "globo" e "bicicleta".',
    highlightPhoneme: 'l',
    markerColorName: 'Verde e Azul',
    markerColorHex: '#10b981',
    words: [
      { id: 'w-el-1', word: 'flor', syllables: ['flor'], highlight: 'flor', emoji: '🌸', meaningHint: 'Tem pétalas perfumadas e coloridas' },
      { id: 'w-el-2', word: 'globo', syllables: ['glo', 'bo'], highlight: 'glo', emoji: '🌐', meaningHint: 'Representa a esfera do mundo' },
      { id: 'w-el-3', word: 'bicicleta', syllables: ['bi', 'ci', 'cle', 'ta'], highlight: 'cle', emoji: '🚲', meaningHint: 'Tem 2 rodas e pedais para passear' },
      { id: 'w-el-4', word: 'blusão', syllables: ['blu', 'são'], highlight: 'blu', emoji: '🧥', meaningHint: 'Casaco quente para vestir' },
      { id: 'w-el-5', word: 'atleta', syllables: ['a', 'tle', 'ta'], highlight: 'tle', emoji: '🏃', meaningHint: 'Pessoa que treina e corre com energia' },
      { id: 'w-el-6', word: 'planeta', syllables: ['pla', 'ne', 'ta'], highlight: 'pla', emoji: '🪐', meaningHint: 'Corpo celeste no espaço' },
      { id: 'w-el-7', word: 'flauta', syllables: ['flau', 'ta'], highlight: 'flau', emoji: '🪈', meaningHint: 'Instrumento musical de sopro' },
      { id: 'w-el-8', word: 'clube', syllables: ['clu', 'be'], highlight: 'clu', emoji: '⚽', meaningHint: 'Equipa de futebol e amigos' },
      { id: 'w-el-9', word: 'flamingo', syllables: ['fla', 'min', 'go'], highlight: 'fla', emoji: '🦩', meaningHint: 'Ave cor-de-rosa de pernas compridas' }
    ],
    detectiveChallenges: [
      {
        question: 'A planta perfumada com pétalas chama-se:',
        options: ['flor', 'for', 'frol'],
        correctIndex: 0,
        explanation: 'Muito bem! "Flor" com o encontro FL!'
      },
      {
        question: 'O veículo com duas rodas e pedais é a bi-ci-___-ta:',
        options: ['cle', 'cre', 'che'],
        correctIndex: 0,
        explanation: 'Excelente! Bici-cle-ta com CLE!'
      }
    ]
  },

  // ==================== CONSOANTES BÁSICAS ====================
  {
    id: 'cons-p',
    title: 'Consoante P',
    symbol: 'P',
    subtitle: 'pato, pai, pão, pião',
    category: 'consoantes',
    pageRef: 8,
    badgeColor: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    textColor: 'text-amber-600',
    borderColor: 'border-yellow-200',
    accentBg: 'bg-yellow-50',
    mascot: {
      name: 'Patinho Amarelo',
      animal: 'Pato',
      emoji: '🦆',
      quote: 'P de pato, pé, pão e pipoca! Junta os lábios e faz: pá!'
    },
    ruleExplanation: 'A letra P junta os dois lábios e solta o som com um estalinho: pa, pe, pi, po, pu!',
    pedagogicalTip: 'Faz a letra P maiúscula e minúscula por cima do tracejado!',
    highlightPhoneme: 'p',
    markerColorName: 'Amarelo Pato',
    markerColorHex: '#f59e0b',
    words: [
      { id: 'w-p-1', word: 'pato', syllables: ['pa', 'to'], highlight: 'pa', emoji: '🦆', meaningHint: 'Nada na lagoa e faz quá-quá' },
      { id: 'w-p-2', word: 'pão', syllables: ['pão'], highlight: 'pão', emoji: '🥖', meaningHint: 'Comemos ao pequeno-almoço' },
      { id: 'w-p-3', word: 'pé', syllables: ['pé'], highlight: 'pé', emoji: '🦶', meaningHint: 'Com ele andamos e calçamos o sapato' },
      { id: 'w-p-4', word: 'pião', syllables: ['pi', 'ão'], highlight: 'pi', emoji: '🪀', meaningHint: 'Brinquedo que gira no chão' },
      { id: 'w-p-5', word: 'pudim', syllables: ['pu', 'dim'], highlight: 'pu', emoji: '🍮', meaningHint: 'Sobremesa doce com caramelo' },
      { id: 'w-p-6', word: 'pote', syllables: ['po', 'te'], highlight: 'po', emoji: '🏺', meaningHint: 'Vaso onde se guarda mel ou água' },
      { id: 'w-p-7', word: 'pipoca', syllables: ['pi', 'po', 'ca'], highlight: 'pi', emoji: '🍿', meaningHint: 'Milho que salta na panela quente' },
      { id: 'w-p-8', word: 'porta', syllables: ['por', 'ta'], highlight: 'por', emoji: '🚪', meaningHint: 'Abre para entrar em casa' },
      { id: 'w-p-9', word: 'peixe', syllables: ['pei', 'xe'], highlight: 'pei', emoji: '🐟', meaningHint: 'Nada no mar e no rio' }
    ],
    detectiveChallenges: [
      {
        question: 'A ave aquática amarela que faz quá-quá é o ___to:',
        options: ['pa', 'ba', 'da'],
        correctIndex: 0,
        explanation: 'Muito bem! Pa-to com a letra P!'
      }
    ]
  },
  {
    id: 'cons-m',
    title: 'Consoante M',
    symbol: 'M',
    subtitle: 'macaco, mamã, mala, moeda',
    category: 'consoantes',
    pageRef: 12,
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    textColor: 'text-amber-700',
    borderColor: 'border-amber-200',
    accentBg: 'bg-amber-50',
    mascot: {
      name: 'Macaco Curioso',
      animal: 'Macaco',
      emoji: '🐒',
      quote: 'M de macaco travesso e mamã querida! Faz o som: mmm!'
    },
    ruleExplanation: 'A letra M tem 3 perninhas na escrita cursiva e faz os lábios vibrarem juntos: ma, me, mi, mo, mu!',
    pedagogicalTip: 'Sente a vibração dos lábios fechados ao dizer "mamã" e "macaco".',
    highlightPhoneme: 'm',
    markerColorName: 'Cores Quentes',
    markerColorHex: '#b45309',
    words: [
      { id: 'w-m-1', word: 'macaco', syllables: ['ma', 'ca', 'co'], highlight: 'ma', emoji: '🐒', meaningHint: 'Animal ágil que adora bananas' },
      { id: 'w-m-2', word: 'mala', syllables: ['ma', 'la'], highlight: 'ma', emoji: '🧳', meaningHint: 'Usamos para guardar roupas de viagem' },
      { id: 'w-m-3', word: 'moeda', syllables: ['mo', 'e', 'da'], highlight: 'mo', emoji: '🪙', meaningHint: 'Dinheiro redondo de metal' },
      { id: 'w-m-4', word: 'mota', syllables: ['mo', 'ta'], highlight: 'mo', emoji: '🏍️', meaningHint: 'Veículo rápido de duas rodas' },
      { id: 'w-m-5', word: 'milho', syllables: ['mi', 'lho'], highlight: 'mi', emoji: '🌽', meaningHint: 'Espiga amarela doce' },
      { id: 'w-m-6', word: 'mão', syllables: ['mão'], highlight: 'mão', emoji: '✋', meaningHint: 'Tem cinco dedos para agarrar' },
      { id: 'w-m-7', word: 'mesa', syllables: ['me', 'sa'], highlight: 'me', emoji: '🪑', meaningHint: 'Onde nos sentamos para comer' },
      { id: 'w-m-8', word: 'mel', syllables: ['mel'], highlight: 'mel', emoji: '🍯', meaningHint: 'Doce dourado feito pelas abelhas' },
      { id: 'w-m-9', word: 'morango', syllables: ['mo', 'ran', 'go'], highlight: 'mo', emoji: '🍓', meaningHint: 'Fruto vermelho e sumarento' }
    ],
    detectiveChallenges: [
      {
        question: 'O animal travesso que pula nas árvores é o ___caco:',
        options: ['ma', 'na', 'va'],
        correctIndex: 0,
        explanation: 'Excelente! Ma-ca-co começa com MA!'
      }
    ]
  },
  {
    id: 'cons-v',
    title: 'Consoante V',
    symbol: 'V',
    subtitle: 'vaca, vela, viola, vassoura',
    category: 'consoantes',
    pageRef: 13,
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    textColor: 'text-emerald-700',
    borderColor: 'border-emerald-200',
    accentBg: 'bg-emerald-50',
    mascot: {
      name: 'Vaca Mimosa',
      animal: 'Vaca',
      emoji: '🐮',
      quote: 'V de vaca malhada! Encosta os dentes de cima ao lábio de baixo: vvv!'
    },
    ruleExplanation: 'A letra V faz vibrar o lábio inferior contra os dentes superiores: va, ve, vi, vo, vu!',
    pedagogicalTip: 'Nota a diferença entre o som suave do V (vaca) e o som explosivo do B (baca)!',
    highlightPhoneme: 'v',
    markerColorName: 'Verde Pasto',
    markerColorHex: '#15803d',
    words: [
      { id: 'w-v-1', word: 'vaca', syllables: ['va', 'ca'], highlight: 'va', emoji: '🐮', meaningHint: 'Dá leite fresco e pasta no prado' },
      { id: 'w-v-2', word: 'vela', syllables: ['ve', 'la'], highlight: 've', emoji: '🕯️', meaningHint: 'Ilumina a sala com uma chama' },
      { id: 'w-v-3', word: 'viola', syllables: ['vi', 'o', 'la'], highlight: 'vi', emoji: '🪕', meaningHint: 'Instrumento de cordas tradicional' },
      { id: 'w-v-4', word: 'vassoura', syllables: ['vas', 'sou', 'ra'], highlight: 'vas', emoji: '🧹', meaningHint: 'Serve para limpar o chão' },
      { id: 'w-v-5', word: 'veado', syllables: ['ve', 'a', 'do'], highlight: 've', emoji: '🦌', meaningHint: 'Animal rápido com cornos bonitos' },
      { id: 'w-v-6', word: 'vento', syllables: ['ven', 'to'], highlight: 'ven', emoji: '💨', meaningHint: 'Ar fresco a soprar forte' },
      { id: 'w-v-7', word: 'verde', syllables: ['ver', 'de'], highlight: 'ver', emoji: '🟢', meaningHint: 'A cor das folhas das árvores' },
      { id: 'w-v-8', word: 'vulcan', syllables: ['vul', 'cão'], highlight: 'vul', emoji: '🌋', meaningHint: 'Montanha que deita fumo e lava' },
      { id: 'w-v-9', word: 'violino', syllables: ['vi', 'o', 'li', 'no'], highlight: 'vi', emoji: '🎻', meaningHint: 'Instrumento musical tocado com arco' }
    ],
    detectiveChallenges: [
      {
        question: 'O animal que nos dá leite e faz "muuu" é a ___ca:',
        options: ['va', 'ba', 'fa'],
        correctIndex: 0,
        explanation: 'Muito bem! Va-ca começa com VA!'
      }
    ]
  },
  {
    id: 'complex-az-ez-iz-oz-uz',
    title: 'AZ, EZ, IZ, OZ, UZ',
    symbol: 'az, ez, iz, oz, uz',
    subtitle: 'rapaz, dez, perdiz, avestruz, noz',
    category: 'silabas_complexas',
    pageRef: 38,
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    textColor: 'text-emerald-700',
    borderColor: 'border-emerald-200',
    accentBg: 'bg-emerald-50',
    mascot: {
      name: 'Avestruz Corredora',
      animal: 'Avestruz & Rapaz',
      emoji: '🦤',
      quote: 'A letra Z no fim da sílaba fecha com um som de assobio suave: az, ez, iz, oz, uz!'
    },
    ruleExplanation: 'No fim da palavra ou da sílaba, a letra Z soa como um sopro macio: ra-paz, dez, per-diz, ar-roz, ca-puz, a-ves-truz!',
    pedagogicalTip: 'Ouve a rima de "rapaz", "capaz" e "cartaz"!',
    highlightPhoneme: 'az/ez/iz/oz/uz',
    markerColorName: 'Verde e Rosa',
    markerColorHex: '#10b981',
    words: [
      { id: 'w-az-1', word: 'avestruz', syllables: ['a', 'ves', 'truz'], highlight: 'truz', emoji: '🦤', meaningHint: 'Ave veloz que corre muito rápido' },
      { id: 'w-az-2', word: 'rapaz', syllables: ['ra', 'paz'], highlight: 'paz', emoji: '👦', meaningHint: 'Menino alegre e brincalhão' },
      { id: 'w-az-3', word: 'dez', syllables: ['dez'], highlight: 'dez', emoji: '🔟', meaningHint: 'Número 10 (duas mãos cheias de dedos)' },
      { id: 'w-az-4', word: 'perdiz', syllables: ['per', 'diz'], highlight: 'diz', emoji: '🐦', meaningHint: 'Ave bonita do campo' },
      { id: 'w-az-5', word: 'noz', syllables: ['noz'], highlight: 'noz', emoji: '🥜', meaningHint: 'Fruto seco delicioso com casca dura' },
      { id: 'w-az-6', word: 'arroz', syllables: ['ar', 'roz'], highlight: 'roz', emoji: '🍚', meaningHint: 'Grão branco que comemos às refeições' },
      { id: 'w-az-7', word: 'luz', syllables: ['luz'], highlight: 'luz', emoji: '💡', meaningHint: 'Clareia a escuridão da noite' },
      { id: 'w-az-8', word: 'feliz', syllables: ['fe', 'liz'], highlight: 'liz', emoji: '😃', meaningHint: 'Muito alegre e com um grande sorriso' },
      { id: 'w-az-9', word: 'capuz', syllables: ['ca', 'puz'], highlight: 'puz', emoji: '🧥', meaningHint: 'Protege a cabeça da chuva e do frio' }
    ],
    detectiveChallenges: [
      {
        question: 'O número 10 escreve-se:',
        options: ['dez (com Z)', 'des (com S)', 'dec'],
        correctIndex: 0,
        explanation: 'Muito bem! "Dez" termina com a letra Z!'
      },
      {
        question: 'A comida branca que pomos no prato é o ar___:',
        options: ['roz', 'ros', 'roç'],
        correctIndex: 0,
        explanation: 'Excelente! "Arroz" termina com ROZ!'
      }
    ]
  },
  {
    id: 'complex-ans-ens-ins-ons-uns',
    title: 'ANS, ENS, INS, ONS, UNS',
    symbol: 'ans, ens, ins, ons, uns',
    subtitle: 'jovens, patins, bombons, álbuns',
    category: 'silabas_complexas',
    pageRef: 43,
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    textColor: 'text-indigo-700',
    borderColor: 'border-indigo-200',
    accentBg: 'bg-indigo-50',
    mascot: {
      name: 'Menino dos Patins',
      animal: 'Patinador & Bombons',
      emoji: '🛼',
      quote: 'Quando as palavras com M vão para o plural, o M transforma-se em NS: bombom -> bombons!'
    },
    ruleExplanation: 'No plural de palavras terminadas em M, trocamos o M por NS: jovem -> jovens, patim -> patins, bombom -> bombons, álbum -> álbuns!',
    pedagogicalTip: 'Uma regra divertida: um bombom, muitos bombons!',
    highlightPhoneme: 'ans/ens/ins/ons/uns',
    markerColorName: 'Roxo e Índigo',
    markerColorHex: '#4f46e5',
    words: [
      { id: 'w-ns-1', word: 'patins', syllables: ['pa', 'tins'], highlight: 'tins', emoji: '🛼', meaningHint: 'Calçado com rodas para deslizar rápido' },
      { id: 'w-ns-2', word: 'bombons', syllables: ['bom', 'bons'], highlight: 'bons', emoji: '🍬', meaningHint: 'Doces de chocolate para partilhar' },
      { id: 'w-ns-3', word: 'jovens', syllables: ['jo', 'vens'], highlight: 'vens', emoji: '🧑‍🤝‍🧑', meaningHint: 'Rapazes e raparigas com muita energia' },
      { id: 'w-ns-4', word: 'álbuns', syllables: ['ál', 'buns'], highlight: 'buns', emoji: '📸', meaningHint: 'Livros cheios de fotografias bonitas' },
      { id: 'w-ns-5', word: 'transporte', syllables: ['trans', 'por', 'te'], highlight: 'trans', emoji: '🚌', meaningHint: 'Autocarros, carros e comboios' },
      { id: 'w-ns-6', word: 'monstro', syllables: ['mons', 'tro'], highlight: 'mons', emoji: '👾', meaningHint: 'Personagem engraçada dos desenhos animados' },
      { id: 'w-ns-7', word: 'viagens', syllables: ['vi', 'a', 'gens'], highlight: 'gens', emoji: '✈️', meaningHint: 'Passeios a terras distantes e divertidas' },
      { id: 'w-ns-8', word: 'homens', syllables: ['ho', 'mens'], highlight: 'mens', emoji: '👨‍💼', meaningHint: 'Pessoas adultas' },
      { id: 'w-ns-9', word: 'pudins', syllables: ['pu', 'dins'], highlight: 'dins', emoji: '🍮', meaningHint: 'Várias sobremesas doces de leite' }
    ],
    detectiveChallenges: [
      {
        question: 'O plural de "patim" (mais do que um) é:',
        options: ['patins (com NS)', 'patims', 'patines'],
        correctIndex: 0,
        explanation: 'Fantástico! No plural, o M transforma-se em NS: patins!'
      },
      {
        question: 'O plural de "bombom" é:',
        options: ['bombons', 'bomboms', 'bombone'],
        correctIndex: 0,
        explanation: 'Muito bem! "Bombons" com terminação ONS!'
      }
    ]
  },
  {
    id: 'cons-d',
    title: 'Consoante D',
    symbol: 'D',
    subtitle: 'dinossauro, dado, dedo, doce',
    category: 'consoantes',
    pageRef: 11,
    badgeColor: 'bg-green-100 text-green-800 border-green-300',
    textColor: 'text-green-700',
    borderColor: 'border-green-200',
    accentBg: 'bg-green-50',
    mascot: {
      name: 'Dino Brincalhão',
      animal: 'Dinossauro',
      emoji: '🦖',
      quote: 'D de dinossauro amigável e dado da sorte: da, de, di, do, du!'
    },
    ruleExplanation: 'A língua toca atrás dos dentes da frente para soltar o som: da, de, di, do, du!',
    pedagogicalTip: 'Pratica no ar a letra D maiúscula com a sua barriguinha redonda.',
    highlightPhoneme: 'd',
    markerColorName: 'Verde Dino',
    markerColorHex: '#16a34a',
    words: [
      { id: 'w-d-1', word: 'dinossauro', syllables: ['di', 'nos', 'sau', 'ro'], highlight: 'di', emoji: '🦖', meaningHint: 'Grande réptil de outros tempos' },
      { id: 'w-d-2', word: 'dado', syllables: ['da', 'do'], highlight: 'da', emoji: '🎲', meaningHint: 'Cubo com pontinhos para jogos' },
      { id: 'w-d-3', word: 'dedo', syllables: ['de', 'do'], highlight: 'de', emoji: '👉', meaningHint: 'Temos cinco em cada mão' },
      { id: 'w-d-4', word: 'doce', syllables: ['do', 'ce'], highlight: 'do', emoji: '🍭', meaningHint: 'Guloseima saborosa' },
      { id: 'w-d-5', word: 'dente', syllables: ['den', 'te'], highlight: 'den', emoji: '🦷', meaningHint: 'Branco e forte para mastigar' },
      { id: 'w-d-6', word: 'dia', syllables: ['di', 'a'], highlight: 'di', emoji: '☀️', meaningHint: 'Quando o sol brilha no céu' },
      { id: 'w-d-7', word: 'dominó', syllables: ['do', 'mi', 'nó'], highlight: 'do', emoji: '🀄', meaningHint: 'Jogo com peças retangulares de pintar' },
      { id: 'w-d-8', word: 'duche', syllables: ['du', 'che'], highlight: 'du', emoji: '🚿', meaningHint: 'Banho de água quentinha' },
      { id: 'w-d-9', word: 'dália', syllables: ['dá', 'lia'], highlight: 'dá', emoji: '🌸', meaningHint: 'Flor bonita de muitas pétalas' }
    ],
    detectiveChallenges: [
      {
        question: 'O objeto em forma de cubo para jogar chama-se ___do:',
        options: ['da', 'ba', 'pa'],
        correctIndex: 0,
        explanation: 'Excelente! Da-do com D!'
      }
    ]
  },
  {
    id: 'cons-b',
    title: 'Consoante B',
    symbol: 'B',
    subtitle: 'borboleta, bola, bebé, baleia',
    category: 'consoantes',
    pageRef: 18,
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    textColor: 'text-sky-700',
    borderColor: 'border-sky-200',
    accentBg: 'bg-sky-50',
    mascot: {
      name: 'Borboleta Colorida',
      animal: 'Borboleta',
      emoji: '🦋',
      quote: 'B de borboleta, bola e baleia! Os lábios estalam: ba, be, bi, bo, bu!'
    },
    ruleExplanation: 'Junta os dois lábios bem fechados e abre com força para soltar: ba, be, bi, bo, bu!',
    pedagogicalTip: 'Atenção para não confundir o B (duas barrigas) com o D (uma barriga)!',
    highlightPhoneme: 'b',
    markerColorName: 'Azul Celeste',
    markerColorHex: '#0284c7',
    words: [
      { id: 'w-b-1', word: 'borboleta', syllables: ['bor', 'bo', 'le', 'ta'], highlight: 'bor', emoji: '🦋', meaningHint: 'Voa entre as flores com asas coloridas' },
      { id: 'w-b-2', word: 'bola', syllables: ['bo', 'la'], highlight: 'bo', emoji: '⚽', meaningHint: 'Redonda para chutar e jogar futebol' },
      { id: 'w-b-3', word: 'bebé', syllables: ['be', 'bé'], highlight: 'be', emoji: '👶', meaningHint: 'Criança pequenina que mama no biberão' },
      { id: 'w-b-4', word: 'baleia', syllables: ['ba', 'lei', 'a'], highlight: 'ba', emoji: '🐋', meaningHint: 'O maior mamífero dos oceanos' },
      { id: 'w-b-5', word: 'bule', syllables: ['bu', 'le'], highlight: 'bu', emoji: '🫖', meaningHint: 'Recipiente com bico para servir chá' },
      { id: 'w-b-6', word: 'barco', syllables: ['bar', 'co'], highlight: 'bar', emoji: '⛵', meaningHint: 'Navega sobre as águas do mar' },
      { id: 'w-b-7', word: 'banana', syllables: ['ba', 'na', 'na'], highlight: 'ba', emoji: '🍌', meaningHint: 'Fruta amarela adorada pelos macacos' },
      { id: 'w-b-8', word: 'bico', syllables: ['bi', 'co'], highlight: 'bi', emoji: '🦜', meaningHint: 'A boca dos passarinhos' },
      { id: 'w-b-9', word: 'batata', syllables: ['ba', 'ta', 'ta'], highlight: 'ba', emoji: '🥔', meaningHint: 'Vegetal que dá batatas fritas e puré' }
    ],
    detectiveChallenges: [
      {
        question: 'O brinquedo redondo com que jogamos futebol é a ___la:',
        options: ['bo', 'do', 'po'],
        correctIndex: 0,
        explanation: 'Muito bem! Bo-la começa com BO!'
      }
    ]
  },
  {
    id: 'cons-s',
    title: 'Consoante S',
    symbol: 'S',
    subtitle: 'sapo, sol, sapato, sino',
    category: 'consoantes',
    pageRef: 22,
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    textColor: 'text-emerald-700',
    borderColor: 'border-emerald-200',
    accentBg: 'bg-emerald-50',
    mascot: {
      name: 'Sapinho Saltarico',
      animal: 'Sapo',
      emoji: '🐸',
      quote: 'S de sapo saltador! Assobia pelos dentes: sa, se, si, so, su!'
    },
    ruleExplanation: 'No início da palavra, a letra S tem sempre o som forte e assobiado: sa, se, si, so, su!',
    pedagogicalTip: 'Faz a cobrinha do S com o dedo no ar!',
    highlightPhoneme: 's',
    markerColorName: 'Verde Sapo',
    markerColorHex: '#16a34a',
    words: [
      { id: 'w-s-1', word: 'sapo', syllables: ['sa', 'po'], highlight: 'sa', emoji: '🐸', meaningHint: 'Dá saltos grandes no charco' },
      { id: 'w-s-2', word: 'sol', syllables: ['sol'], highlight: 'sol', emoji: '☀️', meaningHint: 'Aquece a terra durante o dia' },
      { id: 'w-s-3', word: 'sapato', syllables: ['sa', 'pa', 'to'], highlight: 'sa', emoji: '👞', meaningHint: 'Calçamos nos pés para caminhar' },
      { id: 'w-s-4', word: 'sino', syllables: ['si', 'no'], highlight: 'si', emoji: '🔔', meaningHint: 'Toca na torre da igreja: dlim-dlão' },
      { id: 'w-s-5', word: 'sofá', syllables: ['so', 'fá'], highlight: 'so', emoji: '🛋️', meaningHint: 'Móvel confortável para sentar' },
      { id: 'w-s-6', word: 'sumo', syllables: ['su', 'mo'], highlight: 'su', emoji: '🧃', meaningHint: 'Bebida fresca feita de fruta' },
      { id: 'w-s-7', word: 'sete', syllables: ['se', 'te'], highlight: 'se', emoji: '7️⃣', meaningHint: 'O número 7' },
      { id: 'w-s-8', word: 'saco', syllables: ['sa', 'co'], highlight: 'sa', emoji: '🛍️', meaningHint: 'Serve para levar as compras para casa' },
      { id: 'w-s-9', word: 'salada', syllables: ['sa', 'la', 'da'], highlight: 'sa', emoji: '🥗', meaningHint: 'Prato saudável com alface e tomate' }
    ],
    detectiveChallenges: [
      {
        question: 'O anfíbio verde que salta na lagoa é o ___po:',
        options: ['sa', 'za', 'ca'],
        correctIndex: 0,
        explanation: 'Excelente! Sa-po começa com a letra S!'
      }
    ]
  }
];

