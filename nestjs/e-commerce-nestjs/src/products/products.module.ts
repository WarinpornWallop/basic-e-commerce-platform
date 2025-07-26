import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductInfoEntity } from './entities/product.entity';
@Module({
  imports: [TypeOrmModule.forFeature([ProductInfoEntity])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}