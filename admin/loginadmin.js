var usernamep = "emantor"
var passwordp = "emantor123++"
var tableauTotakeid = []
function connect() {
    const username = document.getElementById('idusername').value;
    const password = document.getElementById('idpassword').value;
    document.getElementById('idusername').value= '';
        document.getElementById('idpassword').value = ''
    if (username === usernamep && password === passwordp) {
        //console.log('kodlsjfnsb,')
        setTimeout(() => {
            alert("e-mantor s'est bien connecté")
            var codesecret = "YESDATA2023"
            tableauTotakeid.push(codesecret)
            const last = tableauTotakeid.slice(-1).pop();
            localStorage.setItem("storageName", last);
            window.location.replace("admin.html")
        }, 3000)
    } else {
        alert("Mot de passe ou nom d'utilisateur incorrect !")
    }

}
