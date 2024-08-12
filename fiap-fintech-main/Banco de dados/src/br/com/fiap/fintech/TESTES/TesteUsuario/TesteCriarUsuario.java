package br.com.fiap.fintech.TESTES.TesteUsuario;

import br.com.fiap.fintech.JDBC.UsuarioDAO;
import br.com.fiap.fintech.MODELOS.Usuario;
import java.util.Scanner;

public class TesteCriarUsuario {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        UsuarioDAO dao = new UsuarioDAO();

        System.out.println("Digite o nome do usuário:");
        String nome = scanner.nextLine();

        System.out.println("Digite o email do usuário:");
        String email = scanner.nextLine();

        System.out.println("Digite a senha do usuário:");
        String senha = scanner.nextLine();

        Usuario usuario = new Usuario(nome, email);
        usuario.setSenha(senha);
        dao.cadastrarUsuario(usuario);

    }
}
