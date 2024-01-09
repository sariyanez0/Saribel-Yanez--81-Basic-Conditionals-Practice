let password = "Open Sesame";

$(".submit-word").click(function() {
	let passwordInput = $(".password").val();
    if (password === passwordInput){
        alert("Password accepted");
    } else if(password!==passwordInput){
        alert("Incorrect password");
    }
});