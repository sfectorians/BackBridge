
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma:PrismaService){}
async create(dto: CreateUserDto) {
   const response = await this.prisma.users.create({
      data : dto
    });
return response
  }

 async  findAllUsers() {
    return await this.prisma.users.findMany({
      
    })
  }

  async findOne(id: number) {
    return await this.prisma.users.findFirst({
      where : {
        id : id 
      }
    })
  }

async   update(id: number, dto: UpdateUserDto) {
    return await this.prisma.users.update({
      where : {
        id :id 
      }, 
      data : dto
    })
  }

 async remove(id: number) {
    return await this.prisma.users.delete({
      where : {
        id : id
      }
    });
  }
}
