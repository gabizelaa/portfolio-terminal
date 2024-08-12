package br.com.fiap.fintech.TESTES.TesteInvestimento;

import br.com.fiap.fintech.JDBC.InvestimentoDAO;
import br.com.fiap.fintech.MODELOS.Investimento;
import java.util.Scanner;

public class TesteCriarInvestimento {
    public static void main(String[] args) {
        InvestimentoDAO dao = new InvestimentoDAO();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o ID do user que você quer inserir a investimento:");
        int idUser = scanner.nextInt();
        scanner.nextLine();

        System.out.println("Digite a data do investimento:");
        String data = scanner.nextLine();

        System.out.println("Digite a rentabilidade do investimento: ");
        double rentabilidade = Double.parseDouble(scanner.nextLine());

        System.out.println("Digite o valor do investimento: ");
        double valor = Double.parseDouble(scanner.nextLine());

        System.out.println("Digite o tipo de investimento:");
        String tipo = scanner.nextLine();

        scanner.close();

        Investimento investimento = new Investimento(idUser, data, rentabilidade, valor, tipo);
        dao.cadastrarInvestimento(investimento);
    }
}
