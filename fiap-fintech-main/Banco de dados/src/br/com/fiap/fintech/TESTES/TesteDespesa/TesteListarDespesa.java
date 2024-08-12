package br.com.fiap.fintech.TESTES.TesteDespesa;

import br.com.fiap.fintech.JDBC.DespesaDAO;
import br.com.fiap.fintech.MODELOS.Despesa;
import java.util.List;

public class TesteListarDespesa {
    public static void main(String[] args) {
        DespesaDAO dao = new DespesaDAO();
        List<Despesa> lista = dao.listarDespesa();

        for (Despesa despesa : lista) {
            System.out.println(despesa.toString());
        }

    }
}
