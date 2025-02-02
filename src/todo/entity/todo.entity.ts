import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo{
  
    @PrimaryGeneratedColumn()
    id: number;
     
    @Column()
    taskName: string;

    @Column()
    taskStatus: string;

}