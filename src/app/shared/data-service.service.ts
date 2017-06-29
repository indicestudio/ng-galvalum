import { Injectable } from '@angular/core';
import { DataCatalog } from './data-catalog.model';
import { DATA } from './mock-data';

@Injectable()
export class DataService {

  private categoriesNames: string[] = [];

  getData(): Promise<DataCatalog[]> {
    return Promise.resolve(DATA);
  }

}
