import "next-auth";
import { DefaultJWT } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface JWT extends DefaultJWT {
    id?: string;
  }
}
