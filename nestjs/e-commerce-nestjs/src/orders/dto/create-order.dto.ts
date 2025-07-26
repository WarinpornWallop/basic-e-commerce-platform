import { IsNotEmpty, IsNumber, Min, IsOptional, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  readonly orderId: number;

  @IsNotEmpty()
  @IsNumber()
  readonly productId: number;

  @IsNumber()
  @Min(1)
  readonly quantity: number = 1;

  @IsOptional()
  @IsString()
  readonly createdAt?: Date;

  @IsOptional()
  @IsString()
  readonly updatedAt?: Date;
}
