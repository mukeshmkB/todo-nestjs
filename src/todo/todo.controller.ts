import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './entity/todo.entity';
import { TodoDto } from './dto/todo.dto';

@Controller('todo')
export class TodoController {

    constructor(private todoService: TodoService){}

    @Get()
    getAllTodo(): Promise<Todo[]>{
        return this.todoService.getAllTodo()
    }

    @Get(':todoId')
    getTodoById(@Param('todoId', ParseIntPipe) todoId: number): Promise<Todo>{
        return this.todoService.getTodoById(todoId)
    }

    @Post()
    createTodo(@Body() todoDto: TodoDto): Promise<Todo>{
        return this.todoService.createTodo(todoDto)
    }

    @Put(':todoId')
    updateTodo(@Param('todoId', ParseIntPipe)todoId: number, @Body() todoDto: TodoDto): Promise<Todo>{
          return this.todoService.updateTodo(todoId, todoDto)
    }

    @Delete(':todoId')
       deleteTodo(@Param('todoId', ParseIntPipe) todoId: number): Promise<void>{
            return this.todoService.deleteTodo(todoId)
       }
}
