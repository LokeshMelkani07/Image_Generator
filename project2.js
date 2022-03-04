console.log('This is project 2');
let gif = document.getElementById('gif');
let count = 0;
function addGif() {
    // count++;
    const para = document.createElement("img");
    para.setAttribute('src', 'img.jpg');
    // para.setAttribute('id', count);
    document.getElementById("gif").appendChild(para);
}

function removeGif() {
    let gifi = document.getElementById('container').children[2];
    if (gifi.hasChildNodes()) {
        gifi.removeChild(gifi.children[0]);
    }
}