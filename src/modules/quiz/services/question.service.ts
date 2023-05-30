import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuizRepository } from "../repositories/quiz.repository";
import { CreateQuizDto } from "../dto/quiz.create.dto";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { QuestionRepository } from "../repositories/question.repository";
import { Question } from "../entities/question.entity";
import { Quiz } from "../entities/quiz.entity";

@Injectable()
export class QuestionService {

    constructor(private questionRepository: QuestionRepository){}

    async findQuestionById(id: number): Promise<Question>{
        return await this.questionRepository.findOne({
            relations: ['quiz', 'options'],
            where: {
                id: id
            }
        });
    }

    async createQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<Question>{
        const newQuestion =  await this.questionRepository.save({
            question: question.question
        });

        quiz.questions = [...quiz.questions, newQuestion]
        await quiz.save();

        return newQuestion;
    }

  
}