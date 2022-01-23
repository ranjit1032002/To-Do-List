showList();
let addBtn=document.getElementById("addBtn");

addBtn.addEventListener("click",function(e){
    let addTxt=document.getElementById("addTxt");
    let list=localStorage.getItem("list");

    if(list==null)
    {
        listObj=[];
    }
    else{
        listObj=JSON.parse(list);
    }

    listObj.push(addTxt.value);
    localStorage.setItem("list",JSON.stringify(listObj))
    addTxt.value="";
    console.log(listObj);

    showList();
})

function showList(){
    let list=localStorage.getItem("list");
    if(list==null)
    {
        listObj=[];
    }
    else{
        listObj=JSON.parse(list);
    }

    let html="";
    listObj.forEach(function (element,index){
        html+=`<label for="exampleFormControlTextarea1" class="form-label"></label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">${element}</textarea>`;
    })   
    
    let ListElm=document.getElementById("list");
    if(listObj.length!=0)
    {
        ListElm.innerHTML=html;
    }
    else{
        ListElm.innerHTML=`Nothing To Show! Use "Add To The List" Section Above To Make A List`;
    }
}