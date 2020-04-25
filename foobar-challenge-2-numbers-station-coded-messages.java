public class Solution {
    public static int[] solution(int[] l, int t) {
        // Your code here
        
        //Declaration of necessary variables
        int[] ri= new int[2];   //for returning the answer
        int i,j,sum=0;
        //logic for checking the sum
        for(i=0;i<l.length;i++)
        {
            for(j=i;j<l.length;j++)
            {   
                sum += l[j];
                if(sum == t)    
                {
                    ri[0] = i;
                    ri[1] = j;
                    return ri;
                }
            }
            sum = 0;
        }
         ri[0] = -1;
         ri[1] = -1;
        return ri;
    }
}
