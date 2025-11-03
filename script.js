document
    .getElementById("slider")
    .addEventListener('input', (change) => {
        document.getElementById("sliderCut").style.clipPath 
            = `inset(0 0 0 ${Number(change.target.value)}px)`
    })