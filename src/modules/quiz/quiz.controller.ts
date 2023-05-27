import { Controller, Get } from '@nestjs/common';

@Controller('quiz')
export class QuizController {

    @Get('/')
    getALlQuiz(){
        return [1, 2, 3, 4];
    }
}
