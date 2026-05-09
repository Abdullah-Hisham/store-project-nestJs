import { createParamDecorator, ExecutionContext } from "@nestjs/common";

// Custom decorator to fetch the current user data from the request
// Usage: @CurrentUser() user: UserPayload
export const CurrentUser = createParamDecorator(
  (data: keyof any | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    // If a specific field is specified, return only that field
    return data ? user?.[data] : user;
  },
);
