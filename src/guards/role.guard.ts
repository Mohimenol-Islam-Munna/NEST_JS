import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Roles } from 'src/decorators/roles.decorator';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('role guard');

    const roles = this.reflector.get(Roles, context.getHandler());

    console.log('🚀 ~ RoleGuard ~ roles:', roles);

    const request = context.switchToHttp().getRequest()

    // console.log("🚀 ~ RoleGuard ~ request:", request)

    return true;
  }
}
