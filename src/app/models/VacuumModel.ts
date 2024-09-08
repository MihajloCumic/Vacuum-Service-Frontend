export interface Vacuum{
    id: number;
    name: string;
    vacuumStatus: string;
    createdTimestamp: number;
}

export interface SearchParams{
    name: string;
    statuses: string[];
    dateFrom: number;
    dateTo: number;
}

export interface ErrorMessage{
    id: number;
    vacuum: Vacuum;
    message: string;
    createdTimestamp: number;
}