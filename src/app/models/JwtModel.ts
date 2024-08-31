export interface JwtRes{
    jwt: string;
}

export interface JwtData{
    sub: string;
    authorization: string[];
}