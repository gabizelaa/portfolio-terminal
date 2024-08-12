package br.com.fiap.fintech.MODELOS;

public class Investimento {

    private int cdInvestimento;
    private int idUser;
    private String data;
    private double rentabilidadeNominal;
    private double valor;
    private String tipo;

    public Investimento (int idUser, String dt_data, double vl_rentabilidade_nominal, double vl_valor, String tp_tipo){
        this.idUser = idUser;
        this.data = dt_data;
        this.rentabilidadeNominal = vl_rentabilidade_nominal;
        this.valor = vl_valor;
        this.tipo = tp_tipo;
    }

    public int getCdInvestimento() {
        return cdInvestimento;
    }

    public void setCdInvestimento(int cdInvestimento) {
        this.cdInvestimento = cdInvestimento;
    }

    public String getTipo() {
        return tipo;
    }

    public int getIdUser() {
        return idUser;
    }

    public String getData() { return data; }

    public double getRentabilidadeNominal() { return rentabilidadeNominal;}

    public double getValor() { return valor;}

    @Override
    public String toString() {
        return String.format("\nInvestimento:\n" +
                        "\tData: %s\n" +
                        "\tRentabilidade Nominal: %.2f\n" +
                        "\tValor: %.2f\n" +
                        "\tID do Usuário: %d\n" +
                        "\tTipo: %s",
                data, rentabilidadeNominal, valor, idUser, tipo);
    }
}
