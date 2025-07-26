import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
