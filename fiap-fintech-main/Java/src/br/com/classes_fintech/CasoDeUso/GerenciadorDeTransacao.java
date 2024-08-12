package br.com.classes_fintech.CasoDeUso;

import br.com.classes_fintech.Entidades.Meta;
import br.com.classes_fintech.Entidades.Transacao;

import java.util.ArrayList;

public class GerenciadorDeTransacao extends Transacao {
    ArrayList<Transacao> listaDeTransacoes = new ArrayList<>();

    public GerenciadorDeTransacao(ArrayList<Transacao> listaDeTodasTransacao, String categoria, double valor) {
        super(listaDeTodasTransacao, categoria, valor);
        listaDeTransacoes.add(this);
        listaDeTodasTransacao.add(this);
    }

    public void exibirTransacao(String categoria) {
        for (Transacao transacao : listaDeTransacoes) {
            if (transacao.getCategoria().equals(categoria)) {
                System.out.println(transacao.getCategoria());
                System.out.println("Valor transacionado: R$" + transacao.getValor() + "\n");
            } else {
                System.out.println("Transação não encontrada");
            }
        }
    }
}