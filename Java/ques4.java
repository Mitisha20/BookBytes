//Write a function that takes in the radius as input and returns the circumference of a circle.

import java.util.*;
public class ques4 {

    //function to calculate circumference
    public static void circumference(double r){
    double c = 2*(3.14)*r;
    
    //print result
    System.out.println("The circumference of circle is : "+c);
    }
    
    
    //main function
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        
        //input from user
        System.out.print("Enter the radius of the circle : ");
        double r = sc.nextDouble();
        
        //call function
        circumference(r);
        
        //close scanner class to save memory
        sc.close();
    }
}
