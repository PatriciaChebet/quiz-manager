import * as bcrypt from 'bcrypt';
import { Injectable } from "@nestjs/common";
import { UserRegisterRequestDto } from "./dto/user-register.req.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService{

    async doUserRegistration(userRegister: UserRegisterRequestDto): Promise<User>{
        const salt = await bcrypt.genSalt();
        const password = await bcrypt.hash(userRegister.password, salt);
        const user = new User();
        user.name = userRegister.name;
        user.email = userRegister.email;
        user.password = userRegister.password;

        return await user.save();
    }

}