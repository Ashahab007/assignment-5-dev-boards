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
  //   console.log(convertedTotCounter);

  //   let convertedTaskCounter = parseInt(taskCounter.innerText);

  //   convertedTaskCounter = card.length;
  //   taskCounter.innerText = convertedTaskCounter;
  let btnComplete = document.getElementsByClassName("btn-complete")[i];
  btnComplete.addEventListener("click", function (event) {
    alert("Board updated successfully");
    event.target.setAttribute("disabled", false);

    if (event.target.getAttribute("disabled") === "false") {
      // taskCounter.innerText = convertedTaskCounter - 1;
      taskCounter.innerText -= 1;
      convertedTotCounter += 1;
      // console.log(convertedTotCounter);
    }
    totalCounter.innerText = convertedTotCounter;
    //   console.log(event.target.getAttribute("disabled") === "false");
    //   console.log(typeof convertedTaskCounter);
  });
}
