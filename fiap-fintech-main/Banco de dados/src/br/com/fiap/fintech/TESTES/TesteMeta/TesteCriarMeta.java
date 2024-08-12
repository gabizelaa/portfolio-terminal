package br.com.fiap.fintech.TESTES.TesteMeta;

import br.com.fiap.fintech.JDBC.MetaDAO;
import br.com.fiap.fintech.MODELOS.Meta;
import java.util.Scanner;

public class TesteCriarMeta {
    public static void main(String[] args) {
        MetaDAO dao = new MetaDAO();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o ID do user que você quer inserir a nova meta: ");
        int idUser = scanner.nextInt();
        scanner.nextLine();

        System.out.println("Digite o valor da meta: ");
        double valorMeta = Double.parseDouble(scanner.nextLine());
        scanner.nextLine();

        System.out.println("Digite o nome da meta: ");
        String nomeMeta = scanner.nextLine();

        System.out.println("Digite a data de início da meta: ");
        String dataInicio = scanner.nextLine();

        System.out.println("Digite a data de término da meta: ");
        String dataTermino = scanner.nextLine();

        Meta meta = new Meta(idUser, nomeMeta, valorMeta, dataInicio, dataTermino);
        dao.cadastrarMeta(meta);

    }
}
