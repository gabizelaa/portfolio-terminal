package br.com.fiap.fintech.JDBC;

import br.com.fiap.fintech.MODELOS.Usuario;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UsuarioDAO {

    private Connection conexao;

    public void cadastrarUsuario(Usuario usuario) {
        PreparedStatement stmt = null;

        try {
            conexao = FintechDBManager.obterConexao();
            String sql = "INSERT INTO T_USUARIO (ID_USER, NM_NOME, DS_EMAIL, DS_SENHA) VALUES" +
                    " (SQ_ID.NEXTVAL, ?, ?, ?)";
            stmt = conexao.prepareStatement(sql);

            stmt.setString(1, usuario.getNome());
            stmt.setString(2, usuario.getEmail());
            stmt.setString(3, usuario.getSenha());

            stmt.executeUpdate();
            System.out.println("\n" + usuario.getNome() + " Cadastrado!");
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

    public List<Usuario> listar() {
        List<Usuario> lista = new ArrayList<Usuario>();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        try {
            conexao = FintechDBManager.obterConexao();
            stmt = conexao.prepareStatement("SELECT * FROM T_USUARIO");
            rs = stmt.executeQuery();

            while (rs.next()) {
                int id = rs.getInt("ID_USER");
                String nome = rs.getString("NM_NOME");
                String email = rs.getString("DS_EMAIL");

                Usuario usuario = new Usuario(nome, email);
                usuario.setId(id);
                lista.add(usuario);
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

    public Usuario buscarPorId(int codigoBusca) {
        Usuario usuario = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;
        try {
            conexao = FintechDBManager.obterConexao();
            stmt = conexao.prepareStatement("SELECT * FROM T_USUARIO WHERE ID_USER = ?");
            stmt.setInt(1, codigoBusca);
            rs = stmt.executeQuery();

            if (rs.next()){
                int codigo = rs.getInt("ID_USER");
                String nome = rs.getString("NM_NOME");
                String email = rs.getString("DS_EMAIL");
                String senha = rs.getString("DS_SENHA");
                usuario = new Usuario(nome, email);
                usuario.setId(codigo);
                usuario.setSenha(senha);
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
        return usuario;
    }

    public void atualizarUsuario(Usuario usuario) {
        PreparedStatement stmt = null;

        try {
            conexao = FintechDBManager.obterConexao();
            String sql = "UPDATE T_USUARIO SET NM_NOME = ?, DS_EMAIL = ?, DS_SENHA = ? WHERE ID_USER = ?";
            stmt = conexao.prepareStatement(sql);

            stmt.setString(1, usuario.getNome());
            stmt.setString(2, usuario.getEmail());
            stmt.setString(3, usuario.getSenha());
            stmt.setInt(4, usuario.getId());

            stmt.executeUpdate();
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

    public void removerUsuario(int id) {
        PreparedStatement stmt = null;

        try {
            conexao = FintechDBManager.obterConexao();
            String sql = "DELETE FROM T_USUARIO WHERE ID_USER = ?";
            stmt = conexao.prepareStatement(sql);

            stmt.setInt(1, id);

            stmt.executeUpdate();
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
