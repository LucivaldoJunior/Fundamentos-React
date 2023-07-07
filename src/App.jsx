import React from "react";

import Card from "./components/layout/Card";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";

export default _ =>

    <div id="app">
        <h1>Fundamentos React</h1>

        <Card titulo="Desafio Aleatorio">
            <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="Fragamento">
            <Fragmento/>
        </Card>

        <Card titulo="Com Parametro">
        <ComParametro
            titulo="Situação do aluno"
            aluno="Pedro" nota={7.3} />
        </Card>

        <Card titulo="Primeiro Componente">
        <Primeiro></Primeiro>
        </Card>

       
       
    </div>

