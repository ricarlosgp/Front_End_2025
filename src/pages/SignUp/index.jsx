import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Form, Background, TimbirasProfile, SemusProfile } from './styles';
import { Link } from 'react-router-dom';


export function SignUp() {
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
                />

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

                <Button title="Cadastrar" /> 

                <Link to="/">
                    Voltar para o login
                </Link>   
            </Form>            
            
        </Container>
    );
}