package br.com.classes_fintech.CasoDeUso;
import br.com.classes_fintech.Entidades.Usuario;

import java.util.ArrayList;

public class GerenciadorDeUsuario extends Usuario {

    ArrayList<Usuario> listaDeusUsuariosCadastrados = new ArrayList<>();

    public GerenciadorDeUsuario(ArrayList<Usuario> listaDeTodosUsuariosCadastrados, String nome, String sobrenome, String email, String senha) {
        super(listaDeTodosUsuariosCadastrados, nome, sobrenome, email, senha);
        listaDeusUsuariosCadastrados.add(this);
        listaDeTodosUsuariosCadastrados.add(this);

    }

    public void exibirUsuario(String usuarioNome){
        for (Usuario usuario : listaDeusUsuariosCadastrados) {
            if (usuario.getNome().equals(usuarioNome)) {
                System.out.println("Nome: " + usuario.getNome());
                System.out.println("Sobrenome: " + usuario.getSobrenome());
                System.out.println("Email: " + usuario.getEmail());
                System.out.println("Senha: " + usuario.getSenha() + "\n");
            } else {
                System.out.println("Usuário não encontrado");
            }
        }
    }
}
