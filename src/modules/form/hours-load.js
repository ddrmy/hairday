import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours"

const hours = document.getElementById("hours")

export function hoursLoad({ date }){

    const opening = openingHours.map((hour) => {
        // Recupera somente a hora.
        const [scheduleHour] = hour.split(":")

        // Adiciona a hora na date e verificar se está no passado.
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

        // Define se o horário está disponível.
        return {
            hour,
            available: isHourPast,
        }
    })

    


    // Renderiza os horários.
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-unavailable" : "hour-available")
        li.textContent = hour
        hours.appendChild(li)

    })
}