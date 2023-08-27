import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePoductDetailDto } from './dto/product-detail.dto';
import { ProductDetail } from './product-detail.entity';

@Injectable()
export class ProductDetailService {

    constructor(@InjectRepository(ProductDetail)private productDetailRepository: Repository<ProductDetail>){}

    getDetail(){
        return this.productDetailRepository.find({
         relations: ["products"]
        })
    }

    getOneDetail(id: number){
        return this.productDetailRepository.findOne({ where: {idProductDetail: id}, relations: ["products"]})
    }

    createDetail(productDetail: CreatePoductDetailDto){
        const newDetail = this.productDetailRepository.create(plainToClass(ProductDetail , productDetail))
        return this.productDetailRepository.save(newDetail);
        
    }
}
