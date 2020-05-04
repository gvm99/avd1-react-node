import React from 'react'
import {
    Title,
    Button,
    Container
  } from "./style";
import { Link } from 'react-router-dom'



export default function Header() {
    return (
        <Container>
            <Title>Livros Online</Title>
            
            <div>
            
            <Button >
            <Link to="/listalivro">Lista de Livros</Link>
            </Button>
            <Button  tipo="add"><Link to="/">Cadastro</Link></Button>
            </div>
        </Container>
        
    )
}