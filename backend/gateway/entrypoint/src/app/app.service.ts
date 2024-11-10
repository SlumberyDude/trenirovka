import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('EXERCISES_SERVICE') private client: ClientProxy) {}

  getData(): Observable<number> {
    return this.client.send({ cmd: 'sum' }, [1, 2, 3]);
  }
}
