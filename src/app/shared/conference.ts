import { School } from "./school";

export interface Conference {
    id: number;
    name: string;
    url: string;
    schools: School[];
}
