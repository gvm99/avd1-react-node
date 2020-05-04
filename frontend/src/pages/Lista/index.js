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




export default class Clientes extends Component {

    state = {
        list: [],
        livrosInfo:{},
        page:1
    }
    async componentDidMount(page = 1){
        const response = await api.get(`/listaLivros?page=${page}`)
        const {docs, ...livrosInfo} = response.data
        this.setState({list : docs, livrosInfo, page})
    }
    nextPage = () =>{
        const {page, livrosInfo} = this.state
        if (page === livrosInfo.pages) return;
        const pageNumber = page + 1
        this.componentDidMount(pageNumber)
    }
    handleDelete = async (id) => {
        if(window.confirm('Você está excluindo um livro, deseja prosseguir')){
            await api.delete(`/livros/${id}`)
            this.componentDidMount()
        }
    }
    prevPage = () =>{
        const {page, livrosInfo} = this.state
        if (page === 1) return;
        const pageNumber = page - 1
        this.componentDidMount(pageNumber)
    }
    render() {
        const { list } = this.state
        return (
            <Container>
                <Title>Lista de Livros</Title>
                <Table>
                    <thead>
                        <tr>
                        <th>Foto de Capa</th>
                        <th>Autor</th>
                        <th>Nome do Livro</th>
                        <th>ISBN</th>
                        <th>Nome da Editora</th>
                        <th>Número de Páginas</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(e=>(
                            <tr>
                                <td><img src={`http://localhost:3333/livros/${e.filePath}`} style={{height: "100px"}}  /> </td>
                                <td>{e.author}</td>
                                <td>{e.nomeLivro}</td>
                                <td>{e.isbn}</td>
                                <td>{e.editora}</td>
                                <td>{e.numeroPaginas}</td>
                                <td>
                                    <ButtonTable onClick={()=>this.handleDelete(e._id)} tipo="del" >Excluir</ButtonTable>
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </Table>
                <Actions>
                    <button onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Próximo</button>
                </Actions>
        </Container>
        )
    }
}

