import { Entity, PrimaryGeneratedColumn, Column, BeforeUpdate, ManyToOne } from 'typeorm';
import { ProductInfoEntity } from '../../products/entities/product.entity';

@Entity('order_info')
export class OrderInfoEntity {
  @PrimaryGeneratedColumn()
  orderId: number;

  @Column()
  productId: number;

  @Column({ type: 'int', default: 1 })
  quantity: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt?: Date;

  // @ManyToOne(() => ProductInfoEntity)
  // product: ProductInfoEntity;

  @BeforeUpdate()
  updateTimestamp() {
    const now = new Date();
    now.setHours(now.getHours() - 7);
    this.updatedAt = now;
  }
}
