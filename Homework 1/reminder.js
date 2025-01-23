let reminders = [];
let textInput = document.getElementById("textInput");
let colorInput = document.getElementById("colorInput");
let addBtn = document.getElementById("addBtn");
let showBtn = document.getElementById("showBtn");
let deleteBtn = document.getElementById("deleteBtn");
let descriptionInput = document.getElementById("descriptionInput");
let priority = document.getElementById("priority");
let dateInput = document.getElementById("dateInput");

addBtn.addEventListener("click", function () {
    if (!textInput.value) {
        alert("Please enter a reminder");
        return;
    }
    if (!colorInput.value) {
        alert("Please enter a color");
        return;
    }
    if (!descriptionInput.value) {
        alert("Please add a description");
        return;
    }
    if (!priority.value) {
        alert("Please select a priority");
        return;
    }
    if (!dateInput.value) {
        alert("Please enter a date");
        return;
    }
    
    let reminder = new Reminder(textInput.value, colorInput.value, priority.value, dateInput.value, descriptionInput.value);
    reminders.push(reminder);
});

// Reminder constructor function
function Reminder(text, color, priority, date, description) {
    this.text = text;
    this.color = color;
    this.priority = priority;
    this.description = description;
    this.date = date;
}
showBtn.addEventListener("click", function () {
    let container = document.getElementById("remindersContainer");
    container.innerHTML = "";  // Clear the container before showing new reminders
    for (let i = 0; i < reminders.length; i++) {
        let reminder = reminders[i];
        let reminderDiv = document.createElement("div");
        reminderDiv.className = `reminder ${reminder.priority}`;
        reminderDiv.style.borderColor = reminder.color; // Set the border color based on the reminder color
        reminderDiv.innerHTML = `
            <h5 style="color:${reminder.color}">${reminder.text}</h5>
            <p><strong>Priority:</strong> ${reminder.priority}</p>
            <p>${reminder.description}</p>
            <p><em>${new Date(reminder.date).toLocaleString()}</em></p>
        `;
        container.appendChild(reminderDiv);
    }
});

deleteBtn.addEventListener("click", function () {
    reminders = [];  // Clear all reminders
    let container = document.getElementById("remindersContainer");
    container.innerHTML = "";  // Clear the container as well
});