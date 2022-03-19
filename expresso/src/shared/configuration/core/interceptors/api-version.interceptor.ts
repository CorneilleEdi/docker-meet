import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { CONFIGURATIONS } from '../../configuration';

@Injectable()
export class AppVersionInterceptor implements NestInterceptor {
  constructor(private readonly configService: ConfigService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const httpContext = context.switchToHttp();
    const response = httpContext.getResponse();

    response.setHeader(
      'X-App-Version',
      this.configService.get(CONFIGURATIONS.VERSION),
    );

    return next.handle();
  }
}
