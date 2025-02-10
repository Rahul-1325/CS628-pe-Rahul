# PE03-To-Do List

# Input
A user enters the task description into an input field.
After clicking the "Add Task" button, it is added to the list.
Each task has a Delete button, which allows you to remove it from the list. 

# Process
The application uses React’s `useState` to manage the task list.
When the "Add Task" button is clicked, an event handler is triggered, adding the new task to the state.
The "Delete" button uses `.filter()` to remove the associated task from the state.
The program uses `.map()` to render the list of tasks dynamically.
# Output
The To Do list shows all added tasks under an organized format. 
Each task contains a delete button beside it. 
When pressed, the delete button removes that task from the list.
