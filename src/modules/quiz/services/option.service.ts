import { Injectable } from "@nestjs/common";
import { OptionRepository } from "../repositories/option.repository";

@Injectable()
export class OptionService{
    constructor(private optionRepository: OptionRepository){}

}