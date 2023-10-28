#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
  string name = get_string("What is your name? ");
  int l = strlen(name);
  int n = 0;
  while (name[n] != '\0')
  {
    n++;
  }

  printf("Length %i\n", n);
  printf("Length %i\n", l);
}