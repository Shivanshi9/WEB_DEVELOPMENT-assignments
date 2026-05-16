function getdatafromlocalstorage(){
    const data = JSON.parse(localStorage.getItem("Passwords")) || []

    const showdata = document.getElementById("showdatahere")
    if(data.length === 0)
    {
        showdata.innerText = "No Password Saved"
    }
}

getdatafromlocalstorage()