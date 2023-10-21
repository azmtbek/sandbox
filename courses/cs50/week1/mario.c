#include <cs50.h>
#include <stdio.h>

int get_size(void);
void print_grid(int size);

int main(void)
{
  // Get size of grid
  int n = get_size();

  // Print grid of bricks
  print_grid(n);
}

int get_size(void)
{
  int n;
  do
  {
    n = get_int("Size of n: ")
  } while (n < 1);
  return n;
}

void print_grid(int size)
{
  for (int i = 0; i < size; i++)
  {
    for (int j = 0; j < size; j++)
    {
      printf("#")
    }
    printf("\n")
  }
}

int main2(void)
{
  const int n = 5;
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < n; j++)
    {
      printf("#");
    }
    printf("\n");
  }
}