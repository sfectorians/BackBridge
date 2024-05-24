import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProductDto: CreateProductDto) {
    return await this.prisma.products.create({ data: createProductDto });
  }

  async findAll() {
    return await this.prisma.products.findMany({
      include : {
        user  : true
      }
    });
  }

  async findOne(id: number) {
    return await this.prisma.products.findUnique({
      where: {
        id,
      },
      include : {
        user : true
      }

    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.prisma.products.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.products.delete({
      where: {
        id,
      },
    });
  }
}
