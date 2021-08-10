import { Injectable } from '@angular/core';
import { BananeService } from './banane_services';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  name:string = 'Le beBio';
  prixResto:number | undefined ;

  constructor(private banana:BananeService) { }
  getPrice(){
    return this.prixResto = this.banana.prix * 1,4 ;
  }
}
