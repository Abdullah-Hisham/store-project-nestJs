import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor() {
    super({
      // Extract Token from Authorization header: Bearer <token>
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // Do not ignore token expiration
      ignoreExpiration: false,
      // Signing key
      secretOrKey: process.env.JWT_SECRET || "your-secret-key",
    });
  }

  // This method is called automatically after token validation
  // The returned value is added to request.user
  async validate(payload: { sub: number; email: string; role: string }) {
    return {
      userId: payload.sub,
      email: payload.email,
      role: payload.role,
    };
  }
}
