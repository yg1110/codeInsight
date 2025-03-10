import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int M = Integer.parseInt(br.readLine());
        Set<Integer> S = new HashSet<>();

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < M; i++) {
            String[] parts = br.readLine().split(" ");
            String op = parts[0];
            int x = 0;
            if (parts.length > 1) {
                x = Integer.parseInt(parts[1]);
            }

            switch (op) {
                case "add":
                    S.add(x);
                    break;

                case "remove":
                    S.remove(x);
                    break;

                case "check":
                    sb.append(S.contains(x) ? 1 : 0).append("\n");
                    break;

                case "toggle":
                    if (S.contains(x)) {
                        S.remove(x);
                    } else {
                        S.add(x);
                    }
                    break;

                case "all":
                    S.clear();
                    for (int num = 1; num <= 20; num++) {
                        S.add(num);
                    }
                    break;

                case "empty":
                    S.clear();
                    break;
            }
        }

        System.out.print(sb);
    }
}