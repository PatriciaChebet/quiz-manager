import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { QuizRepository } from './repositories/quiz.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuestionController } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
import { QuestionRepository } from './repositories/question.repository';
import { Question } from './entities/question.entity';

@Module({
  controllers: [QuizController, QuestionController],
  imports: [TypeOrmModule.forFeature([Quiz, Question])],
  providers: [QuizService, QuizRepository, QuestionService, QuestionRepository]
})
export class QuizModule {}
