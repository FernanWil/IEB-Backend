import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Product } from "src/products/product.entity";

@Entity()
export class ProductDetail{
    @PrimaryGeneratedColumn()
    idProductDetail: number

    @Column()
    amount: number

    @Column({type: 'decimal'})
    fullValue: number

    @Column({type: 'decimal'})
    vatValue: number

    @ManyToOne(() => Product, product => product.productDetails)
    @JoinColumn({ name: "idProduct" })
    products: Product
}