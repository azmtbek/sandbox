#include <cs50.h>
#include <stdio.h>

int main(void)
{
  int n = 50;

  int *p = &n;
  printf("%p\n", &n);

  printf("%p\n", p);
  printf("%p\n", &p);
  printf("%i\n", *p);

  char *c = "HI!";
  printf("%p\n", c);
  printf("%s\n", c);
  printf("%p\n", &c[0]);
  printf("%p\n", &c[1]);
  printf("%p\n", &c[2]);
  printf("%c\n", *c);
  printf("%c\n", *(c + 1));
  printf("%c\n", *(c + 2));
  printf("%s\n", c);
  printf("%s\n", (c + 1));
  printf("%s\n", (c + 2));
}
