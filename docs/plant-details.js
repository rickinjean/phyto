const plantsData = [
    {
        id: 1,
        name: "Rosa",
        scientificName: "Rosa spp.",
        description: "A rosa é uma das flores mais populares e simbólicas do mundo, conhecida por sua beleza, fragrância e variedade de cores. Pertencente à família Rosaceae, esta planta perene é cultivada há milhares de anos tanto para fins ornamentais quanto medicinais.",
    image: "imagens/rosavermelha1.jpg",
    images: ["imagens/rosavermelha1.jpg", "imagens/rosavermelha1.jpg", "imagens/rosavermelha1.jpg"],
        category: "ornamental",
        size: "medio",
        light: "sol-pleno",
        water: "moderada",
        difficulty: "moderado",
        tags: ["Ornamental", "Perfumada", "Flor de Corte"],
        popularity: 95,
        details: {
            Filo: "Tracheophyta",
            Classe: "Magnoliopsida",
            Ordem: "Rosales",
            Family: "Rosaceae",
            Gênero: "Rosa",
            Espécie: "Rosa spp.",
            Fruto: "Falso fruto",
            origin: "Ásia, Europa, América do Norte",
            type: "Arbusto perene",
            propagation: "Estacas, enxertia",
            toxicity: "Não tóxica",
            height: "0.5 - 2.0m",
            flowerColor: "Variada",
            foliage: "Caduca",
            flowering: "Primavera/Verão",
            lightLevel: 90,
            waterLevel: 70,
            tempLevel: 60,
            soilLevel: 80,
            soil: "Areno-Argiloso",
            care: {
                watering: "Regue profundamente 2-3 vezes por semana, permitindo que o solo seque ligeiramente entre as regas. Evite molhar as folhas para prevenir doenças fúngicas.",
                fertilizing: "Aplique fertilizante rico em fósforo na primavera e fertilizante balanceado mensalmente durante a estação de crescimento.",
                pruning: "Pode no final do inverno, removendo galhos mortos, doentes e fracos. Corte em ângulo de 45° acima de uma gema voltada para fora.",
                pests: "Principais problemas: pulgões, ácaros, oídio e ferrugem. Mantenha boa circulação de ar e monitore regularmente."
            },
            caretips: {
                manha: "manhã cedo",
                quantidade: "2-3L por planta adulta",
                frequencia: "mensal (primavera/verão)",
                NPK: "N10-10-10 ou 5-10-5",
                epoca: "final do inverno",
                ferramentas: "tesoura de poda limpa e afiada",
                prevenção: "fungicida preventivo na primavera",
                monitoramento: "semanal"
            },
            cultivation:{
                plantio: "Plante em solo bem drenado, rico em matéria orgânica, com pH entre 6.0 e 7.0. Escolha um local com pelo menos 6 horas de sol direto por dia.",
                exposição: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "primavera",
                espaçamento: "30-60cm entre plantas",
                luz: "Mínimo de 6 horas de sol direto.",
                proteção: "cobertura morta para conservar umidade",
                ideal: "15-25°C",
                tolerancia: "não tolera geadas severas",
            },
            uses: [
                { name: "Ornamental", icon: "fas fa-palette", text: "Amplamente utilizada em jardins, canteiros e vasos devido à beleza de suas flores e fragrância." },
                { name: "Medicinal", icon: "fas fa-mortar-pestle", text: "Pétalas de rosa são usadas em chás e óleos essenciais com propriedades calmantes e anti-inflamatórias." },
                { name: "Cosmético", icon: "fas fa-flask", text: "O óleo essencial de rosa e a água de rosas são ingredientes populares em produtos de beleza." }
            ],
            recipes: [
                { name: "Chá de Rosas", description: "Uma infusão suave e aromática, perfeita para relaxar.", ingredients: "1 xícara de pétalas de rosa frescas <br> 2 xícaras de água <br> Mel a gosto", instructions: " Lave bem as pétalas. <br> Coloque-as em uma xícara e adicione a água fervente. <br> Deixe em infusão por 5-10 minutos. <br> Coe, adoce com mel se desejar e sirva quente." },
                { name: "Geleia de Rosas", description: "Uma geleia delicada e perfumada, ideal para torradas ou acompanhamento de queijos.", ingredients: "1 xícara de pétalas de rosa frescas <br> 2 xícaras de água <br> Mel a gosto", instructions: "Lave as pétalas. <br> Em uma panela, misture açúcar e água, leve ao fogo até dissolver o açúcar. <br> Adicione as pétalas e o suco de limão. <br> Cozinhe em fogo baixo por 20-30 minutos, mexendo ocasionalmente, até a geleia atingir a consistência desejada. <br> Despeje em potes esterilizados." }
            ],
            reviews: [
                { user: "Ana Paula", rating: 5, text: "Minhas rosas estão lindas e saudáveis seguindo as dicas de cultivo do site! Recomendo." },
                { user: "Carlos Eduardo", rating: 4, text: "Sempre tive dificuldade com rosas, mas com este guia, consegui fazer as minhas florescerem como nunca!" }
            ]
        }
    },
    {
        id: 2,
        name: "Girassol",
        scientificName: "Helianthus annuus",
        description: "Planta que segue o movimento do sol (heliotropismo), conhecida por suas sementes nutritivas e sua flor imponente e amarela.",
    image: "imagens/girassol1.webp",
    images: ["imagens/girassol1.webp", "imagens/girassol1.webp","imagens/girassol1.webp"],
        category: "alimenticia",
        size: "grande",
        light: "sol-pleno",
        water: "moderada",
        difficulty: "facil",
        tags: ["Alimentícia", "Ornamental", "Atrai abelhas"],
        popularity: 88,
        details: {
            Filo: "Tracheophyta",
            Classe: "Magnoliopsida",
            Ordem: "Asterales",
            Family: "Asteraceae",
            Gênero: "Helianthus",
            Espécie: "Helianthus annuus",
            Fruto: "Fruto seco",
            origin: "América do Norte",
            type: "Planta anual",
            propagation: "Sementes",
            toxicity: "Não tóxica",
            height: "1.5 - 3.5m",
            flowerColor: "Amarelo",
            foliage: "Anual",
            flowering: "Verão",
            lightLevel: 100,
            waterLevel: 60,
            tempLevel: 75,
            soilLevel: 70,
            care: {
                watering: "",
                fertilizing: "Prefere solos ricos. Um fertilizante balanceado pode ser aplicado no início do crescimento.",
                pruning: "Não necessita de poda. Remova as folhas secas ou amareladas para manter a aparência.",
                pests: "Pode ser atacado por pássaros (sementes), lesmas e caracóis quando jovem."
            },
            caretips: {
                manha: "Melhor horário: manhã cedo",
                quantidade: "Quantidade: 2-3L por planta adulta",
                frequencia: "Frequência: mensal (primavera/verão)",
                NPK: "NPK recomendado: 10-10-10 ou 5-10-5",
                epoca: "Época: final do inverno",
                ferramentas: "Ferramentas: tesoura de poda limpa e afiada",
                prevenção: "Prevenção: fungicida preventivo na primavera",
                monitoramento: "Monitoramento: semanal"
            },
            cultivation:{
                plantio: "Cultivado a partir de sementes diretamente no solo ou a partir de mudas. Prefere solo bem drenado, fértil e sol pleno.",
                exposição: "Para flores grandes e saudáveis, deve receber pelo menos 6 a 8 horas de luz direta diariamente. Evitar locais sombreados e proteger do vento forte ajuda no crescimento do caule e das flores.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "Primavera e início do verão.",
                espaçamento: "30-50 cm entre plantas, 60-90 cm entre fileiras.",
                luz: "6-8 horas de luz solar direta por dia.",
                proteção: "Proteção: cobertura morta para conservar umidade",
                ideal: "15-25°C",
                tolerancia: "Tolerância: não tolera geadas severas",
            },
            uses: [
                { name: "Alimentício", icon: "fas fa-utensils", text: "Suas sementes são consumidas torradas ou usadas para extração de óleo comestível." },
                { name: "Ornamental", icon: "fas fa-palette", text: "Muito usado em jardins e como flor de corte para arranjos." },
                { name: "Apicultura", icon: "fas fa-bee", text: "Suas flores grandes atraem abelhas, sendo importante para a produção de mel." }
            ],
            reviews: [
                { user: "Mariana B.", rating: 5, text: "Plantei no meu jardim e foi um sucesso! As crianças adoraram ver a flor seguindo o sol." }
            ]
        }
    },
    {
        id: 3,
        name: "Lavanda",
        scientificName: "Lavandula angustifolia",
        description: "Planta aromática conhecida por suas propriedades relaxantes e medicinais.",
    image: "imagens/lavanda1.webp",
    images: ["imagens/lavanda1.webp", "imagens/lavanda1.webp","imagens/lavanda1.webp"],
        category: "medicinal",
        size: "pequeno",
        light: "sol-pleno",
        water: "baixa",
        difficulty: "facil",
        tags: ["Medicinal", "Aromática", "Relaxante"],
        popularity: 92,
        details: {
            Filo: "Magnoliophyta",
            Classe: "Magnoliopsida",
            Ordem: "Lamiales",
            Family: "Lamiaceae",
            Gênero: "Lavandula",
            Espécie: "Lavandula angustifolia",
            Fruto: "Sim, esquizocarpo",
            origin: "Região do Mediterrâneo",
            type: "Subarbusto perene",
            propagation: "Estacas, sementes",
            toxicity: "Não tóxica",
            height: "0.3 - 0.6m",
            flowerColor: "Roxo",
            foliage: "Perene",
            flowering: "Verão",
            lightLevel: 95,
            waterLevel: 40,
            tempLevel: 70,
            soilLevel: 85,
            care: {
                watering: "Regue moderadamente, permitindo que o solo seque completamente entre as regas. É tolerante à seca.",
                fertilizing: "Não exige muita fertilização. Um composto orgânico leve na primavera é suficiente.",
                pruning: "Pode após a floração para manter a forma e estimular novos crescimentos. Remova flores murchas.",
                pests: "Geralmente resistente a pragas, mas pode ser afetada por pulgões em condições de estresse." 
            },
            caretips: {
                manha: "Melhor horário: manhã cedo",
                quantidade: "Quantidade: 2-3L por planta adulta",
                frequencia: "Frequência: mensal (primavera/verão)",
                NPK: "NPK recomendado: 10-10-10 ou 5-10-5",
                epoca: "Época: final do inverno",
                ferramentas: "Ferramentas: tesoura de poda limpa e afiada",
                prevenção: "Prevenção: fungicida preventivo na primavera",
                monitoramento: "Monitoramento: semanal"
            },
            cultivation:{
                plantio: "Plante em solo bem drenado, rico em matéria orgânica, com pH entre 6.0 e 7.0. Escolha um local com pelo menos 6 horas de sol direto por dia.",
                exposição: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "Melhor época: primavera",
                espaçamento: "Espaçamento: 30-60cm entre plantas",
                luz: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                proteção: "Proteção: cobertura morta para conservar umidade",
                ideal: "Temperatura ideal: 15-25°C",
                tolerancia: "Tolerância: não tolera geadas severas",
            },
            uses: [
                { name: "Medicinal", icon: "fas fa-mortar-pestle", text: "Usada em chás e óleos essenciais para aliviar estresse, ansiedade e insônia." },
                { name: "Aromática", icon: "fas fa-flask", text: "Sua fragrância é popular em sabonetes, perfumes e produtos de limpeza." },
                { name: "Ornamental", icon: "fas fa-palette", text: "Ideal para jardins de pedras, bordas e vasos, atraindo abelhas e borboletas." }
            ],
            reviews: [
                { user: "João P.", rating: 5, text: "O cheiro da lavanda é incrível! Perfeita para relaxar." }
            ]
        }
    },
    {
        id: 4,
        name: "Orquídea",
        scientificName: "Orchidaceae",
        description: "Família de plantas com flores exóticas e elegantes, muito apreciadas na decoração.",
    image: "imagens/orquideaazul1.webp",
    images: ["imagens/orquideaazul1.webp", "imagens/orquideaazul1.webp","imagens/orquideaazul1.webp"],
        category: "ornamental",
        size: "pequeno",
        light: "meia-sombra",
        water: "moderada",
        difficulty: "dificil",
        tags: ["Ornamental", "Exótica", "Flor de Vaso"],
        popularity: 85,
        details: {
            Filo: "Magnoliophyta",
            Classe: "Liliopsida",
            Ordem: "Asparagales",
            Family: "Orchidaceae",
            Gênero: "Phalaenopsis spp.",
            Espécie: "Phalaenopsis amabilis",
            Fruto: "Fruto verdadeiro",
            origin: "Tropical e Subtropical",
            type: "Epífita/Terrestre",
            propagation: "Divisão de touceiras, keikis",
            toxicity: "Não tóxica",
            height: "0.1 - 1.0m",
            flowerColor: "Variada",
            foliage: "Perene",
            flowering: "Variável",
            lightLevel: 60,
            waterLevel: 70,
            tempLevel: 80,
            soilLevel: 50,
            care: {
                watering: "Regue quando o substrato estiver seco, geralmente 1-2 vezes por semana. Evite encharcar as raízes.",
                fertilizing: "Use fertilizante específico para orquídeas, diluído, a cada 15 dias durante o crescimento ativo.",
                pruning: "Remova hastes florais secas e folhas amareladas. Não corte raízes aéreas saudáveis.",
                pests: "Cochonilhas e pulgões são comuns. Mantenha boa ventilação e umidade adequada." 
            },
            caretips: {
                manha: "Melhor horário: manhã cedo",
                quantidade: "Quantidade: 2-3L por planta adulta",
                frequencia: "Frequência: mensal (primavera/verão)",
                NPK: "NPK recomendado: 10-10-10 ou 5-10-5",
                epoca: "Época: final do inverno",
                ferramentas: "Ferramentas: tesoura de poda limpa e afiada",
                prevenção: "Prevenção: fungicida preventivo na primavera",
                monitoramento: "Monitoramento: semanal"
            },
            cultivation:{
                plantio: "Plante em solo bem drenado, rico em matéria orgânica, com pH entre 6.0 e 7.0. Escolha um local com pelo menos 6 horas de sol direto por dia.",
                exposição: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "Melhor época: primavera",
                espaçamento: "Espaçamento: 30-60cm entre plantas",
                luz: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                proteção: "Proteção: cobertura morta para conservar umidade",
                ideal: "Temperatura ideal: 15-25°C",
                tolerancia: "Tolerância: não tolera geadas severas",
            },
            uses: [
                { name: "Ornamental", icon: "fas fa-palette", text: "Muito valorizada como planta de interior e para arranjos florais devido à sua beleza única." }
            ],
            reviews: [
                { user: "Fernanda S.", rating: 4, text: "Minha orquídea está linda, mas exige bastante atenção!" }
            ]
        }
    },
    {
        id: 5,
        name: "Ipê Amarelo",
        scientificName: "Handroanthus albus",
        description: "Árvore brasileira que floresce no inverno, símbolo da chegada da primavera.",
    image: "imagens/ipeamarelo1.webp",
    images: ["imagens/ipeamarelo1.webp", "imagens/ipeamarelo1.webp","imagens/ipeamarelo1.webp"],
        category: "nativa",
        size: "grande",
        light: "sol-pleno",
        water: "moderada",
        difficulty: "moderado",
        tags: ["Nativa", "Ornamental", "Árvore"],
        popularity: 78,
        details: {
            Filo: "Tracheophyta",
            Classe: "Magnoliopsida",
            Ordem: "Lamiales",
            Family: "Bignoniaceae",
            Gênero: "Handroanthus",
            Espécie: "Handroanthus albus",
            Fruto: "Fruto verdadeiro",         
            origin: "Brasil",
            type: "Árvore caducifólia",
            propagation: "Sementes",
            toxicity: "Não tóxica",
            height: "6 - 15m",
            flowerColor: "Amarelo",
            foliage: "Caduca",
            flowering: "Inverno/Primavera",
            lightLevel: 100,
            waterLevel: 60,
            tempLevel: 70,
            soilLevel: 80,
            care: {
                watering: "Regas regulares nos primeiros anos após o plantio. Após estabelecida, tolera períodos de seca.",
                fertilizing: "Adubação anual com composto orgânico para estimular o crescimento e floração.",
                pruning: "Poda de formação nos primeiros anos e remoção de galhos secos ou doentes.",
                pests: "Geralmente resistente, mas pode ser atacado por pulgões e cochonilhas em casos isolados." 
            },
            caretips: {
                manha: "Melhor horário: manhã cedo",
                quantidade: "Quantidade: 2-3L por planta adulta",
                frequencia: "Frequência: mensal (primavera/verão)",
                NPK: "NPK recomendado: 10-10-10 ou 5-10-5",
                epoca: "Época: final do inverno",
                ferramentas: "Ferramentas: tesoura de poda limpa e afiada",
                prevenção: "Prevenção: fungicida preventivo na primavera",
                monitoramento: "Monitoramento: semanal"
            },
            cultivation:{
                plantio: "Plante em solo bem drenado, rico em matéria orgânica, com pH entre 6.0 e 7.0. Escolha um local com pelo menos 6 horas de sol direto por dia.",
                exposição: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "Melhor época: primavera",
                espaçamento: "Espaçamento: 30-60cm entre plantas",
                luz: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                proteção: "Proteção: cobertura morta para conservar umidade",
                ideal: "Temperatura ideal: 15-25°C",
                tolerancia: "Tolerância: não tolera geadas severas",
            },
            uses: [
                { name: "Paisagismo", icon: "fas fa-tree", text: "Muito utilizada em arborização urbana e paisagismo devido à sua espetacular floração." },
                { name: "Madeira", icon: "fas fa-hammer", text: "Sua madeira é de alta qualidade, usada em construções e móveis." }
            ],
            reviews: [
                { user: "Pedro R.", rating: 5, text: "O ipê amarelo é a coisa mais linda que existe!" }
            ]
        }
    },
    {
        id: 6,
        name: "Manjericão",
        scientificName: "Ocimum basilicum",
        description: "Erva aromática amplamente utilizada na culinária e medicina tradicional.",
    image: "imagens/manjericao1.webp",
    images: ["imagens/manjericao1.webp", "imagens/manjericao1.webp","imagens/manjericao1.webp"],
        category: "aromatica",
        size: "pequeno",
        light: "sol-pleno",
        water: "moderada",
        difficulty: "facil",
        tags: ["Aromática", "Culinária", "Horta"],
        popularity: 90,
        details: {
            Filo: "Tracheophyta",
            Classe: "Magnoliopsida",
            Ordem: "Lamiales",
            Family: "Lamiaceae",
            Gênero: "Ocimum",
            Espécie: "Ocimum basilicum",
            Fruto: "Fruto verdadeiro",
            origin: "Ásia e África",
            type: "Erva anual",
            propagation: "Sementes, estacas",
            toxicity: "Não tóxica",
            height: "0.3 - 0.6m",
            flowerColor: "Branco/Roxo",
            foliage: "Anual",
            flowering: "Verão",
            lightLevel: 90,
            waterLevel: 70,
            tempLevel: 75,
            soilLevel: 80,
            care: {
                watering: "Mantenha o solo sempre úmido, mas evite encharcar. Regue pela manhã.",
                fertilizing: "Adubação leve a cada 2-3 meses com composto orgânico.",
                pruning: "Pode as pontas regularmente para estimular o crescimento e evitar a floração precoce.",
                pests: "Pulgões e lesmas podem atacar. Use defensivos naturais se necessário." 
            },
            caretips: {
                manha: "Melhor horário: manhã cedo",
                quantidade: "Quantidade: 2-3L por planta adulta",
                frequencia: "Frequência: mensal (primavera/verão)",
                NPK: "NPK recomendado: 10-10-10 ou 5-10-5",
                epoca: "Época: final do inverno",
                ferramentas: "Ferramentas: tesoura de poda limpa e afiada",
                prevenção: "Prevenção: fungicida preventivo na primavera",
                monitoramento: "Monitoramento: semanal"
            },
            cultivation:{
                plantio: "Plante em solo bem drenado, rico em matéria orgânica, com pH entre 6.0 e 7.0. Escolha um local com pelo menos 6 horas de sol direto por dia.",
                exposição: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "Melhor época: primavera",
                espaçamento: "Espaçamento: 30-60cm entre plantas",
                luz: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                proteção: "Proteção: cobertura morta para conservar umidade",
                ideal: "Temperatura ideal: 15-25°C",
                tolerancia: "Tolerância: não tolera geadas severas",
            },
            uses: [
                { name: "Culinário", icon: "fas fa-utensils", text: "Ingrediente essencial em molhos, saladas, pizzas e pratos italianos." },
                { name: "Medicinal", icon: "fas fa-mortar-pestle", text: "Usado para aliviar problemas digestivos e como anti-inflamatório." }
            ],
            reviews: [
                { user: "Julia M.", rating: 5, text: "Não vivo sem manjericão fresco na minha cozinha!" }
            ]
        }
    },
    {
        id: 7,
        name: "Samambaia",
        scientificName: "Nephrolepis exaltata",
        description: "Planta ornamental ideal para ambientes internos e sombreados.",
    image: "imagens/samambaia1.webp",
    images: ["imagens/samambaia1.webp", "imagens/samambaia1.webp","imagens/samambaia1.webp"],
        category: "ornamental",
        size: "medio",
        light: "sombra",
        water: "alta",
        difficulty: "moderado",
        tags: ["Ornamental", "Interior", "Sombra"],
        popularity: 82,
        details: {
            Filo: "Tracheophyta",
            Classe: "Polypodiopsida",
            Ordem: "Polypodiales",
            Family: "Polypodiaceae",
            Gênero: "Phlebodium",
            Espécie: "Pteridium aquilinum",
            Fruto: "Não possuem frutos",
            origin: "Regiões tropicais",
            type: "Planta herbácea perene",
            propagation: "Divisão de rizomas, esporos",
            toxicity: "Não tóxica",
            height: "0.5 - 1.5m",
            flowerColor: "Não possui",
            foliage: "Perene",
            flowering: "Não possui",
            lightLevel: 30,
            waterLevel: 90,
            tempLevel: 70,
            soilLevel: 75,
            care: {
                watering: "Mantenha o solo constantemente úmido, mas não encharcado. Borrife água nas folhas regularmente.",
                fertilizing: "Adube a cada 2-3 meses com fertilizante líquido diluído durante a primavera e verão.",
                pruning: "Remova folhas secas ou danificadas para manter a planta saudável e bonita.",
                pests: "Cochonilhas e ácaros podem ser um problema. Aumente a umidade para prevenir." 
            },
            caretips: {
                manha: "Melhor horário: manhã cedo",
                quantidade: "Quantidade: 2-3L por planta adulta",
                frequencia: "Frequência: mensal (primavera/verão)",
                NPK: "NPK recomendado: 10-10-10 ou 5-10-5",
                epoca: "Época: final do inverno",
                ferramentas: "Ferramentas: tesoura de poda limpa e afiada",
                prevenção: "Prevenção: fungicida preventivo na primavera",
                monitoramento: "Monitoramento: semanal"
            },
            cultivation:{
                plantio: "Plante em solo bem drenado, rico em matéria orgânica, com pH entre 6.0 e 7.0. Escolha um local com pelo menos 6 horas de sol direto por dia.",
                exposição: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "Melhor época: primavera",
                espaçamento: "Espaçamento: 30-60cm entre plantas",
                luz: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                proteção: "Proteção: cobertura morta para conservar umidade",
                ideal: "Temperatura ideal: 15-25°C",
                tolerancia: "Tolerância: não tolera geadas severas",
            },
            uses: [
                { name: "Ornamental", icon: "fas fa-palette", text: "Excelente para decoração de interiores, especialmente em vasos suspensos." },
                { name: "Purificadora de Ar", icon: "fas fa-wind", text: "Ajuda a remover toxinas do ar, melhorando a qualidade do ambiente." }
            ],
            reviews: [
                { user: "Roberto A.", rating: 4, text: "Minha samambaia está crescendo muito bem com essas dicas!" }
            ]
        }
    },
    {
        id: 8,
        name: "Aloe Vera",
        scientificName: "Aloe barbadensis",
        description: "Planta suculenta conhecida por suas propriedades medicinais e cosméticas.",
    image: "imagens/aloevera2.webp",
    images: ["imagens/aloevera2.webp", "imagens/aloevera2.webp","imagens/aloevera2.webp"],
        category: "medicinal",
        size: "pequeno",
        light: "sol-pleno",
        water: "baixa",
        difficulty: "facil",
        tags: ["Medicinal", "Suculenta", "Cosmética"],
        popularity: 87,
        details: {
            Filo: "Tracheophyta",
            Classe: "Liliopsida",
            Ordem: "Asparagales",
            Family: "Asphodelaceae",
            Gênero: "Aloe",
            Espécie: "Aloe vera",
            Fruto: "Fruto verdadeiro",
            origin: "Península Arábica",
            type: "Suculenta perene",
            propagation: "Brotações laterais (filhotes)",
            toxicity: "Não tóxica (uso externo)",
            height: "0.3 - 0.6m",
            flowerColor: "Amarelo/Laranja",
            foliage: "Perene",
            flowering: "Primavera",
            lightLevel: 90,
            waterLevel: 30,
            tempLevel: 80,
            soilLevel: 90,
            care: {
                watering: "Regue apenas quando o solo estiver completamente seco. É muito sensível ao excesso de água.",
                fertilizing: "Não necessita de muita adubação. Um fertilizante balanceado diluído na primavera é suficiente.",
                pruning: "Remova folhas secas ou danificadas na base. Colha as folhas externas quando necessário.",
                pests: "Geralmente livre de pragas, mas pode ter cochonilhas em ambientes úmidos." 
            },
            caretips: {
                manha: "Melhor horário: manhã cedo",
                quantidade: "Quantidade: 2-3L por planta adulta",
                frequencia: "Frequência: mensal (primavera/verão)",
                NPK: "NPK recomendado: 10-10-10 ou 5-10-5",
                epoca: "Época: final do inverno",
                ferramentas: "Ferramentas: tesoura de poda limpa e afiada",
                prevenção: "Prevenção: fungicida preventivo na primavera",
                monitoramento: "Monitoramento: semanal"
            },
            cultivation:{
                plantio: "Plante em solo bem drenado, rico em matéria orgânica, com pH entre 6.0 e 7.0. Escolha um local com pelo menos 6 horas de sol direto por dia.",
                exposição: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "Melhor época: primavera",
                espaçamento: "Espaçamento: 30-60cm entre plantas",
                luz: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                proteção: "Proteção: cobertura morta para conservar umidade",
                ideal: "Temperatura ideal: 15-25°C",
                tolerancia: "Tolerância: não tolera geadas severas",
            },
            uses: [
                { name: "Medicinal", icon: "fas fa-mortar-pestle", text: "O gel das folhas é usado para tratar queimaduras, feridas e irritações na pele." },
                { name: "Cosmético", icon: "fas fa-flask", text: "Ingrediente comum em produtos para cabelo, pele e protetores solares." }
            ],
            reviews: [
                { user: "Carla P.", rating: 5, text: "Tenho uma em casa e uso para tudo! Ótima para queimaduras." }
            ]
        }
    },
    {
        id: 9,
        name: "Cacto",
        scientificName: "Cactaceae",
        description: "Planta suculenta adaptada a ambientes secos, com espinhos e formas variadas.",
    image: "imagens/cacto1.webp",
    images: ["imagens/cacto1.webp", "imagens/cacto1.webp"],
        category: "ornamental",
        size: "pequeno",
        light: "sol-pleno",
        water: "baixa",
        difficulty: "facil",
        tags: ["Suculenta", "Exótica", "Deserto"],
        popularity: 80,
        details: {
            Filo: "Tracheophyta",
            Classe: "Magnoliopsida",
            Ordem: "Caryophyllales",
            Family: "Cactaceae",
            Gênero: "Cereus",
            Espécie: "cacto-mandacaru",
            Fruto: "Fruto verdadeiro",
            origin: "Américas",
            type: "Suculenta perene",
            propagation: "Estacas, sementes",
            toxicity: "Não tóxica",
            height: "0.1 - 10m (variável)",
            flowerColor: "Variada",
            foliage: "Não possui (espinhos)",
            flowering: "Variável",
            lightLevel: 100,
            waterLevel: 20,
            tempLevel: 90,
            soilLevel: 95,
            care: {
                watering: "Regue muito pouco, apenas quando o solo estiver completamente seco por vários dias. Evite regar no inverno.",
                fertilizing: "Fertilize com um produto específico para cactos e suculentas, diluído, na primavera e verão.",
                pruning: "Remova partes secas ou danificadas com cuidado. Use luvas grossas.",
                pests: "Cochonilhas e ácaros podem aparecer. Mantenha boa ventilação." 
            },
            caretips: {
                manha: "Melhor horário: manhã cedo",
                quantidade: "Quantidade: 2-3L por planta adulta",
                frequencia: "Frequência: mensal (primavera/verão)",
                NPK: "NPK recomendado: 10-10-10 ou 5-10-5",
                epoca: "Época: final do inverno",
                ferramentas: "Ferramentas: tesoura de poda limpa e afiada",
                prevenção: "Prevenção: fungicida preventivo na primavera",
                monitoramento: "Monitoramento: semanal"
            },
            cultivation:{
                plantio: "Plante em solo bem drenado, rico em matéria orgânica, com pH entre 6.0 e 7.0. Escolha um local com pelo menos 6 horas de sol direto por dia.",
                exposição: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "Melhor época: primavera",
                espaçamento: "Espaçamento: 30-60cm entre plantas",
                luz: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                proteção: "Proteção: cobertura morta para conservar umidade",
                ideal: "Temperatura ideal: 15-25°C",
                tolerancia: "Tolerância: não tolera geadas severas",
            },
            uses: [
                { name: "Ornamental", icon: "fas fa-palette", text: "Popular em jardins de pedras, vasos e como elemento decorativo de baixa manutenção." },
                { name: "Alimentício", icon: "fas fa-utensils", text: "Algumas espécies produzem frutos comestíveis (ex: figo da índia)." }
            ],
            reviews: [
                { user: "Lucas G.", rating: 5, text: "Meus cactos são lindos e não dão trabalho nenhum!" }
            ]
        }
    },
    {
        id: 10,
        name: "Hortelã",
        scientificName: "Mentha spicata",
        description: "Erva aromática refrescante, usada em chás, bebidas e pratos culinários.",
    image: "imagens/hortela1.webp",
    images: ["imagens/hortela1.webp", "imagens/hortela1.webp","imagens/hortela1.webp"],
        category: "aromatica",
        size: "pequeno",
        light: "meia-sombra",
        water: "alta",
        difficulty: "facil",
        tags: ["Aromática", "Culinária", "Medicinal", "Horta"],
        popularity: 89,
        details: {
            Filo: "Tracheophyta",
            Classe: "Magnoliopsida",
            Ordem: "Lamiales",
            Family: "Lamiaceae",
            Gênero: "Mentha",
            Espécie: "Hortelã-pimenta",
            Fruto: "Fruto verdadeiro",
            origin: "Europa e Ásia",
            type: "Erva perene",
            propagation: "Estacas, divisão de rizomas",
            toxicity: "Não tóxica",
            height: "0.3 - 0.9m",
            flowerColor: "Roxo/Branco",
            foliage: "Perene",
            flowering: "Verão",
            lightLevel: 60,
            waterLevel: 80,
            tempLevel: 70,
            soilLevel: 70,
            care: {
                watering: "Mantenha o solo constantemente úmido. Regue diariamente em climas quentes.",
                fertilizing: "Adubação leve com composto orgânico a cada 2-3 meses.",
                pruning: "Pode regularmente para controlar o crescimento e estimular a produção de folhas.",
                pests: "Pulgões e ácaros podem ser um problema. Mantenha a planta vigorosa." 
            },
            caretips: {
                manha: "Melhor horário: manhã cedo",
                quantidade: "Quantidade: 2-3L por planta adulta",
                frequencia: "Frequência: mensal (primavera/verão)",
                NPK: "NPK recomendado: 10-10-10 ou 5-10-5",
                epoca: "Época: final do inverno",
                ferramentas: "Ferramentas: tesoura de poda limpa e afiada",
                prevenção: "Prevenção: fungicida preventivo na primavera",
                monitoramento: "Monitoramento: semanal"
            },
            cultivation:{
                plantio: "Plante em solo bem drenado, rico em matéria orgânica, com pH entre 6.0 e 7.0. Escolha um local com pelo menos 6 horas de sol direto por dia.",
                exposição: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "Melhor época: primavera",
                espaçamento: "Espaçamento: 30-60cm entre plantas",
                luz: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                proteção: "Proteção: cobertura morta para conservar umidade",
                ideal: "Temperatura ideal: 15-25°C",
                tolerancia: "Tolerância: não tolera geadas severas",
            },
            uses: [
                { name: "Culinário", icon: "fas fa-utensils", text: "Usada em chás, sucos, sobremesas, molhos e para temperar carnes." },
                { name: "Medicinal", icon: "fas fa-mortar-pestle", text: "Ajuda na digestão, alivia náuseas e tem propriedades antissépticas." }
            ],
            reviews: [
                { user: "Beatriz F.", rating: 5, text: "Minha hortelã cresce super rápido e é perfeita para chás!" }
            ]
        }
    },
    {
        id: 11,
        name: "Tomate Cereja",
        scientificName: "Solanum lycopersicum var. cerasiforme",
        description: "Pequeno fruto saboroso, ideal para cultivo em vasos e usado em saladas e molhos.",
    image: "imagens/tomatecereja1.webp",
    images: ["imagens/tomatecereja1.webp", "imagens/tomatecereja1.webp","imagens/tomatecereja1.webp"],
        category: "alimenticia",
        size: "medio",
        light: "sol-pleno",
        water: "moderada",
        difficulty: "moderado",
        tags: ["Alimentícia", "Horta", "Frutífera"],
        popularity: 86,
        details: {
            Filo: "Tracheophyta",
            Classe: "Magnoliopsida",
            Ordem: "Solanales",
            Family: "Solanaceae",
            Gênero: "Solanum",
            Espécie: "Solanum lycopersicum",
            Fruto: "Fruto verdadeiro",
            origin: "América do Sul",
            type: "Planta anual",
            propagation: "Sementes",
            toxicity: "Não tóxica (fruto)",
            height: "0.5 - 1.5m",
            flowerColor: "Amarelo",
            foliage: "Anual",
            flowering: "Primavera/Verão",
            lightLevel: 90,
            waterLevel: 70,
            tempLevel: 80,
            soilLevel: 80,
            care: {
                watering: "Mantenha o solo uniformemente úmido. Regue na base da planta para evitar doenças foliares.",
                fertilizing: "Adube a cada 2 semanas com fertilizante rico em potássio após o início da floração.",
                pruning: "Remova brotos laterais (ladrões) para direcionar a energia para os frutos. Estaqueie a planta.",
                pests: "Pulgões, mosca branca e ácaros são comuns. Monitore e use controle biológico." 
            },
            caretips: {
                manha: "Melhor horário: manhã cedo",
                quantidade: "Quantidade: 2-3L por planta adulta",
                frequencia: "Frequência: mensal (primavera/verão)",
                NPK: "NPK recomendado: 10-10-10 ou 5-10-5",
                epoca: "Época: final do inverno",
                ferramentas: "Ferramentas: tesoura de poda limpa e afiada",
                prevenção: "Prevenção: fungicida preventivo na primavera",
                monitoramento: "Monitoramento: semanal"
            },
            cultivation:{
                plantio: "Plante em solo bem drenado, rico em matéria orgânica, com pH entre 6.0 e 7.0. Escolha um local com pelo menos 6 horas de sol direto por dia.",
                exposição: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "Melhor época: primavera",
                espaçamento: "Espaçamento: 30-60cm entre plantas",
                luz: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                proteção: "Proteção: cobertura morta para conservar umidade",
                ideal: "Temperatura ideal: 15-25°C",
                tolerancia: "Tolerância: não tolera geadas severas",
            },
            uses: [
                { name: "Culinário", icon: "fas fa-utensils", text: "Ideal para saladas, molhos, aperitivos e como lanche saudável." }
            ],
            reviews: [
                { user: "Felipe D.", rating: 4, text: "Meus tomates cereja estão deliciosos! Demorou um pouco, mas valeu a pena." }
            ]
        }
    },
    {
        id: 12,
        name: "Jiboia",
        scientificName: "Epipremnum aureum",
        description: "Planta trepadeira muito resistente, ideal para iniciantes e ambientes internos.",
    image: "imagens/jiboia1.jpg",
    images: ["imagens/jiboia1.jpg", "imagens/jiboia1.jpg","imagens/jiboia1.jpg"],
        category: "ornamental",
        size: "medio",
        light: "meia-sombra",
        water: "moderada",
        difficulty: "facil",
        tags: ["Interior", "Purificadora", "Trepadeira"],
        popularity: 93,
        details: {
            Filo: "Tracheophyta",
            Classe: "Liliopsida",
            Ordem: "Alismatales",
            Family: "Araceae",
            Gênero: "Epipremnum",
            Espécie: "Epipremnum aureum",
            Fruto: "Fruto verdadeiro",
            origin: "Ilhas Salomão",
            type: "Trepadeira perene",
            propagation: "Estacas",
            toxicity: "Tóxica (se ingerida)",
            height: "1 - 2m (em vasos)",
            flowerColor: "Não possui (raro)",
            foliage: "Perene",
            flowering: "Não possui (raro)",
            lightLevel: 50,
            waterLevel: 60,
            tempLevel: 70,
            soilLevel: 70,
            care: {
                watering: "Regue quando o solo estiver seco na superfície. Tolera curtos períodos de seca.",
                fertilizing: "Adube a cada 2-4 semanas na primavera e verão com fertilizante líquido diluído.",
                pruning: "Pode para controlar o tamanho e estimular o adensamento. Remova folhas amareladas.",
                pests: "Cochonilhas e ácaros podem ocorrer. Limpe as folhas regularmente." 
            },
            caretips: {
                manha: "Melhor horário: manhã cedo",
                quantidade: "Quantidade: 2-3L por planta adulta",
                frequencia: "Frequência: mensal (primavera/verão)",
                NPK: "NPK recomendado: 10-10-10 ou 5-10-5",
                epoca: "Época: final do inverno",
                ferramentas: "Ferramentas: tesoura de poda limpa e afiada",
                prevenção: "Prevenção: fungicida preventivo na primavera",
                monitoramento: "Monitoramento: semanal"
            },
            cultivation:{
                plantio: "Plante em solo bem drenado, rico em matéria orgânica, com pH entre 6.0 e 7.0. Escolha um local com pelo menos 6 horas de sol direto por dia.",
                exposição: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "Melhor época: primavera",
                espaçamento: "Espaçamento: 30-60cm entre plantas",
                luz: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                proteção: "Proteção: cobertura morta para conservar umidade",
                ideal: "Temperatura ideal: 15-25°C",
                tolerancia: "Tolerância: não tolera geadas severas",
            },
            uses: [
                { name: "Ornamental", icon: "fas fa-palette", text: "Excelente para decoração de interiores, em vasos suspensos ou como trepadeira." },
                { name: "Purificadora de Ar", icon: "fas fa-wind", text: "Conhecida por sua capacidade de filtrar toxinas do ar." }
            ],
            reviews: [
                { user: "Gabriela C.", rating: 5, text: "Minha jiboia é linda e super fácil de cuidar!" }
            ]
        }
    },
    {
        id: 13,
        name: "Pitangueira",
        scientificName: "Eugenia uniflora",
        description: "Árvore frutífera nativa do Brasil, produz frutos saborosos e atrai pássaros.",
    image: "imagens/PITANGAS1.jpg",
    images: ["imagens/PITANGAS1.jpg", "imagens/PITANGAS1.jpg","imagens/PITANGAS1.jpg"],
        category: "nativa",
        size: "grande",
        light: "sol-pleno",
        water: "moderada",
        difficulty: "facil",
        tags: ["Nativa", "Frutífera", "Árvore"],
        popularity: 75,
        details: {
            Filo: "Tracheophyta",
            Classe: "Magnoliopsida",
            Ordem: "Myrtales",
            Family: "Myrtaceae",
            Gênero: "Eugenia",
            Espécie: "Eugenia uniflora.",
            Fruto: "Fruto verdadeiro",
            origin: "Brasil",
            type: "Árvore frutífera",
            propagation: "Sementes",
            toxicity: "Não tóxica",
            height: "2 - 4m",
            flowerColor: "Branco",
            foliage: "Perene",
            flowering: "Primavera/Verão",
            lightLevel: 90,
            waterLevel: 60,
            tempLevel: 75,
            soilLevel: 80,
            care: {
                watering: "Regas regulares, especialmente em períodos de seca e durante a frutificação.",
                fertilizing: "Adubação anual com composto orgânico e fertilizante NPK balanceado.",
                pruning: "Poda de formação e limpeza para remover galhos secos ou doentes.",
                pests: "Mosca-das-frutas pode ser um problema. Monitore e use armadilhas." 
            },
            caretips: {
                manha: "Melhor horário: manhã cedo",
                quantidade: "Quantidade: 2-3L por planta adulta",
                frequencia: "Frequência: mensal (primavera/verão)",
                NPK: "NPK recomendado: 10-10-10 ou 5-10-5",
                epoca: "Época: final do inverno",
                ferramentas: "Ferramentas: tesoura de poda limpa e afiada",
                prevenção: "Prevenção: fungicida preventivo na primavera",
                monitoramento: "Monitoramento: semanal"
            },
            cultivation:{
                plantio: "Plante em solo bem drenado, rico em matéria orgânica, com pH entre 6.0 e 7.0. Escolha um local com pelo menos 6 horas de sol direto por dia.",
                exposição: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "Melhor época: primavera",
                espaçamento: "Espaçamento: 30-60cm entre plantas",
                luz: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                proteção: "Proteção: cobertura morta para conservar umidade",
                ideal: "Temperatura ideal: 15-25°C",
                tolerancia: "Tolerância: não tolera geadas severas",
            },
            uses: [
                { name: "Alimentício", icon: "fas fa-utensils", text: "Os frutos são consumidos in natura, em sucos, geleias e doces." },
                { name: "Paisagismo", icon: "fas fa-tree", text: "Ideal para jardins e pomares, atraindo pássaros e abelhas." }
            ],
            reviews: [
                { user: "Renata M.", rating: 5, text: "As pitangas são deliciosas e a árvore é linda!" }
            ]
        }
    },
    {
        id: 14,
        name: "Camomila",
        scientificName: "Matricaria chamomilla",
        description: "Planta medicinal com flores delicadas, usada para fazer chás calmantes.",
    image: "imagens/camomila1.webp",
    images: ["imagens/camomila1.webp", "imagens/camomila1.webp","imagens/camomila1.webp"],
        category: "medicinal",
        size: "pequeno",
        light: "sol-pleno",
        water: "moderada",
        difficulty: "facil",
        tags: ["Medicinal", "Chá", "Aromática"],
        popularity: 84,
        details: {
            Filo: "Tracheophyta",
            Classe: "Magnoliopsida",
            Ordem: "Asterales",
            Family: "Asteraceae",
            Gênero: "Matricaria",
            Espécie: "Matricaria chamomilla",
            Fruto: "Fruto verdadeiro",
            origin: "Europa e Ásia",
            type: "Erva anual",
            propagation: "Sementes",
            toxicity: "Não tóxica",
            height: "0.2 - 0.6m",
            flowerColor: "Branco/Amarelo",
            foliage: "Anual",
            flowering: "Primavera/Verão",
            lightLevel: 90,
            waterLevel: 60,
            tempLevel: 70,
            soilLevel: 70,
            care: {
                watering: "Mantenha o solo úmido, mas evite encharcar. Regue na base da planta.",
                fertilizing: "Não exige muita adubação. Um composto orgânico leve na primavera é suficiente.",
                pruning: "Remova flores murchas para estimular novas florações.",
                pests: "Pulgões podem ser um problema. Use sabão inseticida se necessário." 
            },
            caretips: {
                manha: "Melhor horário: manhã cedo",
                quantidade: "Quantidade: 2-3L por planta adulta",
                frequencia: "Frequência: mensal (primavera/verão)",
                NPK: "NPK recomendado: 10-10-10 ou 5-10-5",
                epoca: "Época: final do inverno",
                ferramentas: "Ferramentas: tesoura de poda limpa e afiada",
                prevenção: "Prevenção: fungicida preventivo na primavera",
                monitoramento: "Monitoramento: semanal"
            },
            cultivation:{
                plantio: "Plante em solo bem drenado, rico em matéria orgânica, com pH entre 6.0 e 7.0. Escolha um local com pelo menos 6 horas de sol direto por dia.",
                exposição: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "Melhor época: primavera",
                espaçamento: "Espaçamento: 30-60cm entre plantas",
                luz: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                proteção: "Proteção: cobertura morta para conservar umidade",
                ideal: "Temperatura ideal: 15-25°C",
                tolerancia: "Tolerância: não tolera geadas severas",
            },
            uses: [
                { name: "Medicinal", icon: "fas fa-mortar-pestle", text: "Usada para chás com propriedades calmantes, anti-inflamatórias e digestivas." },
                { name: "Cosmético", icon: "fas fa-flask", text: "Ingrediente em produtos para cabelo e pele devido às suas propriedades suavizantes." }
            ],
            reviews: [
                { user: "Sofia M.", rating: 5, text: "O chá de camomila me ajuda muito a dormir!" }
            ]
        }
    },
    {
        id: 15,
        name: "Zamioculca",
        scientificName: "Zamioculcas zamiifolia",
        description: "Planta extremamente resistente à falta de água e luz, perfeita para escritórios.",
    image: "imagens/zamio1.jpeg",
    images: ["imagens/zamio1.jpeg", "imagens/zamio1.jpeg","imagens/zamio1.jpeg"],
        category: "ornamental",
        size: "medio",
        light: "sombra",
        water: "baixa",
        difficulty: "facil",
        tags: ["Interior", "Resistente", "Baixa Manutenção"],
        popularity: 91,
        details: {
            Filo: "Tracheophyta",
            Classe: "Liliopsida",
            Ordem: "Alismatales",
            Family: "Araceae",
            Gênero: "Zamioculcas",
            Espécie: "Zamioculcas zamiifolia",
            Fruto: "Fruto verdadeiro",
            origin: "África Oriental",
            type: "Herbácea perene",
            propagation: "Divisão de rizomas, folhas",
            toxicity: "Tóxica (se ingerida)",
            height: "0.6 - 1.0m",
            flowerColor: "Não possui (raro)",
            foliage: "Perene",
            flowering: "Não possui (raro)",
            lightLevel: 20,
            waterLevel: 20,
            tempLevel: 70,
            soilLevel: 85,
            care: {
                watering: "Regue muito pouco, apenas quando o solo estiver completamente seco. Tolera longos períodos de seca.",
                fertilizing: "Adube 1-2 vezes por ano na primavera/verão com fertilizante líquido diluído.",
                pruning: "Remova folhas amareladas ou danificadas na base. Não necessita de poda regular.",
                pests: "Geralmente livre de pragas. O maior problema é o excesso de água." 
            },
            caretips: {
                manha: "Melhor horário: manhã cedo",
                quantidade: "Quantidade: 2-3L por planta adulta",
                frequencia: "Frequência: mensal (primavera/verão)",
                NPK: "NPK recomendado: 10-10-10 ou 5-10-5",
                epoca: "Época: final do inverno",
                ferramentas: "Ferramentas: tesoura de poda limpa e afiada",
                prevenção: "Prevenção: fungicida preventivo na primavera",
                monitoramento: "Monitoramento: semanal"
            },
            cultivation:{
                plantio: "Plante em solo bem drenado, rico em matéria orgânica, com pH entre 6.0 e 7.0. Escolha um local com pelo menos 6 horas de sol direto por dia.",
                exposição: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "Melhor época: primavera",
                espaçamento: "Espaçamento: 30-60cm entre plantas",
                luz: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                proteção: "Proteção: cobertura morta para conservar umidade",
                ideal: "Temperatura ideal: 15-25°C",
                tolerancia: "Tolerância: não tolera geadas severas",
            },
            uses: [
                { name: "Ornamental", icon: "fas fa-palette", text: "Ideal para ambientes internos com pouca luz, como escritórios e salas." },
                { name: "Decoração", icon: "fas fa-home", text: "Sua folhagem brilhante e resistente a torna uma planta decorativa popular." }
            ],
            reviews: [
                { user: "Paula R.", rating: 5, text: "A zamioculca é a planta perfeita para quem esquece de regar!" }
            ]
        }
    },
    {
        id: 16,
        name: "Alecrim",
        scientificName: "Rosmarinus officinalis",
        description: "Arbusto aromático usado como tempero e em óleos essenciais. Estimula a memória.",
    image: "imagens/alecrim1.webp",
    images: ["imagens/alecrim1.webp", "imagens/alecrim1.webp","imagens/alecrim1.webp"],
        category: "aromatica",
        size: "medio",
        light: "sol-pleno",
        water: "baixa",
        difficulty: "facil",
        tags: ["Aromática", "Culinária", "Medicinal"],
        popularity: 88,
        details: {
            Filo: "Tracheophyta",
            Classe: "Magnoliopsida",
            Ordem: "Lamiales",
            Family: "Lamiaceae",
            Gênero: "Salvia",
            Espécie: "Salvia rosmarinus",
            Fruto: "Fruto verdadeiro",
            origin: "Região do Mediterrâneo",
            type: "Arbusto perene",
            propagation: "Estacas, sementes",
            toxicity: "Não tóxica",
            height: "0.5 - 1.5m",
            flowerColor: "Azul/Roxo",
            foliage: "Perene",
            flowering: "Primavera/Verão",
            lightLevel: 50,
            waterLevel: 2,
            tempLevel: 7,
            soilLevel: 100,
            care: {
                watering: "Regue moderadamente, permitindo que o solo seque entre as regas. Tolera seca.",
                fertilizing: "Não exige muita adubação. Um composto orgânico leve na primavera é suficiente.",
                pruning: "Pode após a floração para manter a forma e estimular o crescimento. Colha os ramos jovens.",
                pests: "Geralmente resistente, mas pode ter pulgões em condições de estresse." 
            },
            caretips: {
                manha: "Melhor horário: manhã cedo",
                quantidade: "Quantidade: 2-3L por planta adulta",
                frequencia: "Frequência: mensal (primavera/verão)",
                NPK: "NPK recomendado: 10-10-10 ou 5-10-5",
                epoca: "Época: final do inverno",
                ferramentas: "Ferramentas: tesoura de poda limpa e afiada",
                prevenção: "Prevenção: fungicida preventivo na primavera",
                monitoramento: "Monitoramento: semanal"
            },
            cultivation:{
                plantio: "Plante em solo bem drenado, rico em matéria orgânica, com pH entre 6.0 e 7.0. Escolha um local com pelo menos 6 horas de sol direto por dia.",
                exposição: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "Melhor época: primavera",
                espaçamento: "Espaçamento: 30-60cm entre plantas",
                luz: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                proteção: "Proteção: cobertura morta para conservar umidade",
                ideal: "Temperatura ideal: 15-25°C",
                tolerancia: "Tolerância: não tolera geadas severas",
            },
            uses: [
                { name: "Culinário", icon: "fas fa-utensils", text: "Usado para temperar carnes, batatas, pães e azeites." },
                { name: "Medicinal", icon: "fas fa-mortar-pestle", text: "Estimula a memória, melhora a digestão e tem propriedades antioxidantes." }
            ],
            reviews: [
                { user: "Marcos V.", rating: 5, text: "O alecrim fresco faz toda a diferença na comida!" }
            ]
        }
    },
    {
        id: 17,
        name: "Bromélia",
        scientificName: "Bromeliaceae",
        description: "Planta tropical com folhas coloridas e uma inflorescência exótica no centro.",
    image: "imagens/bromelia1.webp",
    images: ["imagens/bromelia1.webp", "imagens/bromelia1.webp","imagens/bromelia1.webp"],
        category: "ornamental",
        size: "pequeno",
        light: "meia-sombra",
        water: "moderada",
        difficulty: "moderado",
        tags: ["Tropical", "Exótica", "Interior"],
        popularity: 79,
        details: {
            Filo: "Tracheophyta",
            Classe: "Liliopsida",
            Ordem: "Poales",
            Family: "Bromeliaceae",
            Gênero: "Ananas",
            Espécie: "Ananas comosus",
            Fruto: "Fruto verdadeiro",
            origin: "Américas",
            type: "Epífita/Terrestre",
            propagation: "Brotações laterais (filhotes)",
            toxicity: "Não tóxica",
            height: "0.2 - 1.0m",
            flowerColor: "Variada",
            foliage: "Perene",
            flowering: "Variável",
            lightLevel: 50,
            waterLevel: 70,
            tempLevel: 80,
            soilLevel: 60,
            care: {
                watering: "Mantenha o \'copinho\' central com água limpa e troque semanalmente. Regue o substrato moderadamente.",
                fertilizing: "Adube com fertilizante foliar diluído, borrifando nas folhas e no \'copinho\'.",
                pruning: "Remova folhas secas ou danificadas. Após a floração, a planta mãe morre e os filhotes crescem.",
                pests: "Cochonilhas e ácaros podem atacar. Mantenha boa umidade e ventilação." 
            },
            caretips: {
                manha: "Melhor horário: manhã cedo",
                quantidade: "Quantidade: 2-3L por planta adulta",
                frequencia: "Frequência: mensal (primavera/verão)",
                NPK: "NPK recomendado: 10-10-10 ou 5-10-5",
                epoca: "Época: final do inverno",
                ferramentas: "Ferramentas: tesoura de poda limpa e afiada",
                prevenção: "Prevenção: fungicida preventivo na primavera",
                monitoramento: "Monitoramento: semanal"
            },
            cultivation:{
                plantio: "Plante em solo bem drenado, rico em matéria orgânica, com pH entre 6.0 e 7.0. Escolha um local com pelo menos 6 horas de sol direto por dia.",
                exposição: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "Melhor época: primavera",
                espaçamento: "Espaçamento: 30-60cm entre plantas",
                luz: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                proteção: "Proteção: cobertura morta para conservar umidade",
                ideal: "Temperatura ideal: 15-25°C",
                tolerancia: "Tolerância: não tolera geadas severas",
            },
            uses: [
                { name: "Ornamental", icon: "fas fa-palette", text: "Muito utilizada em decoração de interiores e jardins tropicais devido às suas cores vibrantes." }
            ],
            reviews: [
                { user: "Clara G.", rating: 4, text: "Minha bromélia está linda, mas exige um pouco de atenção com a água." }
            ]
        }
    },
    {
        id: 18,
        name: "Jabuticabeira",
        scientificName: "Plinia cauliflora",
        description: "Árvore frutífera nativa do Brasil, cujos frutos crescem diretamente no tronco.",
    image: "imagens/jabuticaba1.webp",
    images: ["imagens/jabuticaba1.webp", "imagens/jabuticaba1.webp","imagens/jabuticaba1.webp"],
        category: "nativa",
        size: "grande",
        light: "sol-pleno",
        water: "alta",
        difficulty: "moderado",
        tags: ["Nativa", "Frutífera", "Árvore"],
        popularity: 81,
        details: {
            Filo: "Tracheophyta",
            Classe: "Magnoliopsida",
            Ordem: "Myrtales",
            Family: "Myrtaceae",
            Gênero: "Plinia",
            Espécie: "Plinia cauliflora",
            Fruto: "Fruto verdadeiro",
            origin: "Brasil",
            type: "Árvore frutífera",
            propagation: "Sementes, enxertia",
            toxicity: "Não tóxica",
            height: "3 - 10m",
            flowerColor: "Branco",
            foliage: "Perene",
            flowering: "Primavera/Verão",
            lightLevel: 90,
            waterLevel: 80,
            tempLevel: 75,
            soilLevel: 80,
            care: {
                watering: "Mantenha o solo sempre úmido, especialmente durante a floração e frutificação. Não tolera seca.",
                fertilizing: "Adubação regular com composto orgânico e fertilizante NPK para frutíferas.",
                pruning: "Poda de formação e limpeza para remover galhos secos ou doentes. Pode ser podada para controle de tamanho.",
                pests: "Pulgões e cochonilhas podem atacar. Monitore e use controle biológico." 
            },
            caretips: {
                manha: "Melhor horário: manhã cedo",
                quantidade: "Quantidade: 2-3L por planta adulta",
                frequencia: "Frequência: mensal (primavera/verão)",
                NPK: "NPK recomendado: 10-10-10 ou 5-10-5",
                epoca: "Época: final do inverno",
                ferramentas: "Ferramentas: tesoura de poda limpa e afiada",
                prevenção: "Prevenção: fungicida preventivo na primavera",
                monitoramento: "Monitoramento: semanal"
            },
            cultivation:{
                plantio: "Plante em solo bem drenado, rico em matéria orgânica, com pH entre 6.0 e  7.0. Escolha um local com pelo menos 6 horas de sol direto por dia.",
                exposição: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "Melhor época: primavera",
                espaçamento: "Espaçamento: 30-60cm entre plantas",
                luz: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                proteção: "Proteção: cobertura morta para conservar umidade",
                ideal: "Temperatura ideal: 15-25°C",
                tolerancia: "Tolerância: não tolera geadas severas",
            },
            uses: [
                { name: "Alimentício", icon: "fas fa-utensils", text: "Os frutos são consumidos in natura, em geleias, sucos e licores." },
                { name: "Paisagismo", icon: "fas fa-tree", text: "Valorizada em paisagismo por sua beleza e frutos que nascem no tronco." }
            ],
            reviews: [
                { user: "Daniela H.", rating: 5, text: "Ter uma jabuticabeira em casa é um sonho! Frutos deliciosos." }
            ]
        }
    },
    {
        id: 19,
        name: "Costela-de-Adão",
        scientificName: "Monstera deliciosa",
        description: "Planta com folhas grandes e recortadas, muito popular na decoração de interiores.",
    image: "imagens/costeladeadao1.jpg",
    images: ["imagens/costeladeadao1.jpg", "imagens/costeladeadao1.jpg","imagens/costeladeadao1.jpg"],
        category: "ornamental",
        size: "grande",
        light: "meia-sombra",
        water: "moderada",
        difficulty: "facil",
        tags: ["Interior", "Tropical", "Folhagem"],
        popularity: 94,
        details: {
            Filo: "Tracheophyta",
            Classe: "Liliopsida",
            Ordem: "Alismatales",
            Family: "Araceae",
            Gênero: "Monstera",
            Espécie: "Monstera deliciosa",
            Fruto: "Fruto verdadeiro",
            origin: "América Central e do Sul",
            type: "Trepadeira perene",
            propagation: "Estacas",
            toxicity: "Tóxica (se ingerida)",
            height: "1 - 3m (em vasos)",
            flowerColor: "Não possui (raro)",
            foliage: "Perene",
            flowering: "Não possui (raro)",
            lightLevel: 50,
            waterLevel: 60,
            tempLevel: 75,
            soilLevel: 70,
            care: {
                watering: "Regue quando o solo estiver seco na superfície. Borrife água nas folhas regularmente.",
                fertilizing: "Adube a cada 2-4 semanas na primavera e verão com fertilizante líquido diluído.",
                pruning: "Remova folhas amareladas ou danificadas. Pode para controlar o tamanho e formato.",
                pests: "Cochonilhas e ácaros podem ocorrer. Limpe as folhas regularmente." 
            },
            caretips: {
                manha: "Melhor horário: manhã cedo",
                quantidade: "Quantidade: 2-3L por planta adulta",
                frequencia: "Frequência: mensal (primavera/verão)",
                NPK: "NPK recomendado: 10-10-10 ou 5-10-5",
                epoca: "Época: final do inverno",
                ferramentas: "Ferramentas: tesoura de poda limpa e afiada",
                prevenção: "Prevenção: fungicida preventivo na primavera",
                monitoramento: "Monitoramento: semanal"
            },
            cultivation:{
                plantio: "Plante em solo bem drenado, rico em matéria orgânica, com pH entre 6.0 e 7.0. Escolha um local com pelo menos 6 horas de sol direto por dia.",
                exposição: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "Melhor época: primavera",
                espaçamento: "Espaçamento: 30-60cm entre plantas",
                luz: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                proteção: "Proteção: cobertura morta para conservar umidade",
                ideal: "Temperatura ideal: 15-25°C",
                tolerancia: "Tolerância: não tolera geadas severas",
            },
            uses: [
                { name: "Ornamental", icon: "fas fa-palette", text: "Muito popular em decoração de interiores devido às suas folhas grandes e exóticas." },
                { name: "Paisagismo", icon: "fas fa-tree", text: "Em climas tropicais, pode ser usada em jardins como planta de destaque." }
            ],
            reviews: [
                { user: "Laura K.", rating: 5, text: "Minha Monstera é a estrela da minha sala! Adoro as folhas." }
            ]
        }
    },
    {
        id: 20,
        name: "Pimenta",
        scientificName: "Capsicum spp.",
        description: "Planta que produz frutos picantes, usada como tempero em todo o mundo.",
    image: "imagens/pimenta1.webp",
    images: ["imagens/pimenta1.webp", "imagens/pimenta1.webp","imagens/pimenta1.webp"],
        category: "alimenticia",
        size: "pequeno",
        light: "sol-pleno",
        water: "moderada",
        difficulty: "moderado",
        tags: ["Alimentícia", "Horta", "Picante"],
        popularity: 83,
        details: {
            Filo: "Tracheophyta",
            Classe: "Magnoliopsida",
            Ordem: "Solanales",
            Family: "Solanaceae",
            Gênero: "Capsicum",
            Espécie: "pimenta-malagueta",
            Fruto: "Fruto verdadeiro",
            origin: "Américas",
            type: "Planta anual/perene",
            propagation: "Sementes",
            toxicity: "Não tóxica (fruto)",
            height: "0.3 - 1.0m",
            flowerColor: "Branco",
            foliage: "Anual/Perene",
            flowering: "Primavera/Verão",
            lightLevel: 90,
            waterLevel: 70,
            tempLevel: 80,
            soilLevel: 80,
            care: {
                watering: "Mantenha o solo úmido, mas bem drenado. Evite encharcar.",
                fertilizing: "Adube a cada 2 semanas com fertilizante rico em potássio durante a frutificação.",
                pruning: "Pode para estimular o crescimento e a produção de frutos. Remova folhas e galhos secos.",
                pests: "Pulgões, mosca branca e ácaros são comuns. Use defensivos naturais." 
            },
            caretips: {
                manha: "Melhor horário: manhã cedo",
                quantidade: "Quantidade: 2-3L por planta adulta",
                frequencia: "Frequência: mensal (primavera/verão)",
                NPK: "NPK recomendado: 10-10-10 ou 5-10-5",
                epoca: "Época: final do inverno",
                ferramentas: "Ferramentas: tesoura de poda limpa e afiada",
                prevenção: "Prevenção: fungicida preventivo na primavera",
                monitoramento: "Monitoramento: semanal"
            },
            cultivation:{
                plantio: "Plante em solo bem drenado, rico em matéria orgânica, com pH entre 6.0 e 7.0. Escolha um local com pelo menos 6 horas de sol direto por dia.",
                exposição: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                manutenção: "Remova flores murchas para estimular novas florações. Proteja contra geadas em regiões mais frias.",
                
            },
            cultivationtips: {
                estação: "Melhor época: primavera",
                espaçamento: "Espaçamento: 30-60cm entre plantas",
                luz: "Requer sol pleno para um crescimento saudável e floração abundante. Mínimo de 6 horas de sol direto.",
                proteção: "Proteção: cobertura morta para conservar umidade",
                ideal: "Temperatura ideal: 15-25°C",
                tolerancia: "Tolerância: não tolera geadas severas",
            },
            uses: [
                { name: "Culinário", icon: "fas fa-utensils", text: "Usada para dar sabor e picância a diversos pratos da culinária mundial." }
            ],
            reviews: [
                { user: "Gustavo B.", rating: 4, text: "Minhas pimentas estão ardendo! Ótimas para molhos." }
            ]
        }
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const plantId = parseInt(urlParams.get("id"));

    const plant = plantsData.find(p => p.id === plantId);

    if (!plant) {
        document.body.innerHTML = `<div style="text-align: center; padding: 50px; font-family: sans-serif;"><h1>Planta não encontrada</h1><p>A planta com o ID \'${plantId}\' não foi encontrada.</p><a href="catalog.html">Voltar ao Catálogo</a></div>`;
        return;
    }

    populatePlantDetails(plant);
    setupEventListeners(plant);
});

