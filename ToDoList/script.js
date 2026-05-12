function addNewTask() {
    const tasktoadd = document.getElementById("newtask").value;

    const li = document.createElement("li")
    li.classList.add("my-3")

    const div = document.createElement("div")
    div.classList.add("d-flex", "align-item-center")

    const span1 = document.createElement("span")
    span1.innerText = tasktoadd;

    const button = document.createElement("button")
    button.classList.add("btn", "btn-danger", " ms-4", "d-flex", "gap-3", "align-item-center", "justify-content-center")

    button.onclick = () => li.remove()

    const i = document.createElement("i")
    i.classList.add("bi", "bi-trash")

    const span2 = document.createElement("span")
    span2.innerText = "Delete"

    button.appendChild(i)
    button.appendChild(span2)
    div.appendChild(span1)
    div.appendChild(button)

    li.appendChild(div)

    document.getElementById("tasklist").appendChild(li)

}