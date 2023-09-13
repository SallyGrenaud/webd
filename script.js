function clickShow() {
    const button=document.getElementById("vanx");
    setInterval(() => {
        button.click();
    }, 3000);
}

clickShow();