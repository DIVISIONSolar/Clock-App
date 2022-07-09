const clock = document.querySelector('.clock');

const tick = () => {

    const now = new Date();
    const time = new Intl.DateTimeFormat('default', {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric'
    }).format(now)

    const html = `

        <span>${time}</span>
    `;

    clock.innerHTML = html

};

setInterval(tick, 1000);