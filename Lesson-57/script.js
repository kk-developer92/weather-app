// let tasks = [
//     {
//         id: 1,
//         title: "Buy milk :)",
//         time: "18:44"
//     },
//     {
//         id: 2,
//         title: "End the project)",
//         time: "18:44"
//     },
//     {
//         id: 3,
//         title: "Call mom",
//         time: "18:44"
//     },
//     {
//         id: 4,
//         title: "Sleep 10 hrs",
//         time: "18:44"
//     }
// ]

let tasks = JSON.parse(localStorage.getItem("tasks")) || [] //созраняем в переменой локальный массив в виде массива 


const list = document.querySelector("#list")
const input = document.querySelector("#taskInput")
const addBtn = document.querySelector("#addBtn")


addBtn.onclick = () => {
    let dataInput = input.value

    if (!dataInput) {
        alert("Введите задачу")
        return
    };



    const now = new Date();
    const shortTime = now.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit"
    });

    tasks.push({
        id: crypto.randomUUID(),
        title: dataInput,
        time: shortTime
    })

    reload()
    dataInput = input.value = ""


}

function Card(item, index) {
    const card = document.createElement("div")
    card.classList.add("card")

    card.innerHTML = `
        <div class="delete-btn" onclick="delCard(${index})">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.16667 13.8333C10.8486 13.8333 13.8333 10.8486 13.8333 7.16667C13.8333 3.48477 10.8486 0.5 7.16667 0.5C3.48477 0.5 0.5 3.48477 0.5 7.16667C0.5 10.8486 3.48477 13.8333 7.16667 13.8333Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M9.16699 5.16797L5.16699 9.16797" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M5.16699 5.16797L9.16699 9.16797" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>
        <h3>${item.title}</h3>
        <span>${item.time}</span>
    </div>
    `


    list.append(card)

    card.ondblclick = () => edit(index)


}

reload()
function reload() {
    list.innerHTML = ""
    tasks.forEach((task, index) => {
        Card(task, index)
    })

    localStorage.setItem("tasks", JSON.stringify(tasks)) // создаем локальный массив в виде строки
}

function delCard(idx) {
    tasks.splice(idx, 1)
    reload()
}



function edit(idx) {
    let newTitle = prompt("Новое имя")

    tasks[idx].title = newTitle
    reload()

}




