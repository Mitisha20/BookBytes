//Find the maximum and minimum element in an array
public class ques2 {
    public static void maxMin(int array[]){
    
    //initialize
    int min=array[0];
    int max=array[0];
    
    //iterate through the array
    for(int i=0;i<array.length;i++){
    
    //find min
    if (array[i]<min){
    min=array[i];
    }
    
    //find max
    if(array[i]>min){
    max=array[i];
    }
    
    }
    
    //print result
    System.out.println("Min element : "+min);
    System.out.println("Max element : "+max);
    }
    
    
    public static void main(String[] args) {
    
        //sample array
        int array[]={1,2,3,4};
        
        //call function
        maxMin(array);
    }
    
}
