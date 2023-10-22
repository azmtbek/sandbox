#include <cs50.h>
#include <stdio.h>
#include <string.h>

int numbers();

int main(void)
{

  // case 0
  // numbers();

  // case 1

  string strings[] = {
      "battleship",
      "boot",
      "cannon",
      "iron",
      "thimble",
      "top hat"};

  string s = get_string("String: ");
  for (int i = 0; i < 6; i++)
  {
    if (strcmp(strings[i], s) == 0)
    {
      printf("Found\n");
      return 0;
    }
  }

  printf("Not found\n");
  return 1;
  // echo $?
}

int numbers()
{
  int numbers[] = {20, 5, 100, 500, 1, 50};

  int n = get_int("Number: ");
  for (int i = 0; i < 7; i++)
  {
    if (numbers[i] == n)
    {
      printf("Found\n");
      return 0;
    }
  }

  printf("Not found\n");
  return 1;
}