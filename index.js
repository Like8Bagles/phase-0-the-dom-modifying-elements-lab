// Write your code here!
const element = document.createElement(`div`);
document.body.appendChild(element);
const ul =document.createElement(`ul`);

for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.innerHTML = (i + i).toString();
    ul.appendChild(li);
}

main.remove()

const newHeader = document.createElement(`h1`)

newHeader.id = "victory"
newHeader.innerHTML = 'YOUR-NAME is the champion'