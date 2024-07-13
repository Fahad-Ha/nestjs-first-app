import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  private fakeUsers: CreateUserDto[] = [
    { name: 'Fahad', email: 'Fahad@test.com', age: 25 },
    { name: 'Test', email: 'Test@test.com', age: 22 },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetail: CreateUserDto) {
    this.fakeUsers.push(userDetail);
    return;
  }

  fetchUserById(id: string) {
    return { id, name: 'User3', email: 'user@example.com', age: 30 };
  }
}
