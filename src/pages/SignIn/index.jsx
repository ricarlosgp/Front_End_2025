import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background, Background_semus, Background_timbiras } from './styles'; 

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const {signIn} = useAuth();

    function handleSignIn(){
        console.log("Tentando fazer login com:", { email, password });
        signIn({ email, password });
    }

    return (
        <Container>
            <Background_semus/>
            <Form>
            
            
                <h1>Faça seu login</h1>

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
                
                <Button title= "Entrar" onClick={handleSignIn} /> 

                <Link to="/register">
                    Criar conta
                </Link>
                
            </Form>
            <Background_timbiras/>
            
            <Background />
          
           
        </Container>
    );
}
