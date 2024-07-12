//Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo

public class ques4 {
    public static void main(String[] args) {
    
    //sample input
    int a[] = {1,2,0,2,1,0};
    
    //initialize the number of 0s, 1s and 2s to 0
        int b0=0;
        int b1=0;
        int b2=0;
        
        
        //counting the number of 0s, 1s and 2s
        for(int i=0;i<a.length;i++){
        if(a[i]==0) b0++;
        else if(a[i]==1) b1++;
        else{b2++;}
        }
        
        //sorting
        int k=0;
        for(int i=0;i<b0;i++) a[k++]=0;
        for(int i=0;i<b1;i++) a[k++]=1;
        for(int i=0;i<b2;i++) a[k++]=2;
        
        //print result
        for(int i=0;i<a.length;i++){
        System.out.println(a[i]);
        }
    }
}
