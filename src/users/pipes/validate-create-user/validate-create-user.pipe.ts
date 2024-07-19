import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log(metadata.metatype);

    value.name = value.name.toUpperCase();
    value.age = parseInt(value.age.toString());
    return value;
  }
}
