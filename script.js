var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");
var list=document.querySelectorAll("li");
var btns=document.getElementsByClassName("delete");
var a=1;


// delete liste item when we click delete button
Array.from(btns).forEach(deleteIdems);
function deleteIdems(btn){
  btn.addEventListener("click", function(evt){
    var li=evt.target.parentElement;
    li.remove();
  })

}

// a functionn that return the length of the input, we will need it to make sure that the user typed something..
function inputLength(){
  return input.value.length;
}

// create new list item 
function createListIdems(){
    
    var bt=document.createElement("button");
    bt.innerHTML="delete";
    bt.onclick= deleteIdems(bt);
    /*bt.onclick= function removeItems(e){
      e.target.removeEventListener("click", removeItems);
      e.target.parentNode.remove();
    };*/
    
    var li=document.createElement("li");
    li.onclick= toggleItems(li);
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(bt);
    ul.appendChild(li);
    input.value='';
}


// toggle an item and toggle it back 
Array.from(list).forEach(toggleItems);
function toggleItems(el){
    el.addEventListener("click", function(e){
    e.target.classList.toggle("done");
    })
}


// handle the click event (add new items to the list)
function clickEvent(){ 
    if(inputLength() > 0){
      createListIdems();
    }  
}

// handle the keypress event (add new items to the list as well)
function keypressEvent(event){
    if(inputLength() > 0 && event.which===13){
      createListIdems();
    }
}





button.addEventListener("click", clickEvent)

input.addEventListener("keypress", keypressEvent)