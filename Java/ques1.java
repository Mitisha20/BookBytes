//Enter 3 numbers from the user & make a function to print their average.
import java.util.*;

public class ques1{

//function to cal avg
public static void CalAvg (float a, float b,float c){
float average=(a+b+c)/3;
System.out.println("The average of "+a+", "+b+" and "+c+" is "+average);
}

//main function
public static void main(String[] args){

//take inputs
Scanner sc = new Scanner(System.in);

System.out.print("Enter first number:");
float a = sc.nextFloat();

System.out.print("Enter second number:");
float b = sc.nextFloat();

System.out.print("Enter third number:");
float c = sc.nextFloat();
CalAvg(a,b,c);
sc.close();
}}