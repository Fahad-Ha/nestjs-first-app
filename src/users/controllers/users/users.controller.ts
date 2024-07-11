import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
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
}
