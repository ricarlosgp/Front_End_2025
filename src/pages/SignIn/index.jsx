import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Form, Background } from './styles'; 
import { Link } from 'react-router-dom';


export function SignIn() {
    return (
        <Container>
            <Form>
                
                <h1>Faça seu login</h1>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title= "Entrar" /> 

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>
            
            <Background />
          
           
        </Container>
    );
}
