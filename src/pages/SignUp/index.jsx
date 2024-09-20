import { useState } from "react";
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background, TimbirasProfile, SemusProfile } from './styles';
import { Link } from 'react-router-dom';

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp() {
        console.log(name, email, password)
    }

    return (
        <Container>
            <Background>
                <TimbirasProfile> </TimbirasProfile>
                <SemusProfile> </SemusProfile>
            </Background>
            <Form>
                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e=> setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e=> setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e=> setPassword(e.target.value)}
                />

                <Button title="Cadastrar" dnClick={handleSignUp} /> 

                <Link to="/">
                    Voltar para o login
                </Link>   
            </Form>            
            
        </Container>
    );
}