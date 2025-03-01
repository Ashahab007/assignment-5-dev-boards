// Date in title
let titleDate = new Date();
document.getElementById("title-date").innerHTML = titleDate.toDateString();

// acivitylog function
/* function acivitylogFunction() {
  let history = document.querySelectorAll(".card h3")[0].innerText;
  return history;
}
alert(acivitylogFunction()); */

const card = document.querySelectorAll(".card");
// console.log(card.length);
let totalCounter = document.getElementById("total-counter");
let convertedTotCounter = parseInt(totalCounter.innerText);
totalCounter.innerText = convertedTotCounter;
for (let i = 0; i < card.length; i++) {
  let taskCounter = document.getElementById("task-counter");
  taskCounter.innerText = card.length;
  console.log(convertedTotCounter);

  //   let convertedTaskCounter = parseInt(taskCounter.innerText);

  //   convertedTaskCounter = card.length;
  //   taskCounter.innerText = convertedTaskCounter;
  let btnComplete = document.getElementsByClassName("btn-complete")[i];
  btnComplete.addEventListener("click", function (event) {
    console.log(event.target.querySelector(".card"));

    alert("Board updated successfully");
    event.target.setAttribute("disabled", false);

    let activityLogMessage = document.getElementById("activity-log-message");
    let p = document.createElement("p");
    p.classList.add("bg-primary");
    p.classList.add("p-2");
    p.classList.add("mt-3");
    p.innerHTML = `
    You have Complete The Task at ${logTime()}
    `;
    // let history = event.target;
    // console.log(history);
    // console.log(activityLogMessage);

    if (event.target.getAttribute("disabled") === "false") {
      // taskCounter.innerText = convertedTaskCounter - 1;
      taskCounter.innerText -= 1;
      console.log(typeof taskCounter.innerText);
      convertedTotCounter += 1;
      totalCounter.innerText = convertedTotCounter;
      activityLogMessage.appendChild(p);
      if (taskCounter.innerText === "0") {
        alert("Congratulations!!! You have completed all the current task");
      }
      // console.log(convertedTotCounter);
    }
    //   console.log(event.target.getAttribute("disabled") === "false");
    //   console.log(typeof convertedTaskCounter);
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
