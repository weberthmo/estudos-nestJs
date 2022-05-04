/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('users') // define classe como controladora
export class UsuarioController {
    
    //instanciação do serviço de usuarios
    // private usuariosService = new UsuarioService(); //instanciada
    constructor(private usuarioService: UsuarioService){} //injetada

    //metodo
    @Post()
    public cria(@Body() usuario){
        const usuarioCriado = this.usuarioService.cria(usuario)
        return usuarioCriado;
    }
}
