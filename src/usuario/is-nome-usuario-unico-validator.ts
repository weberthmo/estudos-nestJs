import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuarioService } from "./usuario.service";

@Injectable()
@ValidatorConstraint({ async: true })
export class IsNomeDeUsuarioUnicoConstraint implements ValidatorConstraintInterface{

    constructor(private usuarioService: UsuarioService){} //injetada usurio service
    
    validate(nomeDeUsuario: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        // throw new Error("Method not implemented.");
        return !!!this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario)
    }
    // defaultMessage?(validationArguments?: ValidationArguments): string {
    //     throw new Error("Nome não unico");
    // }
}
export function IsNomeDeUsuarioUnico(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor, //função como contruir o objeto alvo
        propertyName: propertyName, //propridade para fazer a validação
        options: validationOptions, //configurações de validação
        constraints: [], //validação extra
        validator: IsNomeDeUsuarioUnicoConstraint, //pode receber dois tipos de entrada, função ou classe
      }); 
    };
  }