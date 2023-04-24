document.getElementsByName("name")[0].addEventListener("keypress", showFish)
const url = "http://localhost:3000/fish"


function showFish(event) {
    if(event.key === 'Enter'){
        event.preventDefault()
        console.log(event)
        fetch(url)
        .then(response => response.json())
        .then(data => {
            list = document.getElementById('fish-list')
            while (list.firstChild) {
                list.removeChild(list.firstChild);
              }
            const fish = event.target.value.toLowerCase()
            for(const index in data) {
                if(data[index].name.toLowerCase().startsWith(fish)) {
                    let li = document.createElement("li")
                    const image = document.createElement("img")
                    image.src = data[index].image
                    li.appendChild(image)
                    const p = document.createElement("p")
                    p.innerHTML = data[index].name
                    li.appendChild(p)
                    const btn = document.createElement("button")
                    btn.innerHTML = "See More"
                    li.appendChild(btn)
                    btn.addEventListener("click",() => {
                        const p = document.createElement("p")
                    p.innerHTML = data[index].seasons.toString() + 
                    ', ' + data[index].weather + ', ' + data[index].time + ', ' + data[index].location
                    li.appendChild(p)
                    } )
                    list.appendChild(li)
                }
            }
        }
        )
    }
}