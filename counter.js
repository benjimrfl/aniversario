function updateCounter() {
    const startDate = new Date("2019-10-18T00:00:00");
    const now = new Date();
    
    let diff = now - startDate;
    
    // Cálculo de los diferentes componentes del tiempo
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    diff -= years * 1000 * 60 * 60 * 24 * 365.25;
    
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
    diff -= months * 1000 * 60 * 60 * 24 * 30.44;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * 1000 * 60 * 60 * 24;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * 1000 * 60 * 60;
    
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * 1000 * 60;
    
    const seconds = Math.floor(diff / 1000);
    
    // Mostrar el resultado
    document.getElementById("time-counter").innerHTML =
        years + " años, " +
        months + " meses, " +
        days + " días, " +
        hours + " horas, " +
        minutes + " minutos, " +
        seconds + " segundos";
}

// Actualizar el contador cada segundo
setInterval(updateCounter, 1000);
