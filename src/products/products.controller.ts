import { Controller, Post, Get, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/product.dto';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {

    constructor( private productService: ProductsService){}

    @Get()
    getProducts(): Promise<Product[]>{
        return this.productService.getProducts();
    }

    @Get(':id')
    getOneProduct(@Param('id', ParseIntPipe) id:number): Promise<Product>{
        return this.productService.getOneProduct(id);
    }

    @Post()
    CreateProduct(@Body() newProduct: CreateProductDto): Promise<Product>{
        return this.productService.createProduct(newProduct)
    }

}
