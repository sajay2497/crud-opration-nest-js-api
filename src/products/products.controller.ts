import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Products } from './products.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productservice: ProductsService) { }

    @Get()
    getAllProducts() {
        return this.productservice.getAllProduct()
    }

    @Post()
    // createProduct(@Body('title') title: string, @Body('desc') desc: string): product {
    //     return this.productservice.createProduct(title, desc);
    // }
    createProduct(@Body() body) {
        return this.productservice.createProduct(body);
    }
    @Get('/:id')
    singleproductget(@Param('id') id) {
        return this.productservice.singleproductget(id);
    }
    @Delete('/:id')
    singledelete(@Param('id') id) {
        return this.productservice.singleproductdelete(id);
    }

    @Patch('/:id')
    updateprodcut(@Param('id') id, @Body() body) {
        return this.productservice.singleproductupdate(id, body)
    }
}
