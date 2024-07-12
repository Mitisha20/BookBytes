//Write a function which takes in 2 numbers and returns the greater of those two.

import java.util.*;

public class ques3 {
    public static void greatestOfTwo(int a, int b){
    if(a>=b){
    System.out.println("The greatest number is : "+a);
    }
    else{
    System.out.println("The greatest number is : "+b);
    }
    }
    
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        
        System.out.print("Enter first number : ");
        int a = sc.nextInt();
        
        System.out.print("Enter second number : ");
        int b = sc.nextInt();
        
        if( a ==  b){
        System.out.println("Invalid input");
        }
        else{
        greatestOfTwo(a, b);
        }
        sc.close();
    }
}

