import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")


//Data atual para o input
const inputToday = dayjs.Dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual e define a data mínima como sendo a data atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

//Definindo a data máxima
selectedDate.max = dayjs(new Date()).add(6, "day").format("YYYY-MM-DD")



form.onsubmit = (e) => {
    e.preventDefault()

    console.log("enviado")

}
