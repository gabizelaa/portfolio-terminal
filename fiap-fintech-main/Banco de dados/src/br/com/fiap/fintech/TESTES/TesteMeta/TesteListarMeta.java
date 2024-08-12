package br.com.fiap.fintech.TESTES.TesteMeta;

import br.com.fiap.fintech.JDBC.MetaDAO;
import br.com.fiap.fintech.MODELOS.Meta;
import java.util.List;

public class TesteListarMeta {
    public static void main(String[] args) {
        MetaDAO dao = new MetaDAO();
        List<Meta> lista = dao.listarMeta();

        for (Meta meta : lista) {
            System.out.println(meta.toString());
        }
    }
}
