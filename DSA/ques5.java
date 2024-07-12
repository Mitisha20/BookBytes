//Move all the negative elements to one side of the array

public class ques5 {
    
    public static void moveNegToEnd(int array[]) {
        int left = 0;
        int right = array.length - 1;

        while (left <= right) {
            if (array[left] >= 0) {
                // If the left element is non-negative, move the left pointer to the right
                left++;
            } else if (array[right] < 0) {
                // If the right element is negative, move the right pointer to the left
                right--;
            } else {
                // Swap the negative element at 'left' with the non-negative element at 'right'
                int temp = array[left];
                array[left] = array[right];
                array[right] = temp;
                // Move both pointers inward
                left++;
                right--;
            }
        }

        // Print the array after moving negatives to the end
        System.out.println("Array after moving negatives to one side:");
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
        }
    }

    public static void main(String[] args) {
        int array[] = {12, -3, -5, 7, -19, 0, 15, -8};
        moveNegToEnd(array);
    }
}
