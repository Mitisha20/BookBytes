//Write a function that takes in age as input and returns if that person is eligible to vote or not. A person of age > 18 is eligible to vote.

import java.util.*;
public class ques5 {

    //function to check eligibility
    public static void eligibleToVote(int age){
    if(age>=18){
    System.out.println("Eligible");
    }
    else{
    System.out.println("Not eligible");
    }
    }
    
    
    //main function
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        
        //take user input
        System.out.print("Enter age : ");
        int age = sc.nextInt();
        
        //call function
        eligibleToVote(age);
        
        sc.close();
    }
}
