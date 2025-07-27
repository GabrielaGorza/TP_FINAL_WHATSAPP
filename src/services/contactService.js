

const contacts = [
    {
        id: 1,
        name: "Albert Einstein",
        description: "Relatively available.",
        avatar: "/Images/Albert-Eistein-Avatar.png",
        lastSeen: '22:05',
        status: 'offline',
        messages: [
            {
                emisor: "YO",
                hora: "22:05",
                id: 1,
                texto: "Hola Albert, he estado pensando en cómo transportar energía sin cables",
                status: "visto",
            },
            {
                emisor: "EINSTEIN",
                hora: "22:06",
                id: 2,
                texto: "¡Interesante! La relatividad podría aportar algo a esa idea",
                status: "visto",
            },
            {
                emisor: "YO",
                hora: "22:07",
                id: 3,
                texto: "Debemos encontrarnos. La ciencia necesita de nuestras locuras",
                status: "visto",
            },
            {
                emisor: "EINSTEIN",
                hora: "22:08",
                id: 4,
                texto: "Totalmente de acuerdo. Nos vemos en el laboratorio mañana a primera hora",
                status: "visto",
            },
        ]
    },

    {
        id: 2,
        name: "Rosalind Franklin",
        description: "Las estructuras se revelan con paciencia y luz.",
        avatar: "/Images/Rosalind-Franklin-Avatar.png",
        lastSeen: '09:10',
        status: 'online',
        messages: [
            {
                emisor: "FRANKLIN",
                hora: "08:45",
                id: 1,
                texto: "Estimado Tesla, esta mañana al observar la Foto 51, sentí que el secreto de la vida me guiñaba un ojo.",
                status: "visto",
            },
            {
                emisor: "YO",
                hora: "08:47",
                id: 2,
                texto: "¿Un guiño del ADN? Me intriga, señora Franklin. ¿Qué vislumbró en esa imagen?",
                status: "visto",
            },
            {
                emisor: "FRANKLIN",
                hora: "08:49",
                id: 3,
                texto: "Una X perfecta... la huella de una doble hélice, aguardando que alguien la escuche.",
                status: "visto",
            },
            {
                emisor: "YO",
                hora: "08:51",
                id: 4,
                texto: "¡Qué hallazgo! Y sin embargo, su nombre no resonó con el estruendo que merecía.",
                status: "visto",
            },
            {
                emisor: "FRANKLIN",
                hora: "08:53",
                id: 5,
                texto: "A veces, Nikola, la ciencia avanza en susurros. Y los aplausos llegan cuando ya no se necesitan.",
                status: "visto",
            },
            {
                emisor: "YO",
                hora: "08:55",
                id: 6,
                texto: "Si de mí dependiera, su lugar estaría grabado junto a Crick y Watson.",
                status: "visto",
            },
            {
                emisor: "FRANKLIN",
                hora: "08:57",
                id: 7,
                texto: "Mi sitio está donde se respeta la verdad. Y usted, señor Tesla, siempre ha caminado a su lado.",
                status: "visto",
            },
        ],
    },
    {
        id: 3,
        name: "Albert Hofmann",
        description: "I went for a bike ride... and entered the universe.",
        avatar: "/Images/Albert- Hofmann-Avatar.png",
        lastSeen: '12:01',
        status: 'offline',
        messages: [
            {
                emisor: "YO",
                hora: "11:30",
                id: 1,
                texto: "Albert, ¿cómo fue ese paseo en bicicleta tan... especial?",
                status: "visto",
            },
            {
                emisor: "HOFMANN",
                hora: "11:32",
                id: 2,
                texto: "¡Tesla querido! fue revelador. Vi la mente como un jardín sin límites",
                status: "visto",
            },
            {
                emisor: "YO",
                hora: "11:35",
                id: 3,
                texto: "La conciencia es un misterio fascinante",
                status: "visto",
            },
            {
                emisor: "HOFMANN",
                hora: "11:37",
                id: 4,
                texto: "Y el LSD, una llave. Pero con respeto",
                status: "visto",
            },
            {
                emisor: "YO",
                hora: "11:37",
                id: 3,
                texto: "Me genera curiosidad salir a andar en bicicleta y ver el mundo desde otra perspectiva",
                status: "visto",
            },
            {
                emisor: "HOFMANN",
                hora: "11:43",
                id: 4,
                texto: "¡No perdamos más tiempo! Paso por ti y salimos a los campos",
                status: "visto",
            },
        ],
    },
    {
        id: 4,
        name: "Marie Curie",
        description: "Shining... but not from within.",
        avatar: "/Images/Marie-Curie-Avatar.png",
        lastSeen: 'en línea',
        status: 'online',
        messages: [
            {
                emisor: "YO",
                hora: "10:12",
                id: 1,
                texto: "¡Hola Marie!, quería decirte que tu trabajo sobre la radiactividad me inspira muchísimo",
                status: "visto",
            },
            {
                emisor: "CURIE",
                hora: "10:14",
                id: 2,
                texto: "Gracias Nicolas. La ciencia necesita pasión y mucha paciencia",
                status: "visto",
            },
            {
                emisor: "YO",
                hora: "10:15",
                id: 3,
                texto: "¿Te apetece una taza de té y conversar sobre tus hallazgos con el polonio?",
                status: "visto",
            },
            {
                emisor: "CURIE",
                hora: "10:17",
                id: 4,
                texto: "Claro. Siempre es buen momento para compartir conocimiento y verte en persona.",
                status: "visto",
            },
            {
                emisor: "YO",
                hora: "10:39",
                id: 3,
                texto: "¡Perfecto! Nos encontramos en el lugar de siempre a las 16:00hs",
                status: "visto",
            },
        ],

    },
];

export const getContactList = () => {
    return contacts;
};


export const getContactById = (contact_id) => {
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contact_id)) {
            return contact;
        }
    }
    return null
}
