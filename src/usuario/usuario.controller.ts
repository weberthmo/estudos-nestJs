/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Res } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('users') // define classe como controladora
export class UsuarioController {
    
    //instanciação do serviço de usuarios
    // private usuariosService = new UsuarioService(); //instanciada
    constructor(private usuarioService: UsuarioService){} //injetada

    
    @Get(':nomeDeUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string){
        const usuarioEncontrado = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario)
        if (!usuarioEncontrado) {
            // throw new NotFoundException("Não encontrado"); //codigo de erro
            throw new NotFoundException(
                {
                    statusCode: HttpStatus.NOT_FOUND,
                    message: "Usuário não encontrado"
                }
            );
        }
        return usuarioEncontrado
    }

    //metodo
    //resposta em NestJs
    @Post()
    public cria(@Body() usuario: Usuario): Usuario {
        const usuarioCriado = this.usuarioService.cria(usuario)
        return usuarioCriado;
    }

    //resposta com express
    //implementa localização da criação do cadastro, nivel REST
    // @Post()
    // public cria(@Body() usuario: Usuario, @Res() res) {
    //     const usuarioCriado = this.usuarioService.cria(usuario)
    //     res.status(HttpStatus.CREATED)
    //         .location(`/users/${usuarioCriado.nomeDeUsuario}`)
    //         .json(usuarioCriado);
    // }


    
}
