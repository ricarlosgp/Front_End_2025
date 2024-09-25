import { Container, Menu, UBS, Content, } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
export function Home() {
    return (
        <Container>
            <Header />
            <Menu>                
                <li className="jan"><ButtonText title="JAN" /></li>
                <li className="fev"><ButtonText title="FEV" /></li>
                <li className="mar"><ButtonText title="MAR" /></li>
                <li className="abr"><ButtonText title="ABR" /></li>
                <li className="mai"><ButtonText title="MAI" /></li>
                <li className="jun"><ButtonText title="JUN" /></li>
                <li className="jul"><ButtonText title="JUL" /></li>
                <li className="ago"><ButtonText title="AGO" /></li>
                <li className="set"><ButtonText title="SET" /></li>
                <li className="out"><ButtonText title="OUT" /></li>
                <li className="nov"><ButtonText title="NOV" /></li>
                <li className="dez"><ButtonText title="DEZ" /></li>      
                
            </Menu>

            <Content>

            <UBS>
                <h1>UNIDADE BÁSICA DE SAÚDE SÃO RAIMUNDO I</h1>
                <strong>CNES: 7179553</strong>
            </UBS>
            
                
            </Content>
        </Container>
    );
}