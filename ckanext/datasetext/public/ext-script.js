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


let removedIds = [];
var count = 0;
function add() {

  let keys_id;
  if(removedIds.length > 0){
    keys_id = removedIds.pop();
  }else{
    keys_id = count;
  }
  
  if(count > 2){
    return;
  }
  count++;
  
  console.log("---- " + "keywordDiv" + keys_id);
  document.getElementById("keywordDiv" + keys_id).style.display = 'block';
  
}

function removeElement(n) {
  count--;
  removedIds.push(n);
  document.getElementById("keywordDiv" + n).style.display = "none";

  document.getElementById("keyword" + n).value = "";
  document.getElementById("keywordBrief" + n).value = "";
  
  
}

function createInput(id) {
  let input = document.createElement('input');
  input.type = "text";
  input.setAttribute("class", "form-control");
  input.setAttribute('id', id);
  input.setAttribute('name', id);

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


  let keyword = createInput("keyword" + id);
  let brief = createInput("keywordBrief" + id);

  
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