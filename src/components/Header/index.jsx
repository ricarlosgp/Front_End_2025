import { RiDoorOpenFill, RiLockPasswordLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import { Container, Profile, SemusProfile, Logout, ChangePasswordButton } from './styles';

export function Header() {
    const { signOut } = useAuth();
    const navigate = useNavigate(); // Usando useNavigate para redirecionamento

    const handleChangePassword = () => {
        // Redireciona para a página de perfil
        navigate('/profile'); // Ajuste a rota conforme necessário
    };

    return (
        <Container>
            <Profile>
                <SemusProfile></SemusProfile>

                <div>
                    <h1>PREFEITURA MUNICIPAL DE TIMBIRAS-MA</h1>
                    <h3>ESCALA DE TRABALHO</h3>
                </div>
            </Profile>

            <ChangePasswordButton onClick={handleChangePassword}>
                <RiLockPasswordLine />
                <span>Alterar Senha</span>
            </ChangePasswordButton>

            <Logout onClick={signOut}>
                <RiDoorOpenFill />
                <span>Sair</span>
            </Logout>
        </Container>
    );
}
