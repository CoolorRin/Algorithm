#include <stdio.h>

int getCowNumIn(int year)
{
  int cow_num = 1;
  if (year <= 1)
    return cow_num;
  cow_num = getCowNumIn(year - 1) + getCowNumIn(year - 3);
  return cow_num;
}

int main()
{
  int i = 0;
  int a[100];
  while (scanf("%d", &a[i]))
  {
    if (a[i] == 0)
      break;
    else
      i++;
  };
  i = 0;
  while (a[i] > 0)
  {
    printf("%d\n", getCowNumIn(a[i]));
    i++;
  }
  return 0;
}