import java.util.Scanner;

public class kstateproblem3 {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);

		System.out.println("X1:");
		int xOne = s.nextInt();
		System.out.println("O1:");
		int oOne = s.nextInt();
		System.out.println("X2:");
		int xTwo = s.nextInt();
		System.out.println("O1:");
		int oTwo = s.nextInt();
		System.out.println("X3:");
		int xThree = s.nextInt();
		System.out.println("O3:");
		int oThree = s.nextInt();

		if ((xOne + xTwo + xThree) == 15) {
			System.out.println("Output: X won");
		} else if ((oOne + oTwo + oThree) == 15) {
			System.out.println("Output: O won");
		}

		if ((((15 - xOne - xTwo) != xThree)) && (((15 - xThree - xTwo) != xOne)) && (((15 - xThree - xOne) != xTwo))){
			System.out.println("one");
		}
		if((((15 - xOne - xTwo) != oThree)) && (((15 - xOne - xTwo) != oTwo)) && (((15 - xOne - xTwo) != oOne))){
			System.out.println("two");
		}
		
		if((((15 - xOne - xThree) != oThree)) && (((15 - xOne - xThree) != oTwo))){
			System.out.println("three");
		}
		
		if((((15 - xOne - xThree) != oOne)) && (((15 - xTwo - xThree) != oThree))){
			System.out.println("four");
		}
		if((((15 - xTwo - xThree) != oTwo)) && (((15 - xTwo - xThree) != oOne))){
			System.out.println("five");
		}
		int[][] array = new int[3][3];
		array[0][0] = 6;
		array[1][0] = 1;
		array[2][0] = 8;
		array[0][1] = 7;
		array[1][1] = 5;
		array[2][1] = 3;
		array[0][2] = 2;
		array[1][2] = 9;
		array[2][2] = 4;
		for (int i = 0; i < 0; i++) {

		}

		s.close();
	}
}