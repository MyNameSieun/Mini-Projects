const dynamic = document.querySelector("#dynamic");

function randomString() {
  let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JavaScript"];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}

// 타이핑 리셋
function resetTyping() {
  dynamic.textContent = "";
  dynamicShow(randomString());
}

// 한 글자씩 텍스트 출력 함수
function dynamicShow(randomArr) {
  if (randomArr.length > 0) {
    dynamic.textContent += randomArr.shift();
    setTimeout(() => {
      dynamicShow(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}
dynamicShow(randomString());

function blink() {
  dynamic.classList.toggle("active");
}
setInterval(blink, 500);
