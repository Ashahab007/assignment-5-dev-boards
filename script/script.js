// Date in title
let titleDate = new Date();
document.getElementById("title-date").innerHTML = titleDate.toDateString();

const card = document.querySelectorAll(".card");
// console.log(card.length);
for (let i = 0; i < card.length; i++) {
  let taskCounter = document.getElementById("task-counter");
  taskCounter.innerText = card.length;
  let totalCounter = document.getElementById("total-counter");
  let convertedTotCounter = parseInt(totalCounter.innerText);
  console.log(convertedTotCounter);

  //   let convertedTaskCounter = parseInt(taskCounter.innerText);

  //   convertedTaskCounter = card.length;
  //   taskCounter.innerText = convertedTaskCounter;
  let btnComplete = document.getElementsByClassName("btn-complete")[i];
  btnComplete.addEventListener("click", function (event) {
    alert("Board updated successfully");
    event.target.setAttribute("disabled", false);

    let activityLogMessage = document.getElementById("activity-log-message");
    if (event.target.getAttribute("disabled") === "false") {
      // taskCounter.innerText = convertedTaskCounter - 1;
      taskCounter.innerText -= 1;
      console.log(typeof taskCounter.innerText);
      convertedTotCounter += 1;
      totalCounter.innerText = convertedTotCounter;
      console.log(totalCounter);

      if (taskCounter.innerText === "0") {
        alert("Congratulations!!! You have completed all the current task");
      }
      // console.log(convertedTotCounter);
    }
    //   console.log(event.target.getAttribute("disabled") === "false");
    //   console.log(typeof convertedTaskCounter);
  });
}
