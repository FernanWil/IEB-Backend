import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>){}

    getProducts(){
        return this.productRepository.find()
    }

    getOneProduct(id: number){
        return this.productRepository.findOne({ where: {idProduct:id}})
    }
    
    createProduct(product: CreateProductDto){
        const newProduct = this.productRepository.create(product)
        return this.productRepository.save(newProduct)
    }

}
