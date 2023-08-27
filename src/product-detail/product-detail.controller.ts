import { Controller, Post, Get, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CreatePoductDetailDto } from './dto/product-detail.dto';
import { ProductDetailService } from './product-detail.service';
import { ProductDetail } from './product-detail.entity';

@Controller('product-detail')
export class ProductDetailController {

    constructor(private productDetailService: ProductDetailService){}

    @Get()
    getDetails(): Promise<ProductDetail[]>{
        return this.productDetailService.getDetail()
    }

    @Get(':id')
    getOneDetail(@Param('id', ParseIntPipe) id:number): Promise<ProductDetail>{
        return this.productDetailService.getOneDetail(id)
    }

    @Post()
    createProduct(@Body() newProduct: CreatePoductDetailDto): Promise<ProductDetail>{
        return this.productDetailService.createDetail(newProduct)
    }

}
