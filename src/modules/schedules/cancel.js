const periods = document.querySelectorAll(".period")


// Gerar evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
    // Captura o evento de clique na lista.
    period.addEventListener("click", (e) => {
        if(e.target.classList.contains("cancel-icon"))  {
            // Obtém a li pai do elemento clicado.
            const item = event.target.closest("li")
            const { id } = item.dataset
            
            if(id)  {
                const isConfirm = confirm("Tem certeza que deseja cancelar esse agendamento?")
                if  (isConfirm) {
                    console.log("REMOVER!")
                }
            }
        }
    })
})