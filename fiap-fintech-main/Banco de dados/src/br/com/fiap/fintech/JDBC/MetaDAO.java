package br.com.fiap.fintech.JDBC;

import br.com.fiap.fintech.MODELOS.Meta;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class MetaDAO {

    private Connection conexao;

    public void cadastrarMeta(Meta meta) {
        PreparedStatement stmt = null;

        try {
            conexao = FintechDBManager.obterConexao();

            String sql = "INSERT INTO T_META (ID_USER, NM_META, VL_META, DT_INICIO, " +
                    "DT_TERMINO) " +
                    "VALUES" +
                    " (?, ?, ?, ?, ?)";

            stmt = conexao.prepareStatement(sql);

            stmt.setInt(1, meta.getIdUser());
            stmt.setString(2, meta.getNomeMeta());
            stmt.setDouble(3, meta.getValorMeta());
            stmt.setString(4, meta.getDataInicio());
            stmt.setString(5, meta.getDataTermino());

            stmt.executeUpdate();
            System.out.println("Meta cadastrado com sucesso!");
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

    public List<Meta> listarMeta() {
        List<Meta> lista = new ArrayList<Meta>();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        try {
            conexao = FintechDBManager.obterConexao();
            stmt = conexao.prepareStatement("SELECT * FROM T_META");
            rs = stmt.executeQuery();

            //Percorre todos os registros encontrados
            while (rs.next()) {
                int idMeta = rs.getInt("ID_META");
                int idUser = rs.getInt("ID_USER");
                String nome = rs.getString("NM_META");
                double valor = rs.getDouble("VL_META");
                String dtInicio = rs.getString("DT_INICIO");
                String dtTermino = rs.getString("DT_TERMINO");

                Meta meta = new Meta(idUser, nome, valor, dtInicio, dtTermino);
                meta.setIdMeta(idMeta);
                lista.add(meta);
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

    public void atualizarMeta(Meta meta) {
        PreparedStatement stmt = null;

        try {
            conexao = FintechDBManager.obterConexao();
            String sql = "UPDATE T_META SET NM_META = ?, VL_META = ?, DT_INICIO = ?, DT_TERMINO = ?" +
                    " WHERE" + " " +
                    "ID_USER = ? AND " +
                    " ID_META = ?";
            stmt = conexao.prepareStatement(sql);

            stmt.setString(1, meta.getNomeMeta());
            stmt.setDouble(2, meta.getValorMeta());
            stmt.setString(3, meta.getDataInicio());
            stmt.setString(4, meta.getDataTermino());
            stmt.setInt(5, meta.getIdUser());
            stmt.setInt(6, meta.getIdMeta());

            stmt.executeUpdate();
            System.out.println("Meta atualizado com sucesso!");
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

    public void removerMeta(int cd) {
        PreparedStatement stmt = null;

        try {
            conexao = FintechDBManager.obterConexao();
            String sql = "DELETE FROM T_META WHERE ID_META = ?";
            stmt = conexao.prepareStatement(sql);
            stmt.setInt(1, cd);
            stmt.executeUpdate();
            System.out.println("Meta removido com sucesso!");
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
