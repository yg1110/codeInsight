import java.util.Scanner;

public class Solution {
  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int t = sc.nextInt();
      for(int T=1; T<=t; T++) {
        int N = sc.nextInt();
        int sum = 0;
        boolean isMinus = false;
        for(int i=1; i<=N; i++) {
          sum = isMinus ? sum - i : sum + i;
          isMinus = !isMinus;
        }
        System.out.println("#" + T + " " + sum);
      }
  }
}