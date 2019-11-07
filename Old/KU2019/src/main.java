import java.util.Scanner;

public class main {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		System.out.println("Enter Width");
		Double width = s.nextDouble();
		System.out.println("Enter Length");
		Double length = s.nextDouble();
		Double area = width * length;
		System.out.println(area);

		double a = 0;
		double c = 0;
		double b = 0;
		if (width > length) {
			b = 3.14159 * (length / 2) * (length / 2);
			c = 3.14159 * 2 * (length / 4) * (length / 4);
		} else {
			b = 3.14159 * (width / 2) * (width / 2);
			c = 3.14159 * 2 * (width / 4) * (width / 4);
		}

		if ((Math.pow(width * width + length * length, .5) / 2) < width
				&& (Math.pow(width * width + length * length, .5) / 2) < length)
			;
		{
			a = .5 * 3.14159 * (Math.pow(width * width + length * length, .5) / 2)
					* (Math.pow(width * width + length * length, .5) / 2);
		}

		if (width < (Math.pow(width * width + length * length, .5) / 2) && width < length) {
			a = .5 * 3.14159 * width;
		} else if (length < (Math.pow(width * width + length * length, .5) / 2) && length < width) {
			a = .5 * 3.14159 * length;
		}

		if (a > b && a > c) {
			System.out.println("A best");
		} else if (b > a && b > c) {
			System.out.println("B best");
		} else {
			System.out.println("C best");
		}

		System.out.println("A: " + (a / (width * length)) * 100);
		System.out.println("B: " + (b / (width * length)) * 100);
		System.out.println("C: " + (c / (width * length)) * 100);

		s.close();
	}
}