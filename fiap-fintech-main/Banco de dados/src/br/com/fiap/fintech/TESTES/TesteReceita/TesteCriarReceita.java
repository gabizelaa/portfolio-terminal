package br.com.fiap.fintech.TESTES.TesteReceita;

import br.com.fiap.fintech.JDBC.ReceitaDAO;
import br.com.fiap.fintech.MODELOS.Receita;
import java.util.Scanner;

public class TesteCriarReceita {
    public static void main(String[] args) {
        ReceitaDAO dao = new ReceitaDAO();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o valor da receita:");
        double valor = Double.parseDouble(scanner.nextLine());

        System.out.println("Digite o ID do user que você quer inserir a despesa:");
        int idUser = scanner.nextInt();
        scanner.nextLine();

        System.out.println("Digite a descrição da receita:");
        String descricao = scanner.nextLine();

        System.out.println("Digite a data da receita:");
        String data = scanner.nextLine();

        Receita receita = new Receita(valor, idUser, descricao, data);
        dao.cadastrarReceita(receita);
    }
}
