let tasks = [
    {
        id: 1,
        title: "Buy milk :)",
        time: "18:44"
    },
    {
        id: 2,
        title: "End the project)",
        time: "18:44"
    },
    {
        id: 3,
        title: "Call mom",
        time: "18:44"
    },
    {
        id: 4,
        title: "Sleep 10 hrs",
        time: "18:44"
    }
]

let box  = document.querySelector(".box")

tasks.forEach(task => {
    let item = document.createElement("div")
    item.classList.add("item")

    item.innerHTML = `
        <h3>${task.title}</h3>
        <span>${task.time}</span>
        i
    `
    
    box.append(item)
    
})