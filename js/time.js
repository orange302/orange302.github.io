var now = new Date();

function createtime() {
  var targetDate = new Date("01/20/2023 00:00:00");
  now.setTime(now.getTime() + 250);
  var timeDiffInSec = (now - targetDate) / 1000;
  var days = Math.floor(timeDiffInSec / 86400);
  var hours = Math.floor((timeDiffInSec % 86400) / 3600);
  var minutes = Math.floor((timeDiffInSec % 3600) / 60);
  var seconds = Math.floor(timeDiffInSec % 60);

  var isClassTime = (hours >= 7 && hours < 12) || (hours >= 14 && hours < 17);
  var imgSrc = "/img/放学.svg";
  var imgTitle = "期待周末中~";
  var imgText = `<br> 本站居然运行了 ${days} 天</span><span id='runtime'> ${hours} 小时 ${minutes} 分 ${seconds} 秒 </span>`;
  if (hours >= 7 && hours < 12) {
    imgSrc = "/img/上课.svg";
    imgTitle = "期待下课中~";
  } else if (hours >= 14 && hours < 17) {
    imgSrc = "/img/上课.svg";
    imgTitle = "期待放学中~";
  } else {
    imgSrc = "/img/放学.svg";
    imgTitle = "期待周末中~";
  }
  var imgHtml = `<img class='boardsign' src='${imgSrc}' title='${imgTitle}'><span class='textTip'> ${imgText} </span> <i class='fas fa-heartbeat' style='color:red'></i>`;
  
  document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = imgHtml);
}

setInterval(() => {
  createtime()
}, 250);
