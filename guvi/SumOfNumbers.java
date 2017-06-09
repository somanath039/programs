import java.io.*;
import java.util.*;

public class SumOfNumbers {
	public static void main( String args[]) {
		Scanner scan = new Scanner (System.in);
		int isize = scan.nextInt();
		int []arr = new int[isize];
		int isum=0;
		for(int i=0 ;i< isize ;i++){
			arr[i]=scan.nextInt();
			isum+=arr[i];
		}
		System.out.println(isum);
	}
}
