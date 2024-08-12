package br.com.classes_fintech.Testes;


import br.com.classes_fintech.CasoDeUso.GerenciadorDeInvestimento;
import br.com.classes_fintech.CasoDeUso.GerenciadorDeMeta;
import br.com.classes_fintech.CasoDeUso.GerenciadorDeTransacao;
import br.com.classes_fintech.CasoDeUso.GerenciadorDeUsuario;
import br.com.classes_fintech.Entidades.Investimento;
import br.com.classes_fintech.Entidades.Meta;
import br.com.classes_fintech.Entidades.Transacao;
import br.com.classes_fintech.Entidades.Usuario;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Usuario> listaDeTodosUsuariosCadastrados = new ArrayList<>();
        ArrayList<Transacao> listaDeTodasTransacoes = new ArrayList<>();
        ArrayList<Meta> listaDeTodasMetas = new ArrayList<>();
        ArrayList<Investimento> listaDeInvestimentos = new ArrayList<>();

        GerenciadorDeUsuario usuario1 = new GerenciadorDeUsuario(
                listaDeTodosUsuariosCadastrados,
                "Kleber",
                "Silva",
                "kilebersilva@gmail.com",
                "123456");
        GerenciadorDeUsuario usuario2 = new GerenciadorDeUsuario(
                listaDeTodosUsuariosCadastrados,
                "Gabriela",
                "Brandão",
                "gabriela@gmail.com",
                "123456");

        usuario1.exibirUsuario("Kleber");
        usuario2.exibirUsuario("Gabriela");
        apagarElementoDaLista(0, listaDeTodosUsuariosCadastrados);

        GerenciadorDeTransacao transacao1 = new GerenciadorDeTransacao(listaDeTodasTransacoes, "Academia", 300.00);
        transacao1.exibirTransacao("Academia");

        exibirTodosUsuarios(listaDeTodosUsuariosCadastrados);
        exibirTodasTransacoes(listaDeTodasTransacoes);


    }

    public static void exibirTodosUsuarios(ArrayList<Usuario> listaDeusUsuariosCadastrados) {
        if (listaDeusUsuariosCadastrados.isEmpty()) {
            System.out.println("\nA lista de usuários está vazia");
        } else {
            System.out.println("\nLista de usuários cadastrados:");
            for (Usuario usuario : listaDeusUsuariosCadastrados) {
                System.out.println("Nome: " + usuario.getNome() + " " + usuario.getSobrenome());
                System.out.println("Email: " + usuario.getEmail() + "\n");
            }
        }
    }

    public static void exibirTodasTransacoes(ArrayList<Transacao> listaDeTodasTransacoes) {
        if (listaDeTodasTransacoes.isEmpty()) {
            System.out.println("\nA lista de transações está vazia");
        } else {
            System.out.println("\nLista de transações:");
            for (Transacao transacao : listaDeTodasTransacoes) {
                System.out.println(transacao.getCategoria() + ": R$" + transacao.getValor() + "\n");
            }
        }
    }

    public static void exibirTodasMetas(ArrayList<Meta> listaDeMetas) {
        if (listaDeMetas.isEmpty()) {
            System.out.println("\nA lista de metas está vazia");
        } else {
            System.out.println("\nLista de metas:");
            for (Meta meta : listaDeMetas) {
                System.out.println("Nome da meta: " + meta.getNomeMeta());
                System.out.println("Valor da meta: R$" + meta.getValorMeta() + "\n");
            }
        }
    }

    public static void exibirTodosInvestimentos(ArrayList<Investimento> listaDeInvestimentos) {
        if (listaDeInvestimentos.isEmpty()) {
            System.out.println("\nA lista de investimentos está vazia");
        } else {
            System.out.println("\nLista de investimentos:");
            for (Investimento investimento : listaDeInvestimentos) {
                System.out.println(investimento.getNomeDoInvestimento() + ":");
                System.out.println("Valor aplicado: R$" + investimento.getValor());
                System.out.println("Taxa da aplicação: " + investimento.getTaxaDeAplicacao() + "%");
                System.out.println("Data da aplicação: " + investimento.getData() + "\n");
            }
        }
    }


    public static <T> void apagarElementoDaLista(int index, ArrayList<T> lista) {
        lista.remove(index);
        System.out.println("Item apagado com sucesso! \n");
    }
}