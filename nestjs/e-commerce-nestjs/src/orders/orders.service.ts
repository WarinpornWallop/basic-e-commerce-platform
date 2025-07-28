import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderInfoEntity } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ProductsService } from '../products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderInfoEntity)
    private readonly orderRepository: Repository<OrderInfoEntity>,
    private readonly productsService: ProductsService,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<OrderInfoEntity> {
    const productResult = await this.productsService.findOne(
      createOrderDto.productId,
    );
    if (!productResult) {
      throw new NotFoundException('product not found');
    }
    try {
      const order = this.orderRepository.create(createOrderDto);
      return await this.orderRepository.save(order);
    } catch (error) {
      throw new InternalServerErrorException('Failed to create order');
    }
  }

  async findAll(): Promise<OrderInfoEntity[]> {
    return await this.orderRepository.find();
  }

  async findOne(id: number): Promise<OrderInfoEntity> {
    const order = await this.orderRepository.findOne({
      where: { orderId: id },
    });
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return order;
  }

  // async findAllOrdersWithProduct(): Promise<OrderInfoEntity[]> {
  //   return await this.orderRepository.find({
  //     relations: ['product'],
  //   });
  // }

//   async findOrdersWithProductName(): Promise<any[]> {
//   return await this.orderRepository
//     .createQueryBuilder('order')
//     .leftJoinAndSelect('order.product', 'product')
//     .select(['order.id', 'order.quantity', 'product.name'])
//     .getMany();
// }

  async update(
    id: number,
    updateOrderDto: UpdateOrderDto,
  ): Promise<OrderInfoEntity> {
    const order = await this.orderRepository.preload({
      ...updateOrderDto,
      orderId: id,
    });
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return await this.orderRepository.save(order);
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.orderRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return { message: 'Delete Successful' };
  }
}
