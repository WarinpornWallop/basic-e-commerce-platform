import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsNumber()
  readonly price: number;

  @IsOptional()
  @IsString()
  readonly createdAt?: Date;
  
  @IsOptional()
  @IsString()
  readonly updatedAt?: Date;
}
