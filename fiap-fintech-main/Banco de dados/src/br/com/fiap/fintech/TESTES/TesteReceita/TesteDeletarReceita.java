package br.com.fiap.fintech.TESTES.TesteReceita;

import br.com.fiap.fintech.JDBC.ReceitaDAO;
import java.util.Scanner;

public class TesteDeletarReceita {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ReceitaDAO dao = new ReceitaDAO();

        System.out.println("Digite o código (ID) da receita que deseja remover: ");
        int id = scanner.nextInt();
        scanner.nextLine();

        dao.removerReceita(id);

    }
}
