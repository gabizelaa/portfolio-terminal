package br.com.fiap.fintech.JDBC;

import br.com.fiap.fintech.MODELOS.Despesa;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class DespesaDAO{

    private Connection conexao;

    public void cadastrarDespesa(Despesa despesa) {
        PreparedStatement stmt = null;

        try {
            conexao = FintechDBManager.obterConexao();
            String sql = "INSERT INTO T_DESPESA (VL_DESPESA, id_user, ds_descricao, dt_data) VALUES " +
                    "(?, ?, ?, ?)";
            stmt = conexao.prepareStatement(sql);

            stmt.setDouble(1, despesa.getValorDespesa());
            stmt.setInt(2, despesa.getIdUser());
            stmt.setString(3, despesa.getDescricao());
            stmt.setString(4, despesa.getData());

            stmt.executeUpdate();
            System.out.println("\nDespesa cadastrada!");
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                stmt.close();
                conexao.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    public List<Despesa> listarDespesa() {
        List<Despesa> lista = new ArrayList<Despesa>();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        try {
            conexao = FintechDBManager.obterConexao();
            stmt = conexao.prepareStatement("SELECT * FROM T_DESPESA");
            rs = stmt.executeQuery();

            while (rs.next()) {
                int id = rs.getInt("ID_USER");
                String descricao = rs.getString("DS_DESCRICAO");
                double valor = rs.getDouble("VL_DESPESA");
                String data = rs.getString("DT_DATA");
                int codigo = rs.getInt("CD_TRANSACAO");

                Despesa despesa = new Despesa(valor, id, descricao, data);
                despesa.setCodigoTransacao(codigo);
                lista.add(despesa);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            try {
                stmt.close();
                rs.close();
                conexao.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return lista;
    }

    public void atualizarDespesa(Despesa despesa) {

        PreparedStatement stmt = null;

        try {
            conexao = FintechDBManager.obterConexao();
            String sql = "UPDATE T_DESPESA SET DS_DESCRICAO = ?, VL_DESPESA = ?, DT_DATA = TO_DATE(? , 'DD/MM/YYYY') " +
                    "WHERE" + " " +
                    "ID_USER = ? AND " +
                    " CD_TRANSACAO = ?";
            stmt = conexao.prepareStatement(sql);

            stmt.setString(1, despesa.getDescricao());
            stmt.setDouble(2, despesa.getValorDespesa());
            stmt.setString(3, despesa.getData());
            stmt.setInt(4, despesa.getIdUser());
            stmt.setInt(5, despesa.getCodigoTransacao());

            stmt.executeUpdate();
            System.out.println("\nDados atualizados com sucesso!");
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                stmt.close();
                conexao.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    public void removerDespesa(int id) {
        PreparedStatement stmt = null;

        try {
            conexao = FintechDBManager.obterConexao();
            String sql = "DELETE FROM T_DESPESA WHERE CD_TRANSACAO = ?";
            stmt = conexao.prepareStatement(sql);

            stmt.setInt(1, id);

            stmt.executeUpdate();
            System.out.println("Despesa removida com sucesso!");
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Erro ao remover despesa!");
        } finally {
            try {
                stmt.close();
                conexao.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
