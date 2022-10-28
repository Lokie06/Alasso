import java.util.*;

public class ws1 {
    public static void main(String[] args){
        Scanner num = new Scanner(System.in);
        System.out.println('\n');
        System.out.print("Enter number you want to print table of ");
        int k = num.nextInt();
        System.out.println('\n');
        for (int i=1;i<=10;i++)
        {
            System.out.println(k + " x " + i + " = " + k*i);
        }
        num.close();
    }
}
