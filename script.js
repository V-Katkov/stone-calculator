const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
    const stoneWidth = document.getElementById('stoneWidth').value;
    const stoneHeight = document.getElementById('stoneHeight').value;
    const stoneWeight = document.getElementById('stoneWeight').value;
    const resultFace = document.getElementById('resultFace');
    const face = (stoneWidth / 100) * (stoneHeight / 100);
    const top = (stoneWidth / 100) * (stoneWeight / 100);
    const left = (stoneHeight / 100) * (stoneWeight / 100);



    resultFace.innerHTML = `<span>Лице 1: ${stoneWidth}см. х ${stoneHeight}см.</span><b>${face}кв.<b>`;
    resultFace2.innerHTML = `<span>Лице 2: ${stoneWidth}см. х ${stoneHeight}см.</span> <b>${face}кв.<b>`;
    resultTop.innerHTML = `<span>Лобік верхній: ${stoneWidth}см. х ${stoneWeight}см.</span> <b>${top}кв.<b>`;
    resultLeft.innerHTML = `<span>Лобік бік 1: ${stoneHeight}см. х ${stoneWeight}см.</span> <b>${left}кв.<b>`;
    resultRight.innerHTML = `<span>Лобік бік 2: ${stoneHeight}см. х ${stoneWeight}см.</span> <b>${left}кв.<b>`;
    result.innerHTML = `<b>${(face*2) + top + (left*2)}кв.</b>`
})