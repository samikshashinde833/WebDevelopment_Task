const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill all required fields.";
    }

    else if (!emailPattern.test(email)) {
        formMessage.style.color = "red";
        formMessage.textContent = "Please enter a valid email address.";
    }

    else {
        formMessage.style.color = "green";
        formMessage.textContent = "Form submitted successfully!";

        contactForm.reset();
    }
});



const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", function() {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    
    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = task;

   
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

  
    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(taskText);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
});


taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask.click();
    }
});
