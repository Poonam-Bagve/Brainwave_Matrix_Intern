document.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.getElementById("date");
    const dayDisplay = document.getElementById("dayDisplay");
    const taskContainer = document.getElementById("taskContainer");
    
    const hours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

    function loadTasks() {
        taskContainer.innerHTML = "";
        hours.forEach((hour, index) => {
            const div = document.createElement("div");
            div.classList.add("time-block");

            const input = document.createElement("input");
            input.type = "text";
            input.placeholder = `Task for ${hour}`;
            input.value = localStorage.getItem(`task-${index}`) || "";

            const saveBtn = document.createElement("button");
            saveBtn.innerText = "Save";
            saveBtn.addEventListener("click", () => {
                localStorage.setItem(`task-${index}`, input.value);
                saveBtn.innerText = "Saved";
                setTimeout(() => saveBtn.innerText = "Save", 1000);
            });

            div.appendChild(input);
            div.appendChild(saveBtn);
            taskContainer.appendChild(div);
        });
    }

    dateInput.addEventListener("change", function () {
        const selectedDate = new Date(this.value);
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        if (!isNaN(selectedDate)) {
            dayDisplay.textContent = `Day: ${daysOfWeek[selectedDate.getDay()]}`;
        } else {
            dayDisplay.textContent = "";
        }
        
        loadTasks();
    });

    loadTasks(); // Load tasks on page load
});
