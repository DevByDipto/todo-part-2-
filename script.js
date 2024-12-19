const heading_input = document.querySelector(".heading_input");
const caption_input = document.querySelector(".caption_input");
const post = document.querySelector(".post");
const update = document.querySelector(".update");
const Search = document.querySelector(".Search");
const noteList = document.querySelector(".note_list");
const heading = document.querySelector(".heading");
const caption = document.querySelector(".caption");
let arr = [];
console.log(arr);

let indexstore;
post.addEventListener("click", function () {
  arr.push({
    id:parseInt(Math.random()*100),
    heading: heading_input.value,
    caption: caption_input.value,
  });
  data();
  console.log(arr);
});

function data() {
  noteList.innerHTML = "";
  arr.map((element) => {
    noteList.innerHTML += `<div class="container">
                             <h2 class="heading">${element.heading}</h2>
                             <p class="caption">${element.caption}</p>
                             <button class ="edit">Edit</Button>
                             <button class = "delete">delete</Button>
                         </div>`;
  });
  deleteFun();
  editFun();
}

function deleteFun() {
  const deleteBtns = document.querySelectorAll(".delete");
  Array.from(deleteBtns).forEach((deleteBtn, index) => {
    deleteBtn.addEventListener("click", () => {
      arr.splice(index, 1);
      data();
    });
  });
}

function editFun() {
  const editBtns = document.querySelectorAll(".edit");
  Array.from(editBtns).forEach((editBtn, index) => {
    editBtn.addEventListener("click", () => {
      heading_input.value = arr[index].heading;
      caption_input.value = arr[index].caption;
      post.style.display = "none";
      update.style.display = "inline-block";
      // indexstore = index;
      
      update.addEventListener("click", () => {
        console.log(index); //way-1
        // console.log(index);
        
        // console.log(indexstore); //way-2
        
        arr[index].heading = heading_input.value; //way-1
        arr[index].caption = caption_input.value; //way-1
        
        // arr[indexstore].heading = heading_input.value; //way-2
        // arr[indexstore].caption = caption_input.value; //way-2
        data();
        post.style.display = "inline-block";
        update.style.display = "none";
      });

    });
  });
}

