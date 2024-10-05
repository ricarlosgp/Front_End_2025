import { useState } from "react";
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api'

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background_jaleco, Background_semus, Background_timbiras } from './styles';

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const navigate = useNavigate();
    
    function handleSignUp() {
        if(!name || !email || !password){
            return alert("Preencha todos os campos!");
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigate("/");
            })
            .catch(error => {
                console.log(error);
                if(error.response) {
                    alert(error.response.data.message);
                }else {
                    alert("Não foi possível cadastrar");
                }
            })
}
    return (
        <Container>
            <Background_jaleco />

            <Form>
                <Background_semus />
                <div className="texto">
                <h1>Crie sua conta</h1>

                <Input
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSignUp} />

                <Link to="/">
                    Voltar para o login
                </Link>
                </div>
                <Background_timbiras />
            </Form>
        </Container>
    );
}
