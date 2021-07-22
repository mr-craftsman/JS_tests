function countParam(tick) {
    let tick2 = 1;
    const interval = setInterval(() => {
        console.log('every tick i make', tick2++)
        if (tick2 === tick) clearInterval(interval);
    }, 2000);
}

countParam(20);