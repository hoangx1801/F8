function toast({title = "", message = "", type = "info", duration = 3000}) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");
        const icons = {
            success: "fas fa-check-circle",
            info: "fas fa-info-circle",
            warning: "fas fa-exclamation-circle",
            error: "fas fa-exclamation-circle"
        }

        //Auto remove toast
        const autoRemoveToast = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);

        //Remove toast onclick
        toast.onclick = function(e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveToast);
            }
        }

        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        
        toast.classList.add(`toast`, `toast--${type}`);
        toast.style.animation = `slideIn .5s ease, fadeOut 1s ${delay}s forwards ease;`
        toast.innerHTML = `
                <div class="toast__icon toast__icon--${type}">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__message">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__content">${message}</p>
                </div>
                <div class="toast__close">
                    <i class="fas fa-times"></i>
                </div>
        `

        main.appendChild(toast);
    }
}