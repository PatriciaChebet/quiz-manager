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

    @Post('/')
    @UsePipes(ValidationPipe)
    @HttpCode(200)
    createQuiz(@Body() quizData : CreateQuizDto){
        return {data: quizData};
    }
}
