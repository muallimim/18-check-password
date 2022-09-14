document.getElementById("show").addEventListener("click", show);


function show(){
    event.preventDefault();

    var password_from_user;
    const PASSWORD = "sarman";

    password_from_user=document.getElementById('password').value;


    if(password_from_user == PASSWORD)
        document.getElementById('picture').style.visibility = 'visible';
    else
        alert('İyi denemeydi.');


}