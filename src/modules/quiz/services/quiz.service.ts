import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuizRepository } from "../repositories/quiz.repository";
import { CreateQuizDto } from "../dto/quiz.create.dto";
import { Quiz } from "../entities/quiz.entity";

@Injectable()
export class QuizService {

    constructor(private quizRepository: QuizRepository){}

    async getAllQuiz(): Promise<Quiz[]> {
        return await this.quizRepository.createQueryBuilder('q')
        .leftJoinAndSelect('q.questions', 'qt')
        .getMany()
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