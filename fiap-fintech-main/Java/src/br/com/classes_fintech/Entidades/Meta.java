package br.com.classes_fintech.Entidades;

import java.util.ArrayList;

public class Meta {

    private String nomeMeta;
    private double valorMeta;

    public Meta(ArrayList<Meta> listaDeTodasMetas, String nomeMeta, double valorMeta) {
        this.nomeMeta = nomeMeta;
        this.valorMeta = valorMeta;
    }

    public String getNomeMeta() {
        return nomeMeta;
    }

    public double getValorMeta() {
        return valorMeta;
    }


}