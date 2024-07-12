//Write a program to enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros entered. 
import java.util.*;
public class ques7 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int positiveCounter=0;
        int negativeCounter=0;
        int zeroCounter=0;
        Boolean continueInput;
        
        do{
        System.out.println("Enter a number : ");
        int n=sc.nextInt();
        
        if(n>0){
        positiveCounter++;
        }
        else if(n<0){
        negativeCounter++;
        }
        else{
        zeroCounter++;
        }
        
        System.out.println("Do you want to enter another number?(y/n): ");
        continueInput= sc.next().charAt(0);
        }
        while(continueInput='y');
        
    }
}
