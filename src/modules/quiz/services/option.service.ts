import { Injectable } from "@nestjs/common";
import { OptionRepository } from "../repositories/option.repository";
import { Option } from "../entities/option.entity";
import { Question } from "../entities/question.entity";
import { CreateOptionDto } from "../dto/create-option.dto";

@Injectable()
export class OptionService{
    constructor(private optionRepository: OptionRepository){}

    async createOption(option: CreateOptionDto, question: Question): Promise<Option>{
        const newOption = await this.optionRepository.save({
            text: option.text,
            isCorrect: option.isCorrect
        });

        question.options = [...question.options, newOption]
        await question.save()

        
        return newOption;
    }

}