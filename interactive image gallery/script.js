function addImage() {
    const url = document.getElementById(`urlLink`).value;
    if (url) {
      const imageSection = document.getElementById("imageArea");
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("imageDiv");

      const image = document.createElement("img");
      image.src = url;

      const removebtn = document.createElement("button");
      removebtn.textContent = "Remove";
      removebtn.classList.add("removebtn");
      //removebtn.addEventListener("click", function(){imageDiv.remove();});
      removebtn.addEventListener(`click`, () => imageDiv.remove());
      imageDiv.appendChild(image);
      imageDiv.appendChild(removebtn);
      imageSection.appendChild(imageDiv);
      document.getElementById("urlLink").value ="";
    } else {
        return
    }

}
document.getElementById("addImage").addEventListener("click", addImage);