import { Injectable } from "@nestjs/common";

@Injectable()
export class QuizService {

    getAllQuiz(){
        return [2, 6, 8, "From service"];
    }
}