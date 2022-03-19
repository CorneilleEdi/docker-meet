import { Injectable } from '@nestjs/common';
import * as faker from 'faker';

@Injectable()
export class AppService {
  getUser() {
    return this.generateUser(1);
  }

  getUsers(count: string | number) {
    count = Number(count) || 1;

    return this.generateUser(count);
  }

  private generateUser(count: number) {
    const users = [];

    let i = 0;
    while (i < count) {
      const uuid = faker.datatype.uuid();
      const firstName = faker.name.findName();
      const lastName = faker.name.lastName();
      const phoneNumber = faker.phone.phoneNumber();
      const city = faker.address.city();
      const state = faker.address.state();
      const country = faker.address.country();

      users.push({
        uuid,
        firstName,
        lastName,
        phoneNumber,
        city,
        state,
        country,
      });
      i++;
    }

    return count == 1 ? users[0] : users;
  }
}
