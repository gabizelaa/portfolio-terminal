package br.com.fiap.fintech.TESTES.TesteMeta;

import br.com.fiap.fintech.JDBC.MetaDAO;
import br.com.fiap.fintech.MODELOS.Meta;
import java.util.Scanner;

public class TesteAtualizarMeta {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        MetaDAO dao = new MetaDAO();

        System.out.println("Digite o ID do usuário: ");
        int idUser = scanner.nextInt();
        scanner.nextLine();

        System.out.println("Digite o código (ID) da meta que deseja atualizar: ");
        int cdMeta = scanner.nextInt();
        scanner.nextLine();

        System.out.println("Digite o nome da meta:");
        String nome = scanner.nextLine();

        System.out.println("Digite o valor da meta:");
        double valor = Double.parseDouble(scanner.nextLine());
        scanner.nextLine();

        System.out.println("Digite a data de inicio da meta:");
        String dataInicio = scanner.nextLine();

        System.out.println("Digite a data de termino da meta:");
        String dataTermino = scanner.nextLine();

        scanner.close();

        Meta meta = new Meta(idUser, nome, valor, dataInicio, dataTermino);
        meta.setIdMeta(cdMeta);

        dao.atualizarMeta(meta);
    }
}
