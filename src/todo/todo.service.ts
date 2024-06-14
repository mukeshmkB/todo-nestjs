import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entity/todo.entity';
import { TodoDto } from './dto/todo.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {

  constructor(@InjectRepository(Todo) private todoRepository: Repository<Todo>){}

   async getAllTodo(): Promise<Todo[]>{
        return await this.todoRepository.find()
    }

   async getTodoById(id: number): Promise<Todo>{
       return await this.todoRepository.findOneBy({id})
   }
   async createTodo(todoDto: TodoDto): Promise<Todo>{
       return await this.todoRepository.save(todoDto)
   }

   async updateTodo(id: number, todoDto: TodoDto): Promise<Todo>{

           const todoItem =  await this.todoRepository.findOneBy({id})

           if(!todoItem){
              throw new Error ('Not Todo Id Found')
           }

           Object.assign(todoItem, todoDto);

           return await this.todoRepository.save(todoItem);

   }

   async deleteTodo(id: number):Promise<void>{
        await this.todoRepository.delete(id);
   } 

}
