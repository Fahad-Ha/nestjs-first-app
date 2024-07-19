import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
    console.log(sortDesc);
    return this.usersService.fetchUsers();
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'Fahad',
        email: 'Fahad@test.com',
        posts: [
          {
            id: 1,
            title: 'Post 1',
          },
          {
            id: 2,
            title: 'Post 2',
          },
        ],
      },
    ];
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    return this.usersService.createUser(userData);
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.fetchUserById(id);
  }
}
