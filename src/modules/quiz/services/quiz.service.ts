import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuizRepository } from "../repositories/quiz.repository";
import { CreateQuizDto } from "../dto/quiz.create.dto";
import { Quiz } from "../entities/quiz.entity";

@Injectable()
export class QuizService {

    constructor(private quizRepository: QuizRepository){}

    getAllQuiz(){
        return [2, 6, 8, "From service"];
    }

    async getQuizById(id: number): Promise<Quiz> {
        return await this.quizRepository.findOne({
            relations: ['questions'],
            where:{
                id: id
            }
        });
    }

    async createNewQuiz(quiz: CreateQuizDto){
        return await this.quizRepository.save(quiz);
    }
}