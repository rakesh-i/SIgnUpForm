var error = document.getElementById("error");
error.style.display = "none";

function confirmPwd(){
    var password = document.getElementById("pwd");
    var confPass = document.getElementById("conf-pwd");
   
    var pass = document.getElementById("pwd").value;
    var confirm = document.getElementById("conf-pwd").value;

    if(pass.length<8 || pass!=confirm){
        error.style.display = 'block';
        password.style.borderColor = "#CF001F";
        confPass.style.borderColor = "#CF001F";

    }
    if(pass.length==0){
        password.style.borderColor = "#E5E6EB";
        confPass.style.borderColor = "#E5E6EB";
        error.style.display = "none";
    }
    if(pass.length>=8&&pass==confirm){
        password.style.borderColor = "green";
        confPass.style.borderColor = "green";
        error.style.display = "none";
    }
    
}

document.getElementById("conf-pwd").addEventListener('input', confirmPwd);
document.getElementById("pwd").addEventListener('input', confirmPwd);