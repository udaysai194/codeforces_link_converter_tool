function convertLink() {
    let input = document.getElementById("link");
    if(input.value == "")   return;
    let inputLink = String(input.value);
    let trimmed = inputLink.split('/').slice(3);
    let convertedLink = trimmed.join("_");
    document.getElementById('convertedLink').innerHTML = convertedLink;
    navigator.clipboard.writeText(convertedLink);
    document.getElementById("copyBtn1").style.backgroundColor = 'green';
    input.value = "";
}

function convertNameCPP() {
    let input = document.getElementById("name");
    if(input.value == "")   return;
    let inputName = String(input.value).replace(/[^a-zA-Z ]/g, "").substring(2);
    let trimmed = inputName.split(' ');
    let convertedName = trimmed.join("_");
    document.getElementById('convertedName').innerHTML = convertedName+".cpp";
    navigator.clipboard.writeText(convertedName+".cpp");
    document.getElementById("copyBtnCPP").style.backgroundColor = 'green';
    input.value = "";
}

function convertNameJava() {
    let input = document.getElementById("name");
    if(input.value == "")   return;
    let inputName = String(input.value).replace(/[^a-zA-Z ]/g, "").substring(2);
    let trimmed = inputName.split(' ');
    let convertedName = trimmed.join("_");
    document.getElementById('convertedName').innerHTML = convertedName+".java";
    navigator.clipboard.writeText(convertedName+".java");
    document.getElementById("copyBtnJava").style.backgroundColor = 'green';
    input.value = "";
}