import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuizRepository } from "./quiz.repository";
import { CreateQuizDto } from "./dto/quiz.create.dto";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { QuestionRepository } from "./question.repository";
import { Question } from "./question.entity";
import { Quiz } from "./quiz.entity";

@Injectable()
export class QuestionService {

    constructor(private questionRepository: QuestionRepository){}

    async createQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<Question>{
        const newQuestion =  await this.questionRepository.save({
            question: question.question
        });

        quiz.questions = [...quiz.questions, newQuestion]
        await quiz.save();

        return newQuestion;
    }

  
}