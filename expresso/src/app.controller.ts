import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser() {
    return this.appService.getUser();
  }

  @Get('/:count')
  getUsers(@Param('count') count: string) {
    return this.appService.getUsers(count);
  }
}
