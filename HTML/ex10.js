function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span class="status">✗</span> 
        <span class="task-text">${taskText}</span>
        <button class="delete-btn" onclick="removeTask(event)">X</button>
    `;

    li.addEventListener("click", function (e) {
        if (e.target.className === "delete-btn") return;

        li.classList.toggle("completed");
        let status = li.querySelector(".status");
        status.textContent = li.classList.contains("completed") ? "✓" : "✗";
    });

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function removeTask(event) {
    event.stopPropagation();
    event.target.parentElement.remove();
}