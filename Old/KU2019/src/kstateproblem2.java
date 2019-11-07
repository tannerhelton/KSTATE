import java.util.Scanner;

public class kstateproblem2 {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);

		System.out.println("Enter k:");
		int k = s.nextInt();

		int[][] array = new int[20][2];

		for (int i = 0; i < k; i++) {
			System.out.println("Enter a" + i + ": ");
			array[i][0] = s.nextInt();
		}

		for (int i = 0; i < k; i++) {
			System.out.println("Enter f(" + i + "): ");
			array[i][1] = s.nextInt();
		}

		System.out.println("Enter n:");
		int n = s.nextInt();

		System.out.println("f(n) = " + (n + array[0][1]));
		System.out.println("");
		System.out.println("");
		System.out.println("");
		System.out.println("");

		s.close();
	}
}