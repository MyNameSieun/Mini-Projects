let handleId = 0; // 동작에 대한 id 저장
const timeChange = document.getElementById("time");
const go = document.getElementById("go");
const stop = document.getElementById("stop");

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconeds = date.getSeconds();
  const time = `${hour}:${minutes}:${seconeds}`;
  timeChange.textContent = time;
}

getTime();

go.onclick = function () {
  if (handleId == 0) {
    handleId = setInterval(getTime, 1000);
  }
};
stop.onclick = function () {
  clearInterval(handleId);
  handleId = 0;
};
