import {
  Body,
  Controller,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { IsString, ValidateNested } from 'class-validator';
import { ValidationExceptionFilter } from './validation-exception.filter';

export class NestedDto {
  @IsString()
  nestedProp: string;
}

class MyDto {
  @ValidateNested({ message: 'My Message' })
  pagination: NestedDto;
}

@Controller()
export class AppController {
  @Post()
  @UsePipes(ValidationPipe)
  @UseFilters(ValidationExceptionFilter)
  async getUser(@Body() payload: MyDto) {
    return 'hello';
  }
}
