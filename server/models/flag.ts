import { Base } from "./base";


export type Flag = Base & {
    name: string;
    description: string;
    flagCode: string;
    teamCode: string;
    envGroupCode: string;
    values: Record<string, boolean>;
}


export const flag: Flag = {
    createdAt: "",
    createdBy: "",
    name: "Validation service",
    description: "When enabled blah bla",
    flagCode: "validation_service",
    teamCode: "rnr",
    envGroupCode: "oea",
    values: {
        "test": true,
        "dev": true,
        "prod": true,
        "sandbox": true,
    }
}