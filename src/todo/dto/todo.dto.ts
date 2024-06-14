import { IsString } from "class-validator"

export class TodoDto{

    @IsString()
    taskName:string

    @IsString()
    taskStatus: string
}