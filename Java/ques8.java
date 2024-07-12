//Two numbers are entered by the user, x and n. Write a function to find the value of one number raised to the power of another i.e. xn.
import java.util.*;

public class ques8 {
    public static void power(double x, double n){
    double result = Math.pow( x,  n);
    System.out.println(result);
    }
    
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter base number (x) : ");
        double x=sc.nextDouble();
        System.out.println("Enter power number (n) : ");
        double n=sc.nextDouble();
        power(x,n);
        sc.close();
    }
}