function populatePlantDetails(plant) {
    // --- Page Title & Breadcrumb ---
    document.title = `${plant.name} - Detalhes da Planta - Phytografia`;
    document.getElementById("plantName").textContent = plant.name;

    // --- Header Info ---
    document.getElementById("plantTitle").textContent = plant.name;
    document.getElementById("scientificName").textContent = plant.scientificName;
    document.getElementById("plantDescription").textContent = plant.description;

    // --- Gallery ---
    const mainImage = document.getElementById("mainImage");
    const thumbnailGallery = document.querySelector(".thumbnail-gallery");
    mainImage.src = plant.images && plant.images.length > 0 ? plant.images[0] : plant.image;
    mainImage.alt = plant.name;
    if (thumbnailGallery) {
        thumbnailGallery.innerHTML = "";
        if (plant.images && plant.images.length > 1) {
            plant.images.forEach((imgSrc, index) => {
                const img = document.createElement("img");
                img.src = imgSrc;
                img.alt = `${plant.name} ${index + 1}`;
                img.className = "thumbnail";
                if (index === 0) img.classList.add("active");
                img.onclick = () => changeMainImage(img);
                thumbnailGallery.appendChild(img);
            });
        } else {
            thumbnailGallery.style.display = "none";
        }
    }

    // --- Tags ---
    const plantTagsContainer = document.querySelector(".plant-tags");
    if (plantTagsContainer && plant.tags) {
        plantTagsContainer.innerHTML = plant.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
    }

    // --- Overview Tab ---
    const details = plant.details;
    if (details) {
        // Characteristics
        document.querySelector(".char-grid").innerHTML = `
            <div class="char-item"><i class="fas fa-ruler-vertical"></i><span class="char-label">Altura</span><span class="char-value">${details.height || "N/A"}</span></div>
            <div class="char-item"><i class="fas fa-palette"></i><span class="char-label">Cor da Flor</span><span class="char-value">${details.flowerColor || "N/A"}</span></div>
            <div class="char-item"><i class="fas fa-leaf"></i><span class="char-label">Folhagem</span><span class="char-value">${details.foliage || "N/A"}</span></div>
            <div class="char-item"><i class="fas fa-clock"></i><span class="char-label">Floração</span><span class="char-value">${details.flowering || "N/A"}</span></div>
        `;
        // Requirements
        document.querySelector(".req-grid").innerHTML = `
            <div class="req-item"><i class="fas fa-sun"></i><span class="char-label">Luminosidade</span><div class="req-bar"><div class="req-fill" style="width: ${details.lightLevel || 0}%;"></div></div><span class="char-value">${plant.light.replace("-", " ")}</span></div>
            <div class="req-item"><i class="fas fa-tint"></i><span class="char-label">Água</span><div class="req-bar"><div class="req-fill" style="width: ${details.waterLevel || 0}%;"></div></div><span class="char-value">${plant.water}</span></div>
            <div class="req-item"><i class="fas fa-thermometer-half"></i><span class="char-label">Temperatura</span><div class="req-bar"><div class="req-fill" style="width: ${details.tempLevel || 0}%;"></div></div><span class="char-value">${details.cultivationtips.ideal}</span></div>
            <div class="req-item"><i class="fas fa-mountain"></i><span class="char-label">Solo</span><div class="req-bar"><div class="req-fill" style="width: ${details.soilLevel || 0}%;"></div></div><span class="char-value">${plant.soil}</span></div>
        `;
        // Botanical Info
        document.querySelector(".info-grid").innerHTML = `
            <div class="info-item"><strong>Fruto:</strong><span>${details.Fruto || "N/A"}</span></div>
            <div class="info-item"><strong>Origem:</strong><span>${details.origin || "N/A"}</span></div>
            <div class="info-item"><strong>Tipo:</strong><span>${details.type || "N/A"}</span></div>
            <div class="info-item"><strong>Propagação:</strong><span>${details.propagation || "N/A"}</span></div>
            <div class="info-item"><strong>Toxicidade:</strong><span>${details.toxicity || "N/A"}</span></div>
            <div class="info-item"><strong>Dificuldade:</strong><span>${plant.difficulty || "N/A"}</span></div>
        `;

        document.querySelector(".grid").innerHTML = `
            <div class="info-item"><strong>Filo:</strong><span>${details.Filo || "N/A"}</span></div>
            <div class="info-item"><strong>Classe:</strong><span>${details.Classe || "N/A"}</span></div>
            <div class="info-item"><strong>Ordem:</strong><span>${details.Ordem || "N/A"}</span></div>
            <div class="info-item"><strong>Familia:</strong><span>${details.Family || "N/A"}</span></div>
            <div class="info-item"><strong>Gênero:</strong><span>${details.Gênero || "N/A"}</span></div>
            <div class="info-item"><strong>Espécie:</strong><span>${details.Espécie || "N/A"}</span></div>
        `;

        // --- Care Tab ---
        document.getElementById("care").innerHTML = `
            <div class="care-guide">
            <div class="care-section">
            <h3><i class="fas fa-tint"></i> Rega</h3>
            <p>${details.care.watering || "Informação não disponível."}</p>
            <div class="care-tips">
            <div class="tip"><i class="fas fa-clock"></i><span>Melhor horário: ${details.caretips.manha || "Informação não disponível."}</span></div>
            <div class="tip"><i class="fas fa-droplet"></i><span>Quantidade: ${details.caretips.quantidade || "Informação não disponível."}</span></div>
            </div>
            </div>
            <div class="care-section">
            <h3><i class="fas fa-seedling"></i> Fertilização</h3>
            <p>${details.care.fertilizing || "Informação não disponível."}</p>
            <div class="care-tips">
            <div class="tip"><i class="fas fa-calendar"></i><span>Frequência: ${details.caretips.frequencia || "Informação não disponível."}</span></div>
            <div class="tip"><i class="fas fa-flask"></i><span>NPK recomendado: ${details.caretips.NPK || "Informação não disponível."}</span></div>
            </div>
            </div>
            <div class="care-section">
            <h3><i class="fas fa-cut"></i> Poda</h3>
            <p>${details.care.pruning || "Informação não disponível."}</p>
            <div class="care-tips">
            <div class="tip"><i class="fas fa-calendar-alt"></i><span>Época: ${details.caretips.epoca || "Informação não disponível."}</span></div>
            <div class="tip"><i class="fas fa-tools"></i><span>Ferramentas: ${details.caretips.ferramentas || "Informação não disponível."}</span></div>
            </div>
            </div>
            <div class="care-section">
            <h3><i class="fas fa-bug"></i> Pragas e Doenças</h3>
            <p>${details.care.pests || "Informação não disponível."}</p>
            <div class="care-tips">
            <div class="tip"><i class="fas fa-shield-alt"></i><span>Prevenção: ${details.caretips.prevenção || "Informação não disponível."}</span></div>
            <div class="tip"><i class="fas fa-eye"></i><span>Monitoramento: ${details.caretips.monitoramento || "Informação não disponível."}</span></div>
            </div>
            </div>
            </div>
        `;

        // --- Cultivation Tab ---
        document.getElementById("cultivation").innerHTML = `
            <div class="cultivation-guide">
            <div class="cultivation-section">
            <h3><i class="fas fa-seedling"></i> Plantio</h3>
            <p>${details.cultivation.plantio || "Informação não disponível."}</p>
            <div class="cultivation-tips">
            <div class="tip"><i class="fas fa-calendar-alt"></i><span>Estação: ${details.cultivationtips.estação || "Informação não disponível."}</span></div>
            <div class="tip"><i class="fas fa-spa"></i><span>Espaçamento entre mudas: ${details.cultivationtips.espaçamento || "Informação não disponível."}</span></div>
            </div>
            </div>
            <div class="cultivation-section">
            <h3><i class="fas fa-sun"></i> Exposição Solar</h3>
            <p>${details.cultivation.exposição || "Informação não disponível."}</p>
            <div class="cultivation-tips">
            <div class="tip"><i class="fas fa-sun"></i><span>Sol diário: ${details.cultivationtips.luz || "Informação não disponível."}</span></div>
            <div class="tip"><i class="fas fa-thermometer-half"></i><span>Proteção: ${details.cultivationtips.proteção || "Informação não disponível."}</span></div>
            </div>
            </div>
            <div class="cultivation-section">
            <h3><i class="fas fa-water"></i> Manutenção</h3>
            <p>${details.cultivation.manutenção || "Informação não disponível."}</p>
            <div class="cultivation-tips">
            <div class="tip"><i class="fas fa-clock"></i><span>Temperatura ideal: ${details.cultivationtips.ideal || "Informação não disponível."}</span></div>
            <div class="tip"><i class="fas fa-droplet"></i><span>Tolerância: ${details.cultivationtips.tolerancia || "Informação não disponível."}</span></div>
            </div>
            </div>
            </div>
            </div>
        `;

        // --- Uses Tab ---
        if (details.uses && details.uses.length > 0) {
            document.getElementById("uses").innerHTML = `<div class="uses-grid">${details.uses.map(use => `
                <div class="use-card">
                    <i class="${use.icon}"></i>
                    <h4>${use.name}</h4>
                    <p>${use.text}</p>
                </div>
            `).join("")}</div>`;
        }

        if (details.recipes && details.recipes.length > 0) {
            document.getElementById("recipes").innerHTML = `<div class="recipes-grid">${details.recipes.map(recipes => `
    <div class="recipe-card">
        <h4>${recipes.name}</h4>
        <p>${recipes.description}</p>
        <p class="sim">${recipes.ingredients}</p>
        <p class="forte"><strong>Modo de Preparo:</strong> ${recipes.instructions}</p>
    </div>
`).join("")}</div>`;
        }
        
        // --- Reviews Tab ---
        const reviewsContainer = document.querySelector("#reviews .reviews-list");
        reviewsContainer.innerHTML = details.reviews.map(review => `
                <div class="user-review">
                    <div class="review-header">
                        <span class="user-name">${review.user}</span>
                        <div class="stars">${"<i class=\"fas fa-star\"></i>".repeat(review.rating)}${"<i class=\"far fa-star\"></i>".repeat(5 - review.rating)}</div>
                    </div>
                    <p class="review-text">"${review.text}"</p>
                </div>
            `).join("");
    }
    
    // --- Gallery Tab ---
    const galleryGrid = document.querySelector("#gallery .gallery-grid");
    if (galleryGrid && plant.images && plant.images.length > 0) {
        galleryGrid.innerHTML = plant.images.map(imgSrc => `
    <div class="gallery-item" onclick="openImageModal('${imgSrc}')">
        <img src="${imgSrc}" alt="${plant.name}">
        <div class="gallery-overlay"><i class="fas fa-search-plus"></i></div>
    </div>
`).join("");
    }
}

