package br.com.fiap.fintech.TESTES.TesteUsuario;

import br.com.fiap.fintech.JDBC.UsuarioDAO;
import br.com.fiap.fintech.MODELOS.Usuario;

import java.util.List;

public class TesteListarUsuarios {
    public static void main(String[] args) {
        UsuarioDAO dao = new UsuarioDAO();
        List<Usuario> lista = dao.listar();

        for (Usuario usuario : lista) {
            System.out.println(usuario.toString());
        }
    }
}
