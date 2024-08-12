package br.com.fiap.fintech.JDBC;

import br.com.fiap.fintech.MODELOS.Receita;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ReceitaDAO {

    private Connection conexao;

    public void cadastrarReceita(Receita receita) {
        PreparedStatement stmt = null;

        try {
            conexao = FintechDBManager.obterConexao();
            String sql = "INSERT INTO T_RECEITA (vl_receita, id_user, ds_descricao, dt_data) VALUES " +
                    "(?, ?, ?, ?)";
            stmt = conexao.prepareStatement(sql);

            stmt.setDouble(1, receita.getValorReceita());
            stmt.setInt(2, receita.getIdUser());
            stmt.setString(3, receita.getDescricao());
            stmt.setString(4, receita.getData());

            stmt.executeUpdate();
            System.out.println("\nReceita cadastrada!");
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

    public List<Receita> listarReceita() {
        List<Receita> lista = new ArrayList<Receita>();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        try {
            conexao = FintechDBManager.obterConexao();
            stmt = conexao.prepareStatement("SELECT * FROM T_RECEITA");
            rs = stmt.executeQuery();

            while (rs.next()) {
                int id = rs.getInt("ID_USER");
                String descricao = rs.getString("DS_DESCRICAO");
                double valor = rs.getDouble("VL_RECEITA");
                String data = rs.getString("DT_DATA");
                int codigo = rs.getInt("CD_TRANSACAO");

                Receita receita = new Receita(valor, id, descricao, data);
                receita.setCodigoTransacao(codigo);
                lista.add(receita);
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

    public void atualizarReceita(Receita receita) {

        PreparedStatement stmt = null;

        try {
            conexao = FintechDBManager.obterConexao();
            String sql = "UPDATE T_RECEITA SET DS_DESCRICAO = ?, VL_RECEITA = ?, DT_DATA = TO_DATE(? , 'DD/MM/YYYY') " +
                    "WHERE" + " " +
                    "ID_USER = ? AND " +
                    " CD_TRANSACAO = ?";
            stmt = conexao.prepareStatement(sql);

            stmt.setString(1, receita.getDescricao());
            stmt.setDouble(2, receita.getValorReceita());
            stmt.setString(3, receita.getData());
            stmt.setInt(4, receita.getIdUser());
            stmt.setInt(5, receita.getCodigoTransacao());

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

    public void removerReceita(int id) {
        PreparedStatement stmt = null;

        try {
            conexao = FintechDBManager.obterConexao();
            String sql = "DELETE FROM T_RECEITA WHERE CD_TRANSACAO = ?";
            stmt = conexao.prepareStatement(sql);

            stmt.setInt(1, id);

            stmt.executeUpdate();
            System.out.println("Receita removida com sucesso!");
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Erro ao remover receita!");
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
