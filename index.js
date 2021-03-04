


document.getElementById("button").onclick  = function() {

    var node = document.createElement("li");

    var text = document.getElementById("input").value; 

    var textnode=document.createTextNode(text);

    document.getElementById("list").appendChild(node);

    node.appendChild(textnode);

    document.getElementById('input').value = '' ;
}
  

    document.getElementById("dentist").onclick = function() {
    var list = document.getElementById("dentist");
    list.removeChild(list.childNodes[0]);
  }

  document.getElementById("bathe").onclick = function() {
    var list = document.getElementById("bathe");
    list.removeChild(list.childNodes[0]);
  }

  document.getElementById("grocery").onclick = function() {
    var list = document.getElementById("grocery");
    list.removeChild(list.childNodes[0]);
  }
 
  document.getElementById("pay").onclick = function() {
    var list = document.getElementById("pay");
    list.removeChild(list.childNodes[0]);
  }
 
 

 



  
  
