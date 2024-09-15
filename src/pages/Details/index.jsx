import { Container } from './styles';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
    return (
        <Container> 
            <ButtonText title= "Cadastrar" />

            <h1> Olá SEMUS! </h1>
            <span> Ricarlos Guimarães</span>

            <Button title="Logar" loading />
            <Button title="Cadastrar" />
            <Button title="Voltar" />            
        </Container>
    )
}