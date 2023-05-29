import { Controller, Get, Post, Body, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/quiz.create.dto';

@Controller('quiz')
export class QuizController {

    constructor(private quizService: QuizService){}

    @Get('/')
    getALlQuiz(){
        return this.quizService.getAllQuiz();
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    @HttpCode(201)
    async createQuiz(@Body() quizData : CreateQuizDto){
        return await this.quizService.createNewQuiz(quizData);
    }
}
