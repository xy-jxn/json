var i,j,k;                                    // FOR문에 사용할 변수 선언
let output = ["마","인","드","웨","이"];      // 배열을 사용하여 출력할 '마인드웨이'를 각 인덱스에 한 단어씩 넣어줌
let result = " ";                             // 값을 더한 뒤 출력할 빈 공간 선언
for (i = 0; i < 5; i++){                      // 행에 따른 FOR문
  for(j=i;j<5;j++){                           // 하나씩 줄어드는 '마인드뭬이' 출력하는 FOR문
    result += output[j];                      // 각 인덱스에 해당하는 단어들을 빈 공간 RESULT에 누적시켜줌
  }
  for(k=0;k<i;k++){                           // 하나씩 늘어드는 '마인드뭬이' 출력하는 FOR문
    result += output[k];                      // 각 인덱스에 해당하는 단어들을 빈 공간 RESULT에 누적 시켜줌
  }
    console.log (result);                     // 누적시켜준 RESULT를 출력해줌
  result = " ";                               // 다시 RESULT를 빈 공간으로 만들어주고 첫번쩨 FOR문 실행해줌

}