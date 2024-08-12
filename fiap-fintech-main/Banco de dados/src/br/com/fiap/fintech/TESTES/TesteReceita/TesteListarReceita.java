package br.com.fiap.fintech.TESTES.TesteReceita;

import br.com.fiap.fintech.JDBC.ReceitaDAO;
import br.com.fiap.fintech.MODELOS.Receita;
import java.util.List;

public class TesteListarReceita {
    public static void main(String[] args) {
        ReceitaDAO dao = new ReceitaDAO();
        List<Receita> lista = dao.listarReceita();

        for (Receita receita : lista) {
            System.out.println(receita.toString());
        }

    }
}
