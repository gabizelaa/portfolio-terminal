package br.com.fiap.fintech.JDBC;

import br.com.fiap.fintech.MODELOS.Investimento;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class InvestimentoDAO {

    private Connection conexao;

    public void cadastrarInvestimento(Investimento investimento) {
        PreparedStatement stmt = null;

        try {
            conexao = FintechDBManager.obterConexao();

            String sql = "INSERT INTO T_INVESTIMENTO (ID_USER, DT_DATA, VL_RENTABILIDADE_NOMINAL, VL_VALOR, TP_TIPO) " +
                    "VALUES" +
                    " (?, ?, ?, ?, ?)";
            stmt = conexao.prepareStatement(sql);

            stmt.setInt(1, investimento.getIdUser());
            stmt.setString(2, investimento.getData());
            stmt.setDouble(3, investimento.getRentabilidadeNominal());
            stmt.setDouble(4, investimento.getValor());
            stmt.setString(5, investimento.getTipo());

            stmt.executeUpdate();
            System.out.println("Investimento cadastrado com sucesso!");
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

    public List<Investimento> listarInvestimentos() {
        List<Investimento> lista = new ArrayList<Investimento>();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        try {
            conexao = FintechDBManager.obterConexao();
            stmt = conexao.prepareStatement("SELECT * FROM T_INVESTIMENTO");
            rs = stmt.executeQuery();


            while (rs.next()) {
                int id = rs.getInt("ID_USER");
                String data = rs.getString("DT_DATA");
                double rentabilidade = rs.getDouble("VL_RENTABILIDADE_NOMINAL");
                double valor = rs.getDouble("VL_VALOR");
                String tipo = rs.getString("TP_TIPO");

                Investimento investimento = new Investimento(id, data, rentabilidade, valor, tipo);
                lista.add(investimento);
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

    public void atualizarInvestimento(Investimento investimento) {
        PreparedStatement stmt = null;

        try {
            conexao = FintechDBManager.obterConexao();
            String sql = "UPDATE T_INVESTIMENTO SET DT_DATA = ?, VL_RENTABILIDADE_NOMINAL = ?, VL_VALOR = ?, TP_TIPO = ?" +
                    " WHERE" + " " +
                    "ID_USER = ? AND " +
                    " CD_INVESTIMENTO = ?";
            stmt = conexao.prepareStatement(sql);

            stmt.setString(1, investimento.getData());
            stmt.setDouble(2, investimento.getRentabilidadeNominal());
            stmt.setDouble(3, investimento.getValor());
            stmt.setString(4, investimento.getTipo());
            stmt.setInt(5, investimento.getIdUser());
            stmt.setInt(6, investimento.getCdInvestimento());

            stmt.executeUpdate();
            System.out.println("Investimento atualizado com sucesso!");
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

    public void removerInvestimento(int cd) {
        PreparedStatement stmt = null;

        try {
            conexao = FintechDBManager.obterConexao();
            String sql = "DELETE FROM T_INVESTIMENTO WHERE CD_INVESTIMENTO = ?";
            stmt = conexao.prepareStatement(sql);
            stmt.setInt(1, cd);
            stmt.executeUpdate();
            System.out.println("Investimento removido com sucesso!");
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
}
