#include <stdio.h>

int main(void)
{
    int i = 3;
    while (i > 0)
    {
        printf("count %d\n", i);
        i--;
    }

    for (int i = 0; i < 3; i++)
    {
        printf("meow\n");
    }
}