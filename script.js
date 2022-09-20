function szamitas(){
    let mag = parseFloat(document.getElementById("magassag").value);
    let suly = parseFloat(document.getElementById("suly").value);
    if(document.getElementById("magassag").value == "" || document.getElementById("suly").value == ""){
        document.getElementById("baj").style.visibility = "visible";
        
    }
    else{
        document.getElementById("baj").style.visibility = "hidden";
      
        let ered = suly / (mag / 100) ** 2;

        document.getElementById("eredmeny").textContent = ered;
    }
}

document.getElementById("btn").addEventListener('click',szamitas);