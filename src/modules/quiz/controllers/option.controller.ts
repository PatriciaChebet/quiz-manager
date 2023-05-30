import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { OptionService } from "../services/option.service";
import { QuestionService } from "../services/question.service";
import { CreateOptionDto } from "../dto/create-option.dto";

@Controller('/question/option')
export class OptionController{
    constructor(private optionService: OptionService, private questioService: QuestionService){}

    @Post('')
    @UsePipes(ValidationPipe)
    SaveOptionToQuestion(@Body() createOption: CreateOptionDto){
        return createOption;
    }


}