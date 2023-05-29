import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuizRepository } from "./quiz.repository";
import { CreateQuizDto } from "./dto/quiz.create.dto";

@Injectable()
export class QuizService {

    constructor(private quizRepository: QuizRepository){}

    getAllQuiz(){
        return [2, 6, 8, "From service"];
    }

    async createNewQuiz(quiz: CreateQuizDto){
        return await this.quizRepository.save(quiz);
    }
}