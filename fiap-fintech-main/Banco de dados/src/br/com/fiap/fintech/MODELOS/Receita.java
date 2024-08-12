package br.com.fiap.fintech.MODELOS;

public class Receita {

    private double valorReceita;
    private int codigoTransacao;
    private String descricao;
    private int idUser;
    private String data;

    public Receita(double valorReceita, int id_user, String descricao, String data) {
        this.valorReceita = valorReceita;
        this.idUser = id_user;
        this.descricao = descricao;
        this.data = data;
    }

    public double getValorReceita() {
        return valorReceita;
    }

    public int getIdUser() {
        return idUser;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getData() {
        return data;
    }

    public int getCodigoTransacao() {
        return codigoTransacao;
    }

    public void setCodigoTransacao(int codigoTransacao) {
        this.codigoTransacao = codigoTransacao;
    }

    @Override
    public String toString() {
        return String.format("\nReceita:\n" +
                        "\tValor: %.2f\n" +
                        "\tCódigo da Transação: %d\n" +
                        "\tDescrição: %s\n" +
                        "\tID do Usuário: %d\n" +
                        "\tData: %s",
                valorReceita, codigoTransacao, descricao, idUser, data);
    }
}
