#include <stdio.h>
#include <string.h>
int main()
{
  int n,i,j,num=0;
  char book[1000][51]={0};
  char top[50]={0};
  int count[1000]={0};

  printf("팔린 책의 권 수 : ");  
  scanf("%d",&n);
  
  for(i=0;i<n;i++){
    scanf("%s",book[i]);
  }

  for(i=0;i<n;i++){
    for(j=i;j<n;j++){
      char * str1 = book[i];
      char * str2 = book[j];
      if(strcmp(str1,str2)==0){
        count[i]++;
      }
    }
  }

  num=0;
  for(i=1;i<n;i++){
    if(count[num]<count[i]){
      num=i;
    }
    if(count[num]==count[i]){
      int alpha1,alpha2;
      alpha1=book[num][0];
      alpha2=book[i][0];
      (int)alpha1 < (int)alpha2 ? (num = num) : (num = i);
    }
  }

  printf("가장 많이 팔린 책 제목 : %s",book[num]);
  return 0;
}