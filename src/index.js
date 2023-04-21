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
                    li.innerHTML = data[index].name
                    list.appendChild(li)
                }
            }
        }
        )
    }
}