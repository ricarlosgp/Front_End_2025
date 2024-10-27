import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Main, BackgroundImage_abertura } from './styles'; 

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");        
    const { signIn } = useAuth();
    
    function handleSignIn() {
        signIn({ email, password });        
    }

    return (
        <Container>
            <Form>
                <Main>
                    <div className="image_semus" /> 
                    <h1>FAÇA SEU LOGIN</h1>
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
                    <Button title="ENTRAR" onClick={handleSignIn} /> 
                    <Link to="/register">
                        CRIAR CONTA
                    </Link>
                    <div className="image_timbiras" /> 
                </Main>                             
            </Form>            
            <BackgroundImage_abertura />      
        </Container>
    );
}
