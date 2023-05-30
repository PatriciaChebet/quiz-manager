import { Controller, Get, Post, Body, HttpCode, UsePipes, ValidationPipe, Param, ParseIntPipe } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/quiz.create.dto';
import { Quiz } from '../entities/quiz.entity';

@Controller('quiz')
export class QuizController {

    constructor(private quizService: QuizService){}

    @Get('/')
    async getAllQuiz(): Promise<Quiz[]>{
        return await this.quizService.getAllQuiz();
    }

    @Get('/:id')
    async GetQuizById(@Param('id', ParseIntPipe) id: number){
        return await this.quizService.getQuizById(id);
    }


    @Post('/create')
    @UsePipes(ValidationPipe)
    @HttpCode(201)
    async createQuiz(@Body() quizData : CreateQuizDto){
        return await this.quizService.createNewQuiz(quizData);
    }
}
