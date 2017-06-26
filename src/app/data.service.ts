import { Injectable } from '@angular/core';
import { DataCatalog } from './data-catalog';
import { PRODUCTS } from './mock-data';

@Injectable()
export class DataService {

  getProducts(): Promise<DataCatalog[]> {
    return Promise.resolve(PRODUCTS);
  }

}
