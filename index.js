console.log("hello world")

function singIn(){
    const userName = document.getElementById("name").value;
    const password= document.getElementById("password").value;
    if(userName=="admin" && password=="admin123"){
     alert("You Are Wellcome, 'Hero'")
     window.location.assign("./home.html")
    }else if(userName!="admin" && password=="admin123"){
        alert("Invalid User Name, try again")
    }else if(userName=="admin" && password!="admin123"){
         alert("Invalid password, try again");
    }else{
        alert("Login faild")
    }
}
