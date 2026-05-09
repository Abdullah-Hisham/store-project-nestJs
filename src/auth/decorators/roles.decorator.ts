import { SetMetadata } from "@nestjs/common";

// Custom decorator to specify required roles
// Usage: @Roles('ADMIN')
export const Roles = (...roles: string[]) => SetMetadata("roles", roles);
