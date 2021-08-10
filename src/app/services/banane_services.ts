import { Injectable } from "@angular/core";

@Injectable()// injectable ca veut dire que c'est un services

export class BananeService {
  
    
   fruit:string = "Banane Plantain";
   prix:number = 4;

   
    constructor(){}
        getFruit(){
            console.log(this.fruit);
        
    }

   ngOnInit():void {

   }

}