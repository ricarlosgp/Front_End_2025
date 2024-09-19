import { Container, Menu, UBS, Content, ProfileJan, ProfileFev, ProfileMar, ProfileAbr, ProfileMai, ProfileJun, ProfileJul, ProfileAgo, ProfileSet, ProfileOut, ProfileNov, ProfileDez  } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
export function Home() {
    return (
        <Container>
            <Header />
            <Menu>
                <ProfileJan/> <ProfileFev/> <ProfileMar/>
                <ProfileAbr/> <ProfileMai/> <ProfileJun/>
                <ProfileJul/> <ProfileAgo/>  <ProfileSet/>
                <ProfileOut/> <ProfileNov/>  <ProfileDez/>
                        
                <li><ButtonText title="JAN" /></li>                
                <li><ButtonText title="FEV" /></li>
                <li><ButtonText title="MAR" /></li>
                <li><ButtonText title="ABR" /></li>
                <li><ButtonText title="MAI" /></li>
                <li><ButtonText title="JUN" /></li>
                <li><ButtonText title="JUL" /></li>
                <li><ButtonText title="AGO" /></li>
                <li><ButtonText title="SET" /></li>
                <li><ButtonText title="OUT" /></li>
                <li><ButtonText title="NOV" /></li>
                <li><ButtonText title="DEZ" /></li>
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