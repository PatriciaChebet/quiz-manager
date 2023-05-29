import { Controller, Get, Post, Body, HttpCode, UsePipes, ValidationPipe, Param, ParseIntPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/quiz.create.dto';

@Controller('quiz')
export class QuizController {

    constructor(private quizService: QuizService){}

    @Get('/')
    getAllQuiz(){
        return this.quizService.getAllQuiz();
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
