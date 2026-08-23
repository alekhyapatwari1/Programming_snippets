public class Factorial {
    public static long getFactorial(int n) {
        if (n <= 1) return 1;
        return n * getFactorial(n - 1);
    }

    public static void main(String[] args) {
        System.out.println("Factorial of 5: " + getFactorial(5));
    }
}
