import { Injectable } from '@angular/core';
import { DataCatalog } from './data-catalog';
import { Products } from './data-catalog';
import { Categories } from './data-catalog';
import { DATA } from './mock-data';

@Injectable()
export class DataService {

  private categoriesNames: string[] = [];
  private products: Products[] = [];
  private categories: Categories[] = [];

  getData(): Promise<DataCatalog[]> {
    return Promise.resolve(DATA);
  }

  private getCategories(): Categories[] {
    DATA.forEach(x=>x.categorias.forEach(x=>this.categories.push(x)));
    return this.categories;
  }

  getCategoriesNames(): string[] {
    this.getCategories().forEach(x=>this.categoriesNames.push(x.nombre));
    return this.categoriesNames;
  }


}
