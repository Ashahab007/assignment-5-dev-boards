// Date in title
let titleDate = new Date();
document.getElementById("title-date").innerHTML = titleDate.toDateString();

let totalCounter = document.getElementById("total-counter");
let convertedTotCounter = parseInt(totalCounter.innerText);
totalCounter.innerText = convertedTotCounter;

const card = document.querySelectorAll(".card");

for (let i = 0; i < card.length; i++) {
  let taskCounter = document.getElementById("task-counter");
  taskCounter.innerText = card.length;

  let btnComplete = document.getElementsByClassName("btn-complete")[i];
  btnComplete.addEventListener("click", function (event) {
    let captureTitle =
      event.target.parentNode.parentNode.parentNode.querySelector(
        "h3"
      ).innerText;

    alert("Board updated successfully");

    event.target.setAttribute("disabled", false);

    let activityLogMessage = document.getElementById("activity-log-message");
    let p = document.createElement("p");
    p.classList.add("bg-primary");
    p.classList.add("p-2");
    p.classList.add("mt-3");
    p.innerHTML = `
    You have Complete The Task ${captureTitle} at ${logTime()}
    `;
    if (event.target.getAttribute("disabled") === "false") {
      taskCounter.innerText -= 1;

      convertedTotCounter += 1;
      totalCounter.innerText = convertedTotCounter;
      activityLogMessage.appendChild(p);

      if (taskCounter.innerText === "0") {
        alert("Congratulations!!! You have completed all the current task");
      }
    }
  });
}

// clear history button
document
  .getElementById("btn-clear-history")
  .addEventListener("click", function () {
    document.getElementById("activity-log-message").innerHTML = "";
  });

// activity log time
function logTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let time = `${hours} : ${minutes} : ${seconds} ${ampm}`;
  return time;
}

// discover button
document.getElementById("btn-discover").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

// Random color button
document
  .getElementById("btn-random-color")
  .addEventListener("click", function () {
    let h = 0;
    let s = Math.ceil(Math.random() * 100);
    let l = Math.ceil(Math.random() * 100);
    let a = Math.random();
    let hsla = `hsla(${h}, ${s}%, ${l}%, ${a})`;
    document.body.style.backgroundColor = hsla;
  });
