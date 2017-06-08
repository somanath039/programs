import java.util.*;
import java.lang.*;
import java.io.*;

class Number {
	public static void main (String[] args) {
	    Scanner scan=new Scanner(System.in);
	    int iNumber=scan.nextInt();
	    if(iNumber > 0){
	        System.out.println("Positive");
	    }
	    if(iNumber < 0){
	        System.out.println("Negative");
	    }
	    if(iNumber == 0){
	        System.out.println("Zero");
	    }
	    else{
		System.out.println("-1");
	    }
	}
}
