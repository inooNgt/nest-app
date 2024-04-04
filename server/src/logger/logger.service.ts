import { Injectable, Scope, ConsoleLogger } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
// 我们需要继承 ConsoleLogger 类并添加自定义方法 customLog
export class LoggerService extends ConsoleLogger {
  customLog() {
    this.log('Please feed the cat!');
  }
}
