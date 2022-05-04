/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

//Provider... declarado em \src\app.module.ts
@Injectable()//idica que a classe e injetavel 
export class UsuarioService {
    private usuarios = []

    public cria(usuarios){
        this.usuarios.push(usuarios);
        return usuarios
    }
}
