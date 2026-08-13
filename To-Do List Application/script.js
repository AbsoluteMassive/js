// empty array to store the user inputs
const array = [];
// function to add tasks
function addNewTask() {
    const task = document.getElementById("input-field").value.trim();
    if(task) {
    array.push(task);
    document.getElementById("input-field").value = "";
    displayArray();
    console.log(array);
    }
}
// function to display tasks
function displayArray() {
    const listArea = document.getElementById("output");
    listArea.innerHTML ="";
    for(let i = 0; i <array.length; i++) {
      const li = document.createElement("li");
      li.textContent = array[i];

      const removebtn = document.createElement("button");
      removebtn.textContent = "remove";
      removebtn.addEventListener("click", () => removeList(i));
      removebtn.style.margin = "5px";

      li.appendChild(removebtn);
      listArea.appendChild(li);
      console.log(array);
    }
}
// function for the remove button
function removeList(i) {
    array.splice(i, 1); // where (i) and how many(1)
    displayArray(); // updating the list upon deleting the task

}
document.getElementById("btn").addEventListener("click", addNewTask);

const btn = document.getElementById("btnLightToDark"); 
// function to toggle between dark and light
function changeTheme() {
    document.body.classList.toggle("dark-mode");
    //conditional thatchanges the text content of the button
   if (document.body.classList.contains('dark-mode')) {
    btn.textContent = 'Light Mode';
  } else {
    btn.textContent = 'Dark Mode';
  }
};
// adds event to button to trigger the function on click
btn.addEventListener("click", changeTheme);