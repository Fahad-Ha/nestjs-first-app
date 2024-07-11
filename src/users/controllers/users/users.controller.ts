import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return [{ username: 'Fahad', email: 'Fahad@test.com' }];
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
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return userData;
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return { id };
  }
}
