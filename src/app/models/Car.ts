

/**
 * Class qui represente la structure de cars
 * 
 */
export class Car{

    public name:string;
    public  pays:string;
    public coverImage:string;
    public power:number ;
    public perf:number;

    constructor(name:string, pays:string, coverImage:string, power:number , perf:number) {
        this.name = name;
        this.pays = pays;
        this.coverImage = coverImage;
        this.power = power;
        this.perf = perf;

    }
}

