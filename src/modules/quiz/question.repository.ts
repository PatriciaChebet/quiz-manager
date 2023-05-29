import { DataSource, Repository } from "typeorm";
import { Question } from "./question.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class QuestionRepository extends Repository<Question>{
    constructor(private dataSource: DataSource){
        super(Question, dataSource.createEntityManager());
    }
}