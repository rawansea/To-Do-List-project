document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
    const motivation = document.getElementById("motivation");
    const notes = document.getElementById("notes");

    const motivationalQuotes = [
        "You're doing great, Rawan! 💪",
        "Keep pushing forward! 🚀",
        "Every little step counts! 🌱",
        "Stay strong, you got this! 🔥",
        "Believe in yourself! ✨"
    ];

    function addTaskPls() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Oops! Please enter a task first.");
            return;
        }

        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("deleteBtn");

        deleteBtn.addEventListener("click", function () {
            if (confirm("Delete this task?")) {
                li.remove();
            }
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = "";

        // Show a random motivational message
        motivation.innerText = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    }

    addButton.addEventListener("click", addTaskPls);

    notes.addEventListener("input", function () {
        localStorage.setItem("rawan_notes", notes.value);
    });

    // Load saved notes
    if (localStorage.getItem("rawan_notes")) {
        notes.value = localStorage.getItem("rawan_notes");
    }
});
