export interface MenuItem {
  name: string;
  description: string;
  emoji?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  color: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'entradas',
    title: 'Entradas',
    subtitle: 'Para abrir el apetito',
    emoji: '🦐',
    color: '#FF6B00',
    items: [
      { name: 'Canastica Mixta', description: 'Lambí, camarones, bulgao o cangrejo' },
      { name: 'Bastoncitos de Mero', description: 'Crujientes bastoncitos de filete de mero' },
      { name: 'Salpicón de Mariscos', description: 'Mezcla fresca de mariscos del mar' },
      { name: 'Anillos de Calamares', description: 'Anillos de calamar dorados y crujientes' },
    ],
  },
  {
    id: 'pescados',
    title: 'Pescados',
    subtitle: 'Frescos del día',
    emoji: '🐟',
    color: '#00B4D8',
    items: [
      { name: 'Pescado Colorao', description: 'Frito, al ajillo, al vapor con coco, guisado, al limón, a la crema o a la plancha' },
      { name: 'Pescado Carite en Lonja', description: 'Frito, al ajillo, al vapor con coco, guisado, al limón, a la crema o a la plancha' },
      { name: 'Pescado Capitán', description: 'Frito, al ajillo, al vapor con coco, guisado, al limón, a la crema o a la plancha' },
      { name: 'Filete de Mero', description: 'Frito, al ajillo, al vapor con coco, guisado, al limón, a la crema o a la plancha' },
      { name: 'Chillo', description: 'Frito, al ajillo, al vapor con coco, guisado, al limón, a la crema o a la plancha' },
      { name: 'Lora', description: 'Frito, al ajillo, al vapor con coco, guisado, al limón, a la crema o a la plancha' },
    ],
  },
  {
    id: 'caldos',
    title: 'Caldos y Sopas',
    subtitle: 'Calientes y reconfortantes',
    emoji: '🍲',
    color: '#FFD60A',
    items: [
      { name: 'Caldo de Pescado', description: 'Pescado colorao, carite, chillo, vegetales. Servido con tostones o arroz' },
      { name: 'Caldito de Camarones', description: 'Vegetales frescos. Servido con tostones o arroz' },
      { name: 'Full de Mariscos y Pescados', description: 'Vegetales frescos. Servido con tostones o arroz' },
      { name: 'Sopa de Carnes', description: 'Pollo, res, vegetales frescos. Servido con tostones o arroz' },
      { name: 'Casuela de Mariscos', description: 'Lambí, pulpo, bulgao, cangrejo, langostino, mejillones, calamar, camarones. Servido con tostones' },
      { name: 'Casuelita de Mariscos', description: 'Lambí, bulgao, cangrejo, calamar, camarones. Servido con tostones' },
    ],
  },
  {
    id: 'mariscos',
    title: 'Mariscos',
    subtitle: 'Del mar a tu mesa',
    emoji: '🦞',
    color: '#E63946',
    items: [
      { name: 'Camarones', description: 'Al ajillo, a la criolla, a la vinagreta, al coco, a la crema, a la rabiaca, a la mayonesa, al limón, a la margarita o a la plancha' },
      { name: 'Lambí', description: 'Al ajillo, a la criolla, a la vinagreta, al coco, a la crema, a la rabiaca, a la mayonesa, al limón, a la margarita o a la plancha' },
      { name: 'Bulgao', description: 'Al ajillo, a la criolla, a la vinagreta, a la rabiaca, al limón, a la margarita' },
      { name: 'Cangrejo', description: 'Al ajillo, a la criolla, a la rabiaca, a la margarita, al coco' },
      { name: 'Langostas', description: 'A la rabiaca, al termidor, al ajillo, a la criolla, al limón, a la plancha, rellena, a la vinagreta, al vino, a la bayonesa al coco' },
      { name: 'Salpicón de Mariscos', description: 'Al ajillo, a la criolla, a la vinagreta, al coco, a la rabiaca, al limón, a la margarita' },
      { name: 'Sopa de Mariscos', description: 'A la marina, de pescado colorao, de carite o de pollo' },
    ],
  },
  {
    id: 'mofongos',
    title: 'Mofongos',
    subtitle: 'Sabor dominicano auténtico',
    emoji: '🫙',
    color: '#7B2D8B',
    items: [
      { name: 'Mofongo de Camarones', description: 'Plátano verde, ajo, chicharrón crujiente, camarones, pico de gallo y caldo de pollo. Salsas: Criolla, Bechamel o Ajillo' },
      { name: 'SalpicóFONGO', description: 'Plátano verde, ajo, chicharrón crujiente, camarones, lambí y pulpo, pico de gallo y caldo de pollo. Salsas: Criolla, Bechamel o Ajillo' },
      { name: 'LambiFONGO', description: 'Plátano verde, ajo, chicharrón crujiente, lambí, pico de gallo y caldo de pollo. Salsas: Criolla, Bechamel o Ajillo' },
      { name: 'LangoFONGO', description: 'Plátano verde, ajo, chicharrón crujiente, langosta, pico de gallo y caldo de pollo. Salsas: Criolla, Bechamel o Ajillo' },
      { name: 'PecaFONGO', description: 'Plátano verde, ajo, chicharrón crujiente, pescado, pico de gallo y caldo de pollo. Salsas: Criolla, Bechamel o Ajillo' },
      { name: 'PolloFONGO', description: 'Plátano verde, ajo, chicharrón crujiente, pechuga de pollo, pico de gallo y caldo de pollo. Salsas: Criolla, Bechamel o Ajillo' },
    ],
  },
  {
    id: 'carnes',
    title: 'Carnes',
    subtitle: 'Mar y tierra',
    emoji: '🥩',
    color: '#C0392B',
    items: [
      { name: 'Filete de Cerdo', description: 'Vegetales salteados, salsa de ajo. Guarnición: papas o tostones' },
      { name: 'Pechuga a la Plancha', description: 'Vegetales salteados, salsa de ajo. Guarnición: papas o tostones' },
      { name: 'Pechurina', description: 'Guarnición: papas o tostones' },
      { name: 'Pechuga al Coco', description: 'Guarnición: papas o tostones' },
      { name: 'Chuleta / Longaniza', description: 'Guarnición: papas o tostones' },
      { name: 'Churrasco', description: 'Guarnición: vegetales salteados' },
      { name: 'Parrillada Mar y Tierra', description: 'Calamar, camarones, langosta, churrasco y pechuga. Para 4 o 5 personas' },
    ],
  },
  {
    id: 'ensaladas',
    title: 'Ensaladas',
    subtitle: 'Frescas y naturales',
    emoji: '🥗',
    color: '#27AE60',
    items: [
      { name: 'Ensalada Verde', description: 'Lechuga, tomates y pepino' },
      { name: 'Ensalada de Vegetales', description: 'Coliflor, brócoli, papas, zanahorias y ají morrón' },
      { name: 'Ensalada de Mariscos', description: 'Lechuga, tomates, vegetales, camarones, langosta, lambí y mejillones' },
    ],
  },
  {
    id: 'arroces',
    title: 'Arroces',
    subtitle: 'La base perfecta',
    emoji: '🍚',
    color: '#F39C12',
    items: [
      { name: 'Paella de Mariscos', description: 'Camarones, lambí, mejillones, calamar y langostino' },
      { name: 'Moro de Guandúles', description: 'Con coco' },
      { name: 'Arroz Blanco', description: 'Arroz blanco esponjoso' },
    ],
  },
  {
    id: 'guarnicion',
    title: 'Guarnición',
    subtitle: 'Para acompañar',
    emoji: '🍟',
    color: '#E67E22',
    items: [
      { name: 'Papas fritas', description: 'Doradas y crujientes' },
      { name: 'Batata frita', description: 'Dulce y crujiente' },
      { name: 'Plátano Frito', description: 'Plátano maduro frito' },
      { name: 'Guineitos', description: 'Guineitos verdes' },
      { name: 'Yuca', description: 'Yuca hervida o frita' },
    ],
  },
];

export const toursData = {
  botes: 10,
  precioPorPersona: 500,
  moneda: 'DOP',
  destinos: [
    {
      name: 'Playa El Barco',
      description: 'Una playa virgen rodeada de acantilados. Aguas cristalinas y arena blanca.',
      emoji: '⚓',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Cueva de los Piratas',
      description: 'Formación natural de cuevas con historia y misterio. Una aventura única.',
      emoji: '🏴‍☠️',
      image: 'https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Playa Blanca',
      description: 'Arena blanca y aguas turquesas. El paraíso caribeño en Azua.',
      emoji: '🏖️',
      image: 'https://images.pexels.com/photos/1268869/pexels-photo-1268869.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ],
  whatsapp: '18498864256',
};
