package br.com.fiap.fintech.TESTES.TesteInvestimento;

import br.com.fiap.fintech.JDBC.InvestimentoDAO;
import br.com.fiap.fintech.MODELOS.Investimento;
import java.util.List;

public class TesteListarInvestimento {
    public static void main(String[] args) {
        InvestimentoDAO dao = new InvestimentoDAO();
        List<Investimento> lista = dao.listarInvestimentos();

        for (Investimento investimento : lista) {
            System.out.println(investimento.toString());
        }

    }
}
