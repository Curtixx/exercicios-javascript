const div = document.querySelector(".paragrafos")
const p = div.querySelectorAll("p");
const styles = getComputedStyle(document.body)
const backgroundBody = styles.backgroundColor

for(let i of p){
     i.style.background = backgroundBody
     i.style.color = "#FFFFFF"
}
