#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main(int argc, char *argv[]) {
    double a = (double) atoi(argv[1]);
    double b = (double) atoi(argv[2]);
    double c = (double) atoi(argv[3]);

    double d = sqrt((b * b) - (4 * a * c));
    double root1 = (-b + d) / (2 * a);
    double root2 = (-b - d) / (2 * a);

    printf("%5.2f\n%5.2f\n", root1, root2);

    return EXIT_SUCCESS;
}
