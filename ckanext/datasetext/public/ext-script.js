var currentTab = 'tab1'; // Current tab is set to be the first tab (0)
//showTab(currentTab);
var tabs = ['tab1', 'tab2', 'tab3'];
nextPrev(currentTab); // Display the current tab

window.addEventListener("load",function(){
  var selectOrg = document.getElementById("field-organizations");

  var selectKr = document.getElementById("field-keyresearcher");
  
  selectedKr_id = selectKr.options[selectKr.selectedIndex].id;

  //console.log('selectedKr --- ' + selectedKr_id);
  //console.log('onload ---> ' + selectOrg.value);

  update_key_researcher(selectOrg, selectedKr_id);
},false);

function nextPrev(tab) {
  for (t of tabs) {

    if(tab == 'tab3'){
      var is_success = validateTab2Fields();
      if(!is_success) {
        alert('Select Key Researcher.' );
        return;
      }
    }

    if (t == tab) {
      document.getElementById(t).style.display = "block";
    } else {
      document.getElementById(t).style.display = "none";
    }
  }
}

function validateTab2Fields(){
  keyR = document.getElementById('field-keyresearcher');
  if(keyR.value){
    return true;
  }
}

function update_ppt(){
  
  var sel = document.getElementById('field-organizations')
  var selected = sel.options[sel.selectedIndex]
  var abstract = selected.getAttribute('data-abstract')
  console.log('abstract -- '+abstract);

  document.getElementById('ppt').value = abstract;
}

function display_milestone_stmt(){

  var sel = document.getElementById('field-milestone')
  var selected = sel.options[sel.selectedIndex]
  var milestone = selected.getAttribute('data-mile_stmt')
  document.getElementById('mile_stmt').value = milestone; 
}


function filter_milestone(selOrg){

  reset_milestone();

  var select = document.getElementById("field-milestone");
  var length = select.options.length;
 
  //iterate over all milestones
  for (i = 0; i < length; i++) {

    var selected = select.options[i];
    var group_id = selected.getAttribute('data-groupid');
    if(selOrg.value == group_id){
      select.options[i].style.display = "block";
    }else{
      select.options[i].style.display = "none";
    }
  
  }

}

function reset_milestone(){
  document.getElementById('mile_stmt').value = '';
  var sel = document.getElementById('field-milestone');
  if(sel.selectedIndex)
    sel.selectedIndex = 'None';
}


function update_key_researcher(selOrg ,selKr_id){
  //console.log(selOrg.value);

  var select = document.getElementById("field-keyresearcher");
  select.value = null;
  
  var length = select.options.length;
  for (i = length-1; i >= 0; i--) {

    //console.log('select options id for kr : '+ select.options[i].id);
    var option_to_display = selOrg.value + ":" + select.options[i].value;
    //console.log('option_to_display --- '+option_to_display);
    //console.log('selKr --- '+ selKr_id);
    if(selKr_id && selKr_id === option_to_display){
      //console.log('selected id --- ' + selKr_id)
      select.options[i].selected = "selected";
    }
    if(option_to_display == select.options[i].id){
      select.options[i].style.display = "block";
    }else{
      select.options[i].style.display = "none";
    }
    //select.options[i] = null;
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
  console.log('show --> val: ' + val);
  var type = document.getElementById('datatype');
  type.style.display = 'block';
  if(val == 'generic'){
    type.setAttribute("placeholder", "Description");
  }
  if(val == 'softwareSpecific'){
    type.setAttribute("placeholder", "Write specifications");
  }
  if(val == 'prop'){
    type.setAttribute("placeholder", "Share the data format and description");
  }
}