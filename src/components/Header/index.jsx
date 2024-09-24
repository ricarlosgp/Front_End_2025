import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';
import { Container, Profile, SemusProfile, Logout } from './styles';

export function Header() {
    const { signOut } = useAuth();
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

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>

        </Container>
    );
}