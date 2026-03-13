// const url1="https://phi-lab-server.vercel.app/api/v1/lab/issues";
// // console.log(url1)
// fetch(url1)
// .then((res)=> res.json())
// .then((last)=> displayAll(last.data));

// // {
// // "status": "success",
// // "message": "Issues fetched successfully",
// // "data": [
// // {
// // "id": 1,
// // "title": "Fix navigation menu on mobile devices",
// // "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// // "status": "open",
// // "labels": [
// // "bug",
// // "help wanted"
// // ],
// // "priority": "high",
// // "author": "john_doe",
// // "assignee": "jane_smith",
// // "createdAt": "2024-01-15T10:30:00Z",
// // "updatedAt": "2024-01-15T10:30:00Z"
// // },

// const allBtn=document.getElementById("allBtn");
// allBtn.addEventListener("click", function(){

//   // const allBtn=document.getElementById("allBtn");
//   allBtn.classList.remove("btn-soft");
//   console.log("btn clicked");
  
// }
// )


// function displayAll(datas){
//     const allContainer=document.getElementById("all-container");
//     const count=document.getElementById("count");
//     allContainer.innerHTML="";
//       let dataL= datas.length;
//  for(let data of datas ){
//   let div = document.createElement("div");
//   div.innerHTML=`
//   <div class="w-[256.5px] h-[273px]  space-y-2 rounded-lg shadow-lg p-1.5">
// <div id="first" class="flex justify-between">
//   <img src="./B13-A5-Github-Issue-Tracker/assets/Open-Status.png" alt="">
//   <div class="badge badge-soft badge-error">${data.priority}</div>
// </div>
// <h1 class="font-semibold">${data.title}</h1>
// <p class=" text-sm text-neutral-500">${data.description}</p>
// <div class="badge badge-soft badge-warning">Warning</div><div class="badge badge-soft badge-warning">Warning</div>
// <hr class=" text-neutral-300 font-light">
// <p class="text-neutral-500">${data.author}</p>
// <p class="text-neutral-500">${data.createdAt}</p>
// </div>`;   
// allContainer.append(div)
// }
// count.innerText=dataL;

// }

// "status": "success",
// "message": "Issue fetched successfully",
// "data": {
// "id": 33,
// "title": "Add bulk operations support",
// "description": "Allow users to perform bulk actions like delete, update status on multiple items at once.",
// "status": "open",
// "labels": [
// "enhancement"
// ],
// "priority": "low",
// "author": "bulk_barry",
// "assignee": "",
// "createdAt": "2024-02-02T10:00:00Z",
// "updatedAt": "2024-02-02T10:00:00Z"
// }
// }

function lables(lables){
 const lableEl=lables.map(el =>`<span class="h-full w-full badge-soft badge bage-warning">${el}</span>`)
return lableEl.join(" ")
}


function single(id){
const sUrl=`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
console.log(sUrl);
fetch(sUrl)
.then((res)=>res.json())
.then((div)=>singleTab(div.data))
function singleTab(datas){

  const singleContainer = document.getElementById("single-container");
  singleContainer.innerHTML=`
  <h1 class="text-xl font-semibold">${datas.title}</h1>
    <div class="flex gap-3 items-center">
    <div class="badge ${datas.status=="open" ?"badge-success" :"badge-primary"} ">${datas.status}</div>
    <p class="bg-primary w-1.5 h-1.5 rounded-full"></p>
     <p class=" text-sm text-neutral-500">Opened by ${datas.author}</p>
      <p class="bg-primary w-1.5 h-1.5 rounded-full"></p>
     <p class=" text-sm text-neutral-500">${datas.createdAt}</p>
     </div>
     <div class="badge badge-soft badge-warning  text-sm">${lables(datas.labels)}</div>
    <p class=" text-neutral-500">${datas.description}</p>
    </div>
     <div class="w-[456px] h-[90px] py-2.5 grid gap-2 grid-cols-2 rounded-md text-center mx-auto bg-slate-100">
        <p>Assignee: ${datas.author}</p>
        <p>Priority: <span class="badge ${datas.priority == "high" ?'badge-error' :datas.priority=="medium"?"badge-warning" :"badge-normal"}">${datas.priority}</span></p>
      </div> 
     
     <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-primary">Close</button>
      </form>
    </div>
  `;
  document.getElementById("my_modal_5").showModal();


}
}


function search(){

const all=document.getElementById("all");
  const open=document.getElementById("open");
  const close=document.getElementById("close");
   close.classList.add("btn-soft");
  open.classList.add("btn-soft");
  all.classList.add("btn-soft")

const allContainer=document.getElementById("all-container");
  const openContainer=document.getElementById("open-container");
  const closeContainer=document.getElementById("close-container");
  const searchContainer=document.getElementById("search-container");
  allContainer.classList.add("hidden");
openContainer.classList.add("hidden");
searchContainer.classList.remove("hidden");
closeContainer.classList.add("hidden");



  const value=document.getElementById("input-search").value;
  const btn=document.getElementById("input-btn");
  console.log(value);
  const searchUrl=`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${value}`
  fetch(searchUrl)
  .then((res) => res.json())
  .then((last)=>searchTab(last.data))

  function searchTab(datas){
  spinner(true);
    const searchContainer=document.getElementById("search-container");
    searchContainer.innerHTML="";
    const count=document.getElementById("count");
    searchContainer.innerHTML="";

    let dataL= datas.length;
 for(let data of datas ){

  let div = document.createElement("div");
  div.innerHTML=`
  <div  onclick="single(${data.id})" class="w-[256.5px] h-[273px]  space-y-2 ${data.status=="open" ?"border-green" :"border-purple"} rounded-lg shadow-lg p-1.5">
<div id="first" class="flex justify-between">
  <img src="./${data.status=="open"?"Open-Status" :"Closed- Status "}.png" alt="">
  <div class="badge badge-soft  ${data.priority == "high" ?'badge-error' :data.priority=="medium"?"badge-warning" :"badge-normal"}">${data.priority}</div>
</div>
<h1 class="font-semibold">${data.title}</h1>
<p class=" text-sm text-neutral-500">${data.description}</p>
<div class="badge badge-soft badge-warning  text-sm">${lables(data.labels)}</div>
<hr class=" text-neutral-300 font-light">
<p class="text-neutral-500">${data.author}</p>
<p class="text-neutral-500">${data.createdAt}</p>
</div>`;   
searchContainer.append(div)

}
spinner(false);
count.innerHTML=dataL;
  }

}


function spinner(status){
 const spinner=document.getElementById("loading");
 const main=document.getElementById("main");
 if(status==true){
  spinner.classList.remove("hidden");
  main.classList.add("hidden");
  console.log("loading activeted");
  
 }else if(status==false){
   spinner.classList.add("hidden");
  main.classList.remove("hidden");
  console.log("loading cancled");
  
 }
}


// displayAll();
function openBtn(){
   const all=document.getElementById("all");
  const open=document.getElementById("open");
  const close=document.getElementById("close");
   const allContainer=document.getElementById("all-container");
  const openContainer=document.getElementById("open-container");
  const closeContainer=document.getElementById("close-container");
  const searchContainer=document.getElementById("search-container");


allContainer.classList.add("hidden");
searchContainer.classList.add("hidden");
closeContainer.classList.add("hidden");
openContainer.classList.remove("hidden");


  close.classList.add("btn-soft");
  all.classList.add("btn-soft");
  open.classList.remove("btn-soft")

  const url2="https://phi-lab-server.vercel.app/api/v1/lab/issues";
// console.log(url1)
fetch(url2)
.then((res)=> res.json())
.then((last)=> openTab(last.data));

function openTab(datas){
  spinner(true);
    const openContainer=document.getElementById("open-container");
    openContainer.innerHTML="";
    const count=document.getElementById("count");
    let addCount= 0;
 for(let data of datas ){
   if(data.status =="open"){
  let div = document.createElement("div");
  div.innerHTML=`
  <div onclick="single(${data.id})" class="w-[256.5px] h-[273px]  space-y-2 ${data.status=="open" ?"border-green" :"border-purple"} rounded-lg shadow-lg p-1.5">
<div id="first" class="flex justify-between">
  <img src="./Open-Status.png" alt="">
  <div class="badge badge-soft ${data.priority == "high" ?'badge-error' :data.priority=="medium"?"badge-warning" :"badge-normal"}">${data.priority}</div>
</div>
<h1 class="font-semibold">${data.title}</h1>
<p class=" text-sm text-neutral-500">${data.description}</p>
<div class="badge badge-soft badge-warning  text-sm">${lables(data.labels)}</div>
<hr class=" text-neutral-300 font-light">
<p class="text-neutral-500">${data.author}</p>
<p class="text-neutral-500">${data.createdAt}</p>
</div>`;   
openContainer.append(div)
addCount++
 }
}
spinner(false);
count.innerText=addCount;
}
}

function allBtn(){
   const all=document.getElementById("all");
  const open=document.getElementById("open");
  const close=document.getElementById("close");
   close.classList.add("btn-soft");
  open.classList.add("btn-soft");
  all.classList.remove("btn-soft")

const allContainer=document.getElementById("all-container");
  const openContainer=document.getElementById("open-container");
  const closeContainer=document.getElementById("close-container");
  const searchContainer=document.getElementById("search-container");
  openContainer.classList.add("hidden");
closeContainer.classList.add("hidden");
allContainer.classList.remove("hidden");
searchContainer.classList.add("hidden");

  const url3="https://phi-lab-server.vercel.app/api/v1/lab/issues";
// console.log(url1)
fetch(url3)
.then((res)=> res.json())
.then((last)=> allTab(last.data));

function allTab(datas){
    spinner(true);
    const allContainer=document.getElementById("all-container");
    allContainer.innerHTML="";
    const count=document.getElementById("count");
    allContainer.innerHTML="";

    let dataL= datas.length;
 for(let data of datas ){

  let div = document.createElement("div");
  div.innerHTML=`
  <div onclick="single(${data.id})" class="w-[256.5px] h-[273px]  space-y-2 ${data.status=="open" ?"border-green" :"border-purple"} rounded-lg shadow-lg p-1.5">
<div id="first" class="flex justify-between">
  <img src="./${data.status=="open"?"Open-Status" :"Closed- Status "}.png" alt="">
  <div class="badge badge-soft ${data.priority == "high" ?'badge-error' :data.priority=="medium"?"badge-warning" :"badge-normal"}">${data.priority}</div>
</div>
<h1 class="font-semibold">${data.title}</h1>
<p class=" text-sm text-neutral-500">${data.description}</p>
<div class="badge badge-soft badge-warning  text-sm">${lables(data.labels)}</div>
<hr class=" text-neutral-300 font-light">
<p class="text-neutral-500">${data.author}</p>
<p class="text-neutral-500">${data.createdAt}</p>
</div>`;   
allContainer.append(div)

}
spinner(false);
count.innerHTML=dataL;
}
}




function closeBtn(){
  const all=document.getElementById("all");
  const open=document.getElementById("open");
  const close=document.getElementById("close");
  all.classList.add("btn-soft");
  open.classList.add("btn-soft");
  close.classList.remove("btn-soft")

  const allContainer=document.getElementById("all-container");
  const openContainer=document.getElementById("open-container");
  const closeContainer=document.getElementById("close-container");
  const searchContainer=document.getElementById("search-container");
  allContainer.classList.add("hidden");
openContainer.classList.add("hidden");
searchContainer.classList.add("hidden");
closeContainer.classList.remove("hidden");


  const url2="https://phi-lab-server.vercel.app/api/v1/lab/issues";
// console.log(url1)
fetch(url2)
.then((res)=> res.json())
.then((last)=> closeTab(last.data));

function closeTab(datas){
   spinner(true);
    const closeContainer=document.getElementById("close-container");
    closeContainer.innerHTML="";
    const count=document.getElementById("count");
    let addCount=0;
 for(let data of datas ){
  if(data.status == "closed"){
   let div = document.createElement("div");
  div.innerHTML=`
  <div onclick="single(${data.id})" class="w-[256.5px] h-[273px] ${data.status=="open" ?"border-green" :"border-purple"} space-y-2 rounded-lg shadow-lg p-1.5">
<div id="first" class="flex justify-between">
   <img src="./Closed- Status .png" >
     <div class="badge badge-soft  ${data.priority == "high" ?'badge-error' :data.priority=="medium"?"badge-warning" :"badge-normal"}">${data.priority}</div>
</div>
<h1 class="font-semibold">${data.title}</h1>
<p class=" text-sm text-neutral-500">${data.description}</p>
<div class="badge badge-soft badge-warning  text-sm">${lables(data.labels)}</div>
<hr class=" text-neutral-300 font-light">
<p class="text-neutral-500">${data.author}</p>
<p class="text-neutral-500">${data.createdAt}</p>
</div>`;   
closeContainer.append(div)
addCount++
}
}
spinner(false);
count.innerText=addCount;
}
}