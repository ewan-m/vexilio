import { Base } from "./base";

export type Team = Base & {
  name: string;
  description: string;
  code: string;
  members: {
    email: string;
    name?: string;
    image?: string;
  }[];
};
