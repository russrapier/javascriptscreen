document.querySelector(".push").onclick = function () {
  if (document.querySelector(".new-task input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector(".tasks").innerHTML += `
            <div class="task">
                <div class="task-name">
                    ${document.querySelector(".new-task input").value}
                </div>
                <button class="delete">
                <ion-icon name="trash-outline"></ion-icon>
                </button>
            </div> `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
