import java.util.Scanner;

public class kstateproblem4 {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);

		System.out.println("Enter initial x-coordinate: ");
		double xi = s.nextDouble();
		System.out.println("Enter initial x-velocity: ");
		double xv = s.nextDouble();
		System.out.println("Enter initial y-coordinate: ");
		double yi = s.nextDouble();
		System.out.println("Enter initial y-velocity: ");
		double yv = s.nextDouble();
		System.out.println("Enter initial z-coordinate: ");
		double zi = s.nextDouble();
		System.out.println("Enter initial z-velocity: ");
		double zv = s.nextDouble();
		System.out.println("Enter time duration: ");
		double t = s.nextDouble();

		for (int i = 0; i < t; i++) {
			xi += xv;
			yi += yv;
			zi += zv;
			if (xi >= 1000) {
				xi = (1000-(xi - 1000));
				xv = -xv;
			}
			if (xi < 0) {
				xi = (xi) * -1;
				xv = -xv;
			}

			if (yi >= 1000) {
				yi = (1000-(yi - 1000));
				yv = -yv;
			}
			if (yi < 0) {
				yi = (yi) * -1;
				yv = -yv;
			}
			if (zi >= 1000) {
				zi = (1000-(zi - 1000));
				zv = -zv;
			}
			if (zi < 0) {
				zi = (zi) * -1;
				zv = -zv;
			}
			System.out.println(yi);
		}

		System.out.println("Final position: (" + (xi) + ", " + yi + ", " + zi + ").");

		s.close();

	}
}