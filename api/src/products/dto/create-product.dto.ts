import { ApiProperty } from '@nestjs/swagger';
export class CreateProductDto {
    @ApiProperty()
    productName : string 
    @ApiProperty()
    price : number 
    @ApiProperty()
    description : string
    @ApiProperty()
    imageUrl : string
    @ApiProperty()
    category : string
    @ApiProperty()
    usersId : number
}
