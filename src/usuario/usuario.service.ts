/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';

//Provider... declarado em \src\app.module.ts
@Injectable()//idica que a classe e injetavel 
export class UsuarioService {
    private usuarios: Array<Usuario> = [
        {
            id: 100,
            nomeDeUsuario: 'weberth',
            email: 'weberth@gmail.com',
            senha: 'string',
            nomeCompleto: 'string',
            dataDeEntrada: new Date()
            }
            
    ];
    public cria(usuarios: Usuario): Usuario{
        this.usuarios.push(usuarios);
        return usuarios
    }

    public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
        return this.usuarios.find(usuario => usuario.nomeDeUsuario == nomeDeUsuario);
    }

  
}
