function Login()
{
    var user = document.getElementById("em").value;
    var pass= document.getElementById("pwd").value;
    
    if ( user == "madhu@gmail.com" && pass == "madhu@1234") {
        
        window.location="StudentLogin.html";
        return false;
    }

    else if ( user == "prof@gmail.com" && pass == "prof@1234") {
        
        window.location="ProfessorLogin.html";
        return false;
    }

    else if ( user == "admin@gmail.com" && pass == "admin@1234") {
        
        window.location="Admin.html";
        return false;
    }

    else if ( user == "advisor@gmail.com" && pass == "advisor@1234") {
        
        window.location="Advisor.html";
        return false;
    }

    else{
        alert("Wrong Username or password");
        return false;
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


