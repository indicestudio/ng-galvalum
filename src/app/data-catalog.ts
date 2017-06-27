export interface Products {
    id: string;
    nombre: string;
    subcat: string;
    descripcion: string;
    portadaImgUrl: string;
    dimensiones: string[];
    tags: string[];
    galeriaImgUrls: string[];
}

export interface Categories {
    id: string;
    nombre: string;
    productos: Products[];
}

export interface DataCatalog {
    categorias: Categories[];
}