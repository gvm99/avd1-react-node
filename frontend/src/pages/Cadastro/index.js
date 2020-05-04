import React, { Component } from 'react'
import api from '../../services/api'

import {
    Container,
    Title,
    FormColumn,
    InputColumn,
    Button,
    ButtonTable,
    Table,
    Actions
  } from "./style";

const FormData = require('form-data')


export default class Clientes extends Component {

    state = {
        author: "",
        nomeLivro: "",
        numeroPaginas: "",
        editora:"",
        isbn:"",
        image:null,
        list: [],
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { author, nomeLivro, numeroPaginas, editora, isbn, image } = this.state
        
        var bodyFormData = new FormData();
        bodyFormData.append('author', author);
        bodyFormData.append('nomeLivro', nomeLivro);
        bodyFormData.append('numeroPaginas', numeroPaginas);
        bodyFormData.append('editora', editora);
        bodyFormData.append('isbn', isbn);

        bodyFormData.append('image', image);

        const response = await api.post('/livros', bodyFormData,
        {
            headers: {'Content-Type': 'multipart/form-data' }
        })
        
        console.log(response)
    }    

    render() {
        const { author, nomeLivro, numeroPaginas, editora, isbn } = this.state
        return (
            <Container>
                <Title>Cadastro de Livros</Title>
                <FormColumn onSubmit={this.handleSubmit}>
                <InputColumn
                    type="text"
                    name="author"
                    id="author"
                    placeholder="Digite o nome do Autor"
                    value={author}
                    onChange = { e => this.setState({ author: e.target.value })}
                />
                <InputColumn
                    type="text"
                    name="nomeLivro"
                    id="nomeLivro"
                    placeholder="Digite seu e-mail"
                    value={nomeLivro}
                    onChange = { e => this.setState({ nomeLivro: e.target.value })}
                />
                <InputColumn
                    type="text"
                    name="numeroPaginas"
                    id="numeroPaginas"
                    placeholder="Digite o número de páginas"
                    value={numeroPaginas}
                    onChange = { e => this.setState({ numeroPaginas: e.target.value })}
                />
                <InputColumn
                    type="text"
                    name="editora"
                    id="editora"
                    placeholder="Digite o nome da Editora"
                    value={editora}
                    onChange = { e => this.setState({ editora: e.target.value })}
                />
                <InputColumn
                    type="text"
                    name="isbn"
                    id="isbn"
                    placeholder="Digite o isbn"
                    value={isbn}
                    onChange = { e => this.setState({ isbn: e.target.value })}
                />
                <InputColumn
                    type="file"
                    name="image"
                    id="image"
                    placeholder="Insira a imagem"
                    onChange = { e => this.setState({ image: e.target.files[0] })}
                />
                <div>
                    <Button type="submit" tipo="add">
                    Salvar
                    </Button>
                    <Button tipo="remove">Cancelar</Button>
                </div>
                </FormColumn>
    
        </Container>
        )
    }
}

