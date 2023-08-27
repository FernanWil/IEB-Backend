import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { ProductDetail } from "src/product-detail/product-detail.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    idProduct: number

    @Column()
    nameProduct: string

    @Column()
    description: string

    @Column({ type: 'decimal' })
    price: number

    @OneToMany(() => ProductDetail, productDetail => productDetail.products)
    productDetails: ProductDetail[]
}