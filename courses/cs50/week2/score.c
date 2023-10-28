#include <cs50.h>
#include <stdio.h>

const int N = 3;

float average(int length, int array[]);

int main(void)
{
  // first case
  int score1 = 72;
  int score2 = 73;
  int score3 = 33;

  printf("Average: %f\n", (score1 + score2 + score3) / 3.0);

  // second case
  int scores[3];
  scores[0] = 72;
  scores[1] = 73;
  scores[2] = 33;

  printf("Average: %f\n", (scores[0] + scores[1] + scores[2]) / (float)3);

  // third case
  int scores[N];

  for (int i = 0; i < N; i++)
  {
    scores[i] = get_int("Score: ");
  }

  printf("Average: %f\n", average(N, scores));
}

float average(int length, int array[])
{
  int sum = 0;
  for (int i = 0; i < length; i++)
  {
    sum += array[i];
  }
  return sum / (float)length;
}