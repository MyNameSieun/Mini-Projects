let handleId = 0;
const time = document.getElementById("time");
const go = document.getElementById("go");
const stop = document.getElementById("stop");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const secondes = date.getSeconds();

  const showTime = `${hours}시 ${minutes}분 ${secondes}초`;
  time.textContent = showTime;
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
