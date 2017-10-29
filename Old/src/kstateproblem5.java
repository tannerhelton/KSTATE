import java.util.Scanner;

public class kstateproblem5 {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);

		System.out.println("Route 1 number: ");
		int r1 = s.nextInt();
		double[] routeOne = new double[r1];
		String[] stringOne = new String[r1];
		
		
	for(int i = 0; i<r1; i++)
	{
		System.out.println("dist: ");
		routeOne[i] = s.nextDouble();
		s.nextLine();
		System.out.println("type: ");
		stringOne[i] = s.nextLine();
	}
	
	System.out.println("Route 2 number: ");
	int r2 = s.nextInt();
	double[] routeTwo = new double[r2];
	String[] stringTwo = new String[r2];
	
for(int i = 0; i<r2; i++)
{
	System.out.println("dist: ");
	routeTwo[i] = s.nextDouble();
	s.nextLine();
	System.out.println("type: ");
	stringTwo[i] = s.nextLine();
}

	System.out.println("ave speed City: ");
	double city = s.nextDouble();
	System.out.println("ave speed High: ");
	double high = s.nextDouble();
	System.out.println("ave speed Inter: ");
	double inter = s.nextDouble();
	
	double timeOne = 0;
	double timeTwo = 0;
	
	for(int i = 0; i<r1; i++)
	{
		if(stringOne[i].equals("i")){
			timeOne += (routeOne[i]/inter)*60;
		}
		if(stringOne[i].equals("h")){
			timeOne += (routeOne[i]/high)*60;
		}
		if(stringOne[i].equals("c")){
			timeOne += (routeOne[i]/city)*60;
		}
	}
	
	for(int i = 0; i<r2; i++)
	{
		if(stringTwo[i].equals("i")){
			timeTwo += (routeTwo[i]/inter)*60;
		}
		if(stringTwo[i].equals("h")){
			timeTwo += (routeTwo[i]/high)*60;
		}
		if(stringTwo[i].equals("c")){
			timeTwo += (routeTwo[i]/city)*60;
		}
	}
		if(timeOne<timeTwo){
			System.out.println("First is faster;");
		}else if(timeTwo<timeOne){
			System.out.println("Second is faster;");
		}
		System.out.println(timeOne + " min; "+ timeTwo+ " min");
		System.out.println("Change ");
		s.nextLine();
		String change = s.nextLine();
		double newSpeed = s.nextDouble();
		timeOne = 0;
		timeTwo = 0;
		
		if(change.equals("i")){
			inter = newSpeed;
		}
		if(change.equals("h")){
			high = newSpeed;
		}
		if(change.equals("c")){
			city = newSpeed;
		}
		
		
		
		for(int i = 0; i<r1; i++)
		{
			if(stringOne[i].equals("i")){
				timeOne += (routeOne[i]/inter)*60;
			}
			if(stringOne[i].equals("h")){
				timeOne += (routeOne[i]/high)*60;
			}
			if(stringOne[i].equals("c")){
				timeOne += (routeOne[i]/city)*60;
			}
		}
		
		for(int i = 0; i<r2; i++)
		{
			if(stringTwo[i].equals("i")){
				timeTwo += (routeTwo[i]/inter)*60;
			}
			if(stringTwo[i].equals("h")){
				timeTwo += (routeTwo[i]/high)*60;
			}
			if(stringTwo[i].equals("c")){
				timeTwo += (routeTwo[i]/city)*60;
			}
		}
			if(timeOne<timeTwo){
				System.out.println("First is faster;");
			}else if(timeTwo<timeOne){
				System.out.println("Second is faster;");
			}
			System.out.println(timeOne + " min; "+ timeTwo+ " min");
		s.close();

	}
}

