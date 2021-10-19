export class Order{
    customer: {
        name:string;
        lastname:string;
        phone:string;
        address:string;
        delivery:Date;
    };
    items:{
        id:number;
        name:string;
        description:string;
        category:string;
        image:string;
        price:number;
        quantity:number;
        selected:boolean;
    };
}