import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, SemusProfile, Logout } from './styles';

export function Header() {
    return (
        <Container>
            <Profile>
            <SemusProfile> </SemusProfile> 

                <div>
                    <span>PREFEITURA MUNICIPAL DE TIMBIRAS-MA</span>
                    <strong>UBS SÃO RAIMUNDO I</strong>
                    <strong>ESCALA DE TRABALHO</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    );
}