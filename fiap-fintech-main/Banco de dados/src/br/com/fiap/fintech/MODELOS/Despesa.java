package br.com.fiap.fintech.MODELOS;

public class Despesa {

    private double valorDespesa;
    private int codigoTransacao;
    private String descricao;
    private int idUser;
    private String data;

    public Despesa(double valorDespesa, int id_user, String descricao, String data) {
        this.valorDespesa = valorDespesa;
        this.idUser = id_user;
        this.descricao = descricao;
        this.data = data;
    }

    public double getValorDespesa() {
        return valorDespesa;
    }

    public int getCodigoTransacao() {
        return codigoTransacao;
    }

    public void setCodigoTransacao(int codigoTransacao) {
        this.codigoTransacao = codigoTransacao;
    }

    public String getDescricao() {
        return descricao;
    }

    public int getIdUser() {
        return idUser;
    }

    public String getData() {
        return data;
    }

    public String toString() {
        return String.format("Despesa:\n" +
                        "\tValor da Despesa: %.2f\n" +
                        "\tCódigo da Transação: %d\n" +
                        "\tDescrição: %s\n" +
                        "\tID do Usuário: %d\n" +
                        "\tData: %s",
                valorDespesa, codigoTransacao, descricao, idUser, data);
    }

}
