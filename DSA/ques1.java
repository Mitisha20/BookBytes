//Reverse an Array

import java.util.Arrays;
public class ques1{

//function to reverse array
public static void reverseArray(int array[]){

//initialize start and end index
int start = 0;
int end = array.length-1;

//loop to swap first and last elements
while(start<end){
int temp = array[start];
array[start] = array[end];
array[end] = temp;

//increament to move to the next elements
start++;
end--;
}
}


//main function
public static void main(String[] args) {

    //sample array
    int array[] = {1,2,3,4};
    
    //print original array
    System.out.println("Original array : " +Arrays.toString(array));
    
    //call function
    reverseArray(array);
    
    //print reversed array
    System.out.println("Reversed array : "+Arrays.toString(array));
    
}
}