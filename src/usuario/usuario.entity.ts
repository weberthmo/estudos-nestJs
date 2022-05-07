import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNomeDeUsuarioUnico } from "./is-nome-usuario-unico-validator";


export class Usuario {
    id: number;

    @Expose({name: 'username'}) //altera nome na entrada
    @IsNomeDeUsuarioUnico({message: 'Nome de usuario não e unico'}) //valida campo como unico
    @IsNotEmpty()// valida campo vazio
    @IsString()//valida campo como tipo de data
    nomeDeUsuario: string;
    
    @IsEmail()
    email: string;

   
    @Exclude({
        toPlainOnly: true
    })
    @IsNotEmpty()
    senha: string;

    @IsNotEmpty({
        message: 'Nome Obrigatório'
    })
    nomeCompleto: string;
    dataDeEntrada: Date;
}