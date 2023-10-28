#include <cs50.h>
#include <stdio.h>
#include <string.h>

typedef struct
{
  string name;
  string number;
} person;

int main(void)
{
  person persons[2];
  persons[0].name = "Carter";
  persons[0].number = "+1-111-111-1111";

  persons[1].name = "David";
  persons[1].number = "+1-222-111-2222";
}