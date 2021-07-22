import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Products } from './products.model';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private readonly prodcutModel: Model<Products>) { }
    private product: Products[] = []

    async getAllProduct() {
        const resdata = await this.prodcutModel.find().select({ __v: 0 });
        return resdata
    }

    async createProduct(body) {
        const newProduct = new this.prodcutModel({
            title: body.title,
            description: body.desc,
            price: body.price
        })
        const resdata = await newProduct.save();
        return resdata
    }
    async singleproductget(id) {
        const resdata = await this.prodcutModel.findById(id).select({ __v: 0 });
        return {
            status: 1,
            data: resdata
        }

    }
    async singleproductdelete(id) {
        try {
            await this.prodcutModel.findByIdAndDelete(id);
            return {
                status: 1,
                message: 'Delete Successfully!!'
            }
        } catch (error) {
            return {
                status: 0,
                message: error.message
            }
        }

    }
    async singleproductupdate(id, body) {
        try {
            const resdata = await this.prodcutModel.findByIdAndUpdate(id, {
                $set: {
                    price: body.price,
                }
            }, { new: true })
            return {
                status: 1,
                data: resdata,
                message: 'Update Successfully!!'
            }

        } catch (error) {
            return {
                status: 0,
                message: error.message
            }
        }
    }
}
