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

function convertName() {
    let input = document.getElementById("name");
    if(input.value == "")   return;
    let inputName = String(input.value);
    let trimmed = inputName.split(' ');
    let convertedName = trimmed.join("_");
    document.getElementById('convertedName').innerHTML = convertedName;
    navigator.clipboard.writeText(convertedName);
    document.getElementById("copyBtn2").style.backgroundColor = 'green';
    input.value = "";
}