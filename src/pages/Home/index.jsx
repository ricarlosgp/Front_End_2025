import { Container, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';

export function Home() {
    return(
        <Container>
            <Header/>

            <Menu>
                <li><ButtonText title="JANEIRO" /></li>
                <li><ButtonText title="FEVEREIRO" /></li>
                <li><ButtonText title="MARÇO" /></li>
                <li><ButtonText title="ABRIL" /></li>
                <li><ButtonText title="MAIO" /></li>
                <li><ButtonText title="JUNHO" /></li>
                <li><ButtonText title="JULHO" /></li>
                <li><ButtonText title="AGOSTO" /></li>
                <li><ButtonText title="SETEMBRO" /></li>
                <li><ButtonText title="OUTUBRO" /></li>
                <li><ButtonText title="NOVEMBRO" /></li>
                <li><ButtonText title="DEZEMBRO" /></li>           
                           
            </Menu>

            <Search>

            </Search>

            <Content>

            </Content>

            <NewNote>

            </NewNote>

        </Container>
    );
}