import java.util.Scanner;

public class kstateproblem6 {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);

		System.out.println("Score: ");
		int score = s.nextInt();
		int count = 0;
		int ways = 0;
		for (int i = 1; i < 100; i++) {
			if ((score % i == 0) && (i != score)) {
				score = score / i;
				System.out.println(i);
			}
		}

		if (score % 2 == 0) {
			if (score % 4 == 0) {
				if (score % 8 == 0) {
					if (score % 16 == 0) {
						if (score % 32 == 0) {
							if (score % 64 == 0) {
								++ways;
							}
						}
					}
				}
			}
		}

		if (score % 2 == 0) {
			ways += 1;
		}

		if (score % 3 == 0) {
			ways += 1;
		}

		if (score % 6 == 0) {
			ways += 1;
		}

		if (score % 7 == 0) {
			ways += 1;
		}

		if (score % 8 == 0) {
			ways += 1;
		}

		if (score == 0) {
			ways = 1;
		}

		System.out.println("Number of ways: " + ways);

		s.close();
	}
}