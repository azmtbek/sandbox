#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>
void swap(int *a, int *b);

int main(void)
{

  int x;
  int y;

  // x = malloc(sizeof(int));
  x = 42;
  y = 13;

  printf("x: %i, y: %i \n", x, y);
  swap(&x, &y);
  printf("x: %i, y: %i \n", x, y);
}

void swap(int *a, int *b)
{
  int tmp = *a;
  *a = *b;
  *b = tmp;
}

int main3(void)
{

  int *x;
  int *y;

  x = malloc(sizeof(int));

  *x = 42;
  y = x;

  *y = 13;
}