function signup(event){
    event.preventDefault();

    var username=document.getElementById("un").value;
    var email=document.getElementById("em").value;
    var mobile=document.getElementById("mn").value;
    var password=document.getElementById("pas").value;

    var user={
        Username:username,
        Email_id:email,
        Mobile_no:mobile,
        Password:password,
    };
        var json=JSON.stringify(user);
        localStorage.setItem(username,json);
        console.log("user added");

    }

function login(event){
    event.preventDefault();
    var username=document.getElementById("un").value;
    var password=document.getElementById("pas").value;
    var result=document.getElementById("result").value;
     
    var user =localStorage.getItem(username);
    var data=JSON.parse(user);
    console.log(data);

    if(username == null){
        result.innerHTML='Wrong Username';
    }
    else if(username == data.un && password == data.pas){
        result.innerHTML='Logged in Successfully';
    }
    else{
        result.innerHTML='Wrong Password';
    }
}
