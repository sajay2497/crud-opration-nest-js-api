import * as mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true }
})




export interface Products {
    id: string;
    title: string;
    description: string;
    price: number;
}


// export interface product{
//     id:string,
//     title:string,
//     desc:string
//     status:ProductStatus
// }

// export enum ProductStatus{
//     DONE='DONE',
//     IN_PROGRESS='IN_PROGRESS',
//     OPEN='OPEN'
// }