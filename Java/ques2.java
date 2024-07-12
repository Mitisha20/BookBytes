//Write a function to print the sum of all odd numbers from 1 to n.
import java.util.Scanner;  // Import the Scanner class

public class ques2 {
    public static void sumofodd(int n){
    int sum=0;
    for(int i=0;i<=n;i++){
    
    //check if number is odd
    if(i%2!=0){
    sum = sum+i;
    }
    }
    
    //print result
    System.out.print("the sum of odd numbers from 1 to " +n+ " is : "+sum);
    }
    
    //main function
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        
        //take input
        System.out.print("Enter number : ");
        int n = sc.nextInt();
        sumofodd(n);
        sc.close();
    }
}

