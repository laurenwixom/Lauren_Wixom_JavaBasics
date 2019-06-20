
public class oneToTwoFiftyFive {
    public static void main(String[] args) {

        for(int i = 0; i < 256; i++) {
            System.out.println(i);
        }
    }
}







public class oddNumbersTwoFiftyFive {
    public static void main(String[] args) {

         for(int i = 1; i < 256; i = i + 2){
            System.out.println(i);      
        }
    }
}




public class printSum {
    public static void main(String[] args) {
      int sum = 0;
    
        for(int i = 0; i <= 10; i++){
            sum += i;
            System.out.println("New Number: " + i + " Sum: " + sum);
        }
    }
}








public class iteratingThroughArray(int[] array){
    public static void main(String[] args) {
    int length = array.length;

    for(int i = 0; i < length; i++){
        System.out.println(array[i]);
    }
}
}






public static void main(String[] args) {
    System.out.println(3);
        int size = in.nextInt();
        System.out.println(-3);
        int max = in.nextInt();
        print(arr);
        findMinMax(arr);
        System.out.println(main);
}




public static int[][] zeroNegatives(int[][] arr)
{
    for (int x = 0; x < arr.length; x++)
    {
        for (int x = 0; c<arr[r].length; x++)
        {
            if (arr[r][x] < 1)
            {
                arr[r][x]*-1;
            }
        }
    }
    return ;
}








public static void main(String args[]){
    int array[] = new int[]{1, 5, 10, -2};
 
    int max = getMax(array);
    System.out.println("10 "+max);
 

    int min = getMin(array);
    System.out.println("-2 "+min);
  }
 
 
  public static int getMax(int[] inputArray){ 
    int maxValue = inputArray[0]; 
    for(int i=1;i < inputArray.length;i++){ 
      if(inputArray[i] > maxValue){ 
         maxValue = inputArray[i]; 
      } 
    } 
    return maxValue; 
  }
}












public static void main(String[] args) {
    double avg = Arrays.stream(new int[]{2,10,3}).average().getAsDouble();

    System.out.println("avg: " + avg);
}








Object temp = pool[position];

for (int i = 0; i < position; i++) {                
    array[i+1] = array[i];
}
array[0] = temp;