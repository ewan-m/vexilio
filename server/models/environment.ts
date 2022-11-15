import { Base } from "./base";


export type EnvironmentGroup = Base & {
    name: string;
    code: string;
    description?: string;
    values: string[];
}
