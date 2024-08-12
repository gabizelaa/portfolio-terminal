package br.com.classes_fintech.Entidades;

import br.com.classes_fintech.CasoDeUso.GerenciadorDeTransacao;

import java.util.ArrayList;

public class Transacao {
    private String categoria; //despesa ou receita
    private Double valor;

    public Transacao(ArrayList<Transacao> listaDeTodasTransacao, String categoria, Double valor) {
        this.categoria = categoria;
        this.valor = valor;
    }

    public Double getValor() {
        return valor;
    }
    public String getCategoria() {
        return categoria;
    }
}