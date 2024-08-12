package br.com.fiap.fintech.TESTES.TesteMeta;

import br.com.fiap.fintech.JDBC.MetaDAO;
import java.util.Scanner;

public class TesteDeletarMeta {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        MetaDAO dao = new MetaDAO();

        System.out.println("Digite o código (ID) da meta que deseja remover: ");
        int id = scanner.nextInt();
        scanner.nextLine();

        dao.removerMeta(id);

    }
}
