package br.com.fiap.fintech.MODELOS;

public class Usuario {

    private String nome;

    private String email;

    private String senha;

    private int id;

    public Usuario (String nm_nome, String ds_email){
        this.nome = nm_nome;
        this.email = ds_email;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }

    public int getId(){
        return id;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public void setId(int id){
        this.id = id;
    }

    @Override
    public String toString() {
        return String.format("\nUsuario:\n" +
                        "\tNome: %s\n" +
                        "\tEmail: %s\n" +
                        "\tID: %d",
                nome, email, id);
    }
}
