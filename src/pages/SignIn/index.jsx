import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background, TimbirasProfile, SemusProfile } from './styles';


export function SignIn() {
    return (
        <Container>
            <Form>
                
                <h2>Faça seu login</h2>

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

                <Button title="Entrar" /> 

                <Link to="/register">
                    Criar conta
                </Link>    
            </Form>
            
            <Background>
                <TimbirasProfile> </TimbirasProfile>
                <SemusProfile> </SemusProfile>
            </Background>
        </Container>
    );
}