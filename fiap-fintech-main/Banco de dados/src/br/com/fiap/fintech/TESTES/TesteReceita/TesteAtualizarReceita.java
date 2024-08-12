package br.com.fiap.fintech.TESTES.TesteReceita;

import br.com.fiap.fintech.JDBC.ReceitaDAO;
import br.com.fiap.fintech.MODELOS.Receita;
import java.util.List;
import java.util.Scanner;

public class TesteAtualizarReceita {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ReceitaDAO dao = new ReceitaDAO();
        List<Receita> lista = dao.listarReceita();

        for (Receita receita : lista) {
            System.out.println(receita.toString());
        }

        System.out.println("Digite o ID do usuário: ");
        int id = scanner.nextInt();
        scanner.nextLine();

        System.out.println("Digite o código (ID) da receita que deseja atualizar: ");
        int cdReceita = scanner.nextInt();
        scanner.nextLine();

        System.out.println("Digite o valor da receita:");
        double valor = Double.parseDouble(scanner.nextLine());
        scanner.nextLine();

        System.out.println("Digite a descrição da receita:");
        String descricao = scanner.nextLine();

        System.out.println("Digite a data da receita:");
        String data = scanner.nextLine();

        scanner.close();

        Receita receita = new Receita(valor, id, descricao, data);
        receita.setCodigoTransacao(cdReceita);

        dao.atualizarReceita(receita);
    }
}