function setupEventListeners(plant) {
    // Tab switching
    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tabName = button.dataset.tab;
            tabButtons.forEach(btn => btn.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));
            button.classList.add("active");
            document.getElementById(tabName).classList.add("active");
        });
    });

    // Image Modal
    const imageModal = document.getElementById("imageModal");
    const closeModalBtn = imageModal.querySelector(".close-modal");
    if (closeModalBtn) closeModalBtn.onclick = () => imageModal.style.display = "none";

    document.getElementById('toggleDarkMode').onclick = function() {
        document.body.classList.toggle('dark-mode');
        // Opcional: troca ícone
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    };
}

function changeMainImage(thumbnailElement) {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = thumbnailElement.src;
    document.querySelectorAll(".thumbnail").forEach(thumb => thumb.classList.remove("active"));
    thumbnailElement.classList.add("active");
}

function openImageModal(src) {
    const imageModal = document.getElementById("imageModal");
    const modalImage = document.getElementById("img01");
    // If no src provided, fallback to main image
    if (!src) {
        const mainImage = document.getElementById("mainImage");
        src = mainImage ? mainImage.src : '';
    }
    if (!imageModal || !modalImage) return;
    modalImage.src = src || '';
    imageModal.style.display = "block";
}

function addToGarden() { alert("Adicionado ao jardim!"); }
function toggleFavorite() { alert("Favoritado!"); }
function addToCompare() { alert("Adicionado à comparação!"); }
function sharePlant() { alert("Compartilhar!"); }
function logout() { alert("Logout!"); }
