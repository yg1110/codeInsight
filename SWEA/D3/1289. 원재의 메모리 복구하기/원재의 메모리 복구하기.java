import java.util.Arrays;
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        for(int t=0; t<N; t++) {
            String s = sc.next();
            String[] target = s.split("");
            String[] current = new String[target.length];
            Arrays.fill(current, "0");
            int count = 0;
            for(int i=0; i<target.length; i++) {
                if(!target[i].equals(current[i])) {
                    count++;
                    String bit = current[i].equals("0") ? "1" : "0";
                    for(int k=i; k<current.length; k++) {
                        current[k] = bit;
                    }
                }
            }
            System.out.println("#" + (t + 1) + ' ' + count);
        }
    }
}