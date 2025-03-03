import { Injectable, CanActivate, ExecutionContext, ForbiddenException, UnauthorizedException } from "@nestjs/common";
import { Reflector } from '@nestjs/core';
import { Role } from '@enum/role.enum';
import { ROLES_KEY } from '@decorator/roles.decorator';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {
  }

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    if (!user) throw new UnauthorizedException("You are not authorized");
    const hasAllow = requiredRoles.some((role) => user?.role === role);
    if(!hasAllow) throw new ForbiddenException("You are not allowed to access this action")
    return true;
  }
}