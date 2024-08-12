package br.com.classes_fintech.CasoDeUso;

import br.com.classes_fintech.Entidades.Meta;

import java.util.ArrayList;

public class GerenciadorDeMeta extends Meta {
    ArrayList<Meta> listaDeMetas = new ArrayList<>();

    public GerenciadorDeMeta(ArrayList<Meta> listaDeTodasMetas, String nomeMeta, double valorMeta) {
        super(listaDeTodasMetas, nomeMeta, valorMeta);
        listaDeMetas.add(this);
        listaDeTodasMetas.add(this);
    }

    public void exibirMeta(String nomeMeta) {
        for (Meta meta : listaDeMetas) {
            if (meta.getNomeMeta().equals(nomeMeta)) {
                System.out.println("Nome da meta: " + meta.getNomeMeta());
                System.out.println("Valor da meta: R$" + meta.getValorMeta() + "\n");
            } else {
                System.out.println("Meta não encontrada");
            }
        }
    }
}


