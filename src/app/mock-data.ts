import { DataCatalog } from './data-catalog';

export const DATA: DataCatalog[] = [
  {
    categorias: [
      {
        id: 'cat1',
        nombre: 'Calefacción',
        productos: [
          {
            id: '001',
            nombre: 'Anillos Galvanizados',
            subcat: 'null',
            descripcion: 'null',
            portadaImgUrl: '/assets/catalog/card-front/001a.jpg',
            dimensiones: [''],
            tags: ['calefaccion', 'anillo', 'galvanizado'],
            galeriaImgUrls: [
              '/assets/catalog/cat1/01/lq_001a.jpg',
              '/assets/catalog/cat1/01/lq_001b.jpg'              
            ]
          },
          {
            id: '002',
            nombre: 'Boquillas',
            subcat: 'null',
            descripcion: 'null',
            portadaImgUrl: '/assets/catalog/card-front/002a.jpg',
            dimensiones: [''],
            tags: ['calefaccion', 'boquillas', 'collerines', 'salida leña'],
            galeriaImgUrls: [
              '/assets/catalog/cat1/02/lq_002a.jpg',
              '/assets/catalog/cat1/02/lq_002b.jpg'              
            ]
          },
          {
            id: '003',
            nombre: 'Campanas de Cocina',
            subcat: 'null',
            descripcion: 'null',
            portadaImgUrl: '/assets/catalog/card-front/003a.jpg',
            dimensiones: [''],
            tags: ['casa', 'jardin', 'campanas', 'cocina'],
            galeriaImgUrls: [
              '/assets/catalog/cat1/03/lq_003a.jpg',
              '/assets/catalog/cat1/03/lq_003b.jpg'              
            ]
          },
          {
            id: '004',
            nombre: 'Castellones',
            subcat: 'null',
            descripcion: 'null',
            portadaImgUrl: '/assets/catalog/card-front/004a.jpg',
            dimensiones: [''],
            tags: ['casa', 'jardin', 'castellones', 'tejas'],
            galeriaImgUrls: [
              '/assets/catalog/cat1/04/lq_004a.jpg',
              '/assets/catalog/cat1/04/lq_004b.jpg'              
            ]
          }
        ]
      },
      {
        id: 'cat2',
        nombre: 'Casa y Jardín',
        productos: [
          {
            id: '038',
            nombre: 'Baldes',
            subcat: 'null',
            descripcion: 'null',
            portadaImgUrl: '/assets/catalog/card-front/038a.jpg',
            dimensiones: [''],
            tags: ['casa', 'jardin', 'Baldes'],
            galeriaImgUrls: [
              '/assets/catalog/cat2/01/lq_038a.jpg',
              '/assets/catalog/cat2/01/lq_038b.jpg'              
            ]  
          },
          {
            id: '039',
            nombre: 'Bateas para Lavar',
            subcat: 'null',
            descripcion: 'null',
            portadaImgUrl: '/assets/catalog/card-front/039a.jpg',
            dimensiones: [''],
            tags: ['casa', 'jardin', 'bateas', 'lavatorio', 'lavar'],
            galeriaImgUrls: [
              '/assets/catalog/cat2/02/lq_039a.jpg',
              '/assets/catalog/cat2/02/lq_039b.jpg'              
            ]  
          }
        ]
      },
      {
        id: 'cat3',
        nombre: 'Cubiertas',
        productos: [
          {
            id: '049',
            nombre: 'Caballetes Galvanizados',
            subcat: 'null',
            descripcion: 'null',
            portadaImgUrl: '/assets/catalog/card-front/049a.jpg',
            dimensiones: [''],
            tags: ['cubiertas', 'caballete', 'galvanizado'],
            galeriaImgUrls: [
              '/assets/catalog/cat3/01/lq_049a.jpg',
              '/assets/catalog/cat3/01/lq_049b.jpg'              
            ]  
          },
          {
            id: '050',
            nombre: 'Canales Galvanizados',
            subcat: 'null',
            descripcion: 'null',
            portadaImgUrl: '/assets/catalog/card-front/050a.jpg',
            dimensiones: [''],
            tags: ['cubiertas', 'canales', 'canaletas', 'galvanizado'],
            galeriaImgUrls: [
              '/assets/catalog/cat3/04/lq_050a.jpg',
              '/assets/catalog/cat3/04/lq_050b.jpg'              
            ]  
          }
        ]
      },
      {
        id: 'cat4',
        nombre: 'Hornos y Quinchos',
        productos: [
          {
            id: '066',
            nombre: 'Horno/Fogón Envolvente enchapado',
            subcat: 'null',
            descripcion: 'null',
            portadaImgUrl: '/assets/catalog/card-front/066a.jpg',
            dimensiones: [''],
            tags: ['horno', 'quincho', 'fogon'],
            galeriaImgUrls: [
              '/assets/catalog/cat4/01/lq_066a.jpg',
              '/assets/catalog/cat4/01/lq_066b.jpg'              
            ]  
          },
          {
            id: '067',
            nombre: 'Motor de Quincho',
            subcat: 'null',
            descripcion: 'null',
            portadaImgUrl: '/assets/catalog/card-front/067a.jpg',
            dimensiones: [''],
            tags: ['motor', 'quincho'],
            galeriaImgUrls: [
              '/assets/catalog/cat4/04/lq_067a.jpg',
              '/assets/catalog/cat4/04/lq_067b.jpg'              
            ]  
          }
        ]
      }
    ]
  }
]
