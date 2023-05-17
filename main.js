function convertLink() {
    let input = document.getElementById("link");
    if(input.value == "")   return;
    let inputLink = String(input.value);
    let trimmed = inputLink.split('/').slice(3);
    let convertedLink = trimmed.join("_");
    document.getElementById('convertedLink').innerHTML = convertedLink;
    navigator.clipboard.writeText(convertedLink);
    document.getElementById("copyBtn").style.backgroundColor = 'green';
    input.value = "";
}