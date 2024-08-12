package br.com.classes_fintech.CasoDeUso;

import br.com.classes_fintech.Entidades.Investimento;

import java.util.ArrayList;

public class GerenciadorDeInvestimento extends Investimento {
    ArrayList<Investimento> listaDeInvestimento = new ArrayList<>();

    public GerenciadorDeInvestimento(ArrayList<Investimento> listaDeTodosInvestimento, String nomeDoInvestimento, Double valor, String data, Double taxaDeAplicacao) {
        super(listaDeTodosInvestimento, nomeDoInvestimento, valor, data, taxaDeAplicacao);
        listaDeInvestimento.add(this);
        listaDeTodosInvestimento.add(this);
    }

    public void exibirInvestimento(String nomeInvestimento) {
        for (Investimento investimento : listaDeInvestimento) {
            if (investimento.getNomeDoInvestimento().equals(nomeInvestimento)) {
                System.out.println(investimento.getNomeDoInvestimento());
                System.out.println(investimento.getValor());
                System.out.println(investimento.getData());
                System.out.println("Valor investido: R$" + investimento.getTaxaDeAplicacao() + "\n ");
            } else {
                System.out.println("Investimento não encontrado");
            }
        }
    }
}