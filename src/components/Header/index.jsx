import { RiDoorOpenFill, RiLockPasswordLine } from 'react-icons/ri'; // Adicionando o ícone para "Alterar Senha"
import { useAuth } from '../../hooks/auth';
import { Container, Profile, SemusProfile, Logout, ChangePasswordButton } from './styles'; // Certifique-se de que `ChangePasswordButton` está estilizado em `./styles`

export function Header() {
    const { signOut } = useAuth();

    // Função fictícia para lidar com a mudança de senha
    const handleChangePassword = () => {
        console.log('Alterar senha');
        // Aqui você pode abrir um modal, redirecionar ou executar a lógica de alteração de senha
    };

    return (
        <Container>
            <Profile>
                <SemusProfile></SemusProfile>

                <div>
                    <span>PREFEITURA MUNICIPAL DE TIMBIRAS-MA</span>
                    <strong>ESCALA DE TRABALHO</strong>
                </div>
            </Profile>

            {/* Botão para Alterar Senha */}
            <ChangePasswordButton onClick={handleChangePassword}>
                <RiLockPasswordLine />
                <span>Alterar Senha</span> {/* Texto exibido ao passar o mouse */}
            </ChangePasswordButton>

            {/* Botão de Logout */}
            <Logout onClick={signOut}>
                <RiDoorOpenFill />
                <span>Sair</span> {/* Texto exibido ao passar o mouse */}
            </Logout>
        </Container>
    );
}
