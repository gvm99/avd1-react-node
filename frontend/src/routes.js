import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Livro from './pages/Cadastro/index'
import ListaLivro from './pages/Lista/index'

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Livro} />
            <Route path='/listalivro' component={ListaLivro} />
        </Switch>
    )
}

export default Routes;
