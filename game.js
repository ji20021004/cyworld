const startWord = () => {
    
    //1.변수 설정
    //1)입력값
    let myWord = document.getElementById("myWord").value
    //2)제시어
    let word = document.getElementById("word").innerText
    //3)입력값의 첫번째 글자
    let firstWord = myWord[0]
    //4)제시어의 마지막 글자
    let lastWord = word[word.length-1]
    
    //2.조건문 사용 - 입력값의 첫번째 글자와 제시어의 마지막 글자가 같다면
    if(firstWord===lastWord){ //같다면
        //1)결과에 정답입니다! 표시
        document.getElementById("result").innerText = "정답입니다!"
        //2)제시어를 입력값으로 변경
        document.getElementById("word").innerText = myWord
        //3)입력값을 공백으로 변경
        document.getElementById("myWord").value=""
    } else{ //다르다면
        //1)결과에 땡! 표시
        document.getElementById("result").innerText = "땡!"
        //2)입력값을 공백으로 변경
        document.getElementById("myWord").value=""
    }
}
