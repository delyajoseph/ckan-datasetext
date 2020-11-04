var currentTab = 'tab1'; // Current tab is set to be the first tab (0)
//showTab(currentTab);
var tabs = ['tab1', 'tab2', 'tab3', 'tab4'];
nextPrev(currentTab); // Display the current tab


function nextPrev(tab) {
  console.log(' next tab .....................' + tab);


  for (t of tabs) {
    console.log('t --> ' + t);

    if (t == tab) {
      console.log('is same');
      document.getElementById(t).style.display = "block";
    } else {
      console.log('is not same');
      document.getElementById(t).style.display = "none";
    }
  }


}

function add() {


  let allElements = document.getElementById("keywords");
  let keys_id = allElements.getElementsByClassName("row").length;

  keys_id++;

  //create textbox
  /*let input = document.createElement('input');
  input.type = "text";
  input.setAttribute("class", "form-control");
  input.setAttribute('id', 'keys' + keys_id);*/
  let keys = document.getElementById("keywords");

  let input = createBlock(keys_id);

  //create remove button
  let remove = document.createElement('button');
  remove.setAttribute('id', 'keysr' + keys_id);
  remove.onclick = function (e) {
    removeElement(e, keys_id);
  };
  remove.setAttribute("type", "button");
  remove.innerHTML = "X";

  //append elements
  input.appendChild(remove);
  keys.appendChild(input);

  //let br = document.createElement("br");
  //keys.appendChild(br);
}

function removeElement(e, keys_id) {
  let button = e.target;

  let div = document.getElementById("key_div" + keys_id);
  div.parentNode.removeChild(div);
  //let field = button.previousSibling;
  /*let div = button.parentElement;
  let br = button.nextSibling;
  div.removeChild(button);
  div.removeChild(field);
  div.removeChild(br);
  
  let allElements = document.getElementById("keys");
  let inputs = allElements.getElementsByTagName("input");
  for(i=0;i<inputs.length;i++){
    inputs[i].setAttribute('id', 'keys' + (i+1));
    inputs[i].setAttribute('value', (i+1));
    inputs[i].nextSibling.setAttribute('id', 'keysr' + (i+1));
  }*/
}

function createInput(id) {
  let input = document.createElement('input');
  input.type = "text";
  input.setAttribute("class", "form-control");
  input.setAttribute('id', id);

  return input;
}

function createBlock(id) {

  let maindiv = document.createElement('div');
  maindiv.setAttribute("id", "key_div" + id);
  maindiv.setAttribute("class", "row");

  let div1 = document.createElement('div');
  div1.setAttribute("class", "col-lg-3");
  let div2 = document.createElement('div');
  div2.setAttribute("class", "col-lg-7");


  let keyword = createInput("key" + id);
  let brief = createInput("brief" + id);

  div1.appendChild(keyword);
  div2.appendChild(brief);
  maindiv.appendChild(div1);
  maindiv.appendChild(div2);

  return maindiv;



}
/*---------------------------Data types---------------------------------------------------------------------*/


function init() {

  /*document.getElementById('generic').style.display = 'none';
  document.getElementById('software').style.display = 'none';
  document.getElementById('prop').style.display = 'none';*/
}

function showGeneric() {
  document.getElementById('generic').style.display = 'block';
  document.getElementById('software').style.display = 'none';
  document.getElementById('prop').style.display = 'none';
}
function showSoftware() {
  document.getElementById('generic').style.display = 'none';
  document.getElementById('software').style.display = 'block';
  document.getElementById('prop').style.display = 'none';
}
function showProp() {
  document.getElementById('generic').style.display = 'none';
  document.getElementById('software').style.display = 'none';
  document.getElementById('prop').style.display = 'block';
}


function show(val){
  var type = document.getElementById('datatype');
  type.style.display = 'block';
  if(val == 1){
    type.setAttribute("placeholder", "Description");
  }
  if(val == 2){
    type.setAttribute("placeholder", "Write specifications");
  }
  if(val == 3){
    type.setAttribute("placeholder", "Share the data format and description");
  }
}