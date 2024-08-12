package br.com.classes_fintech.Entidades;

import java.util.ArrayList;

public class Investimento {
    private String nomeDoInvestimento;
    private Double valor;
    private String data;
    private Double taxaDeAplicacao;

    public Investimento(ArrayList<Investimento> listaDeTodosInvestimento, String nomeDoInvestimento, Double valor, String data, Double taxaDeAplicacao) {
        this.nomeDoInvestimento = nomeDoInvestimento;
        this.valor = valor;
        this.data = data;
        this.taxaDeAplicacao = taxaDeAplicacao;
    }

    public String getNomeDoInvestimento() {
        return nomeDoInvestimento;
    }
    public Double getValor() {
        return valor;
    }
    public String getData() {
        return data;
    }
    public Double getTaxaDeAplicacao() {
        return taxaDeAplicacao;
    }
}
