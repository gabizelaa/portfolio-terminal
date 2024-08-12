package br.com.fiap.fintech.TESTES.TesteDespesa;

import br.com.fiap.fintech.JDBC.DespesaDAO;
import br.com.fiap.fintech.MODELOS.Despesa;
import java.util.Scanner;

public class TesteCriarDespesa {
    public static void main(String[] args) {
        DespesaDAO dao = new DespesaDAO();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o ID do user que você quer inserir a despesa:");
        int idUser = scanner.nextInt();
        scanner.nextLine();

        System.out.println("Digite o valor da despesa:");
        double valor = Double.parseDouble(scanner.nextLine()); 

        System.out.println("Digite a descrição da despesa:");
        String descricao = scanner.nextLine();

        System.out.println("Digite a data da despesa:");
        String data = scanner.nextLine();

        Despesa despesa = new Despesa(valor, idUser, descricao, data);
        dao.cadastrarDespesa(despesa);
    }
}
