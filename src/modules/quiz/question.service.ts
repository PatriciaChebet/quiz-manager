import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuizRepository } from "./quiz.repository";
import { CreateQuizDto } from "./dto/quiz.create.dto";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { QuestionRepository } from "./question.repository";
import { Question } from "./question.entity";

@Injectable()
export class QuestionService {

    constructor(private questionRepository: QuestionRepository){}

    async createQuestion(question: CreateQuestionDto): Promise<Question>{
        return await this.questionRepository.save(question);
    }

  
}