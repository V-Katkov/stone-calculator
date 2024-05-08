const submitBtn = document.getElementById('submitBtn');

window.addEventListener('click', () => {
    const get = {
        width: document.getElementById('getWidth').value,
        height: document.getElementById('getHeight').value,
        weight: document.getElementById('getWeight').value
    }
    const stoneFace = ((get.width / 100) * (get.height / 100)).toFixed(3);
    const stoneTop = ((get.width / 100) * (get.weight / 100)).toFixed(3);
    const stoneSide = ((get.height / 100) * (get.weight / 100)).toFixed(3);

    const result = {
        face1: document.getElementById('resultFace1'),
        face2: document.getElementById('resultFace2'),
        top: document.getElementById('resultTop'),
        bottom: document.getElementById('resultBottom'),
        left: document.getElementById('resultLeft'),
        right: document.getElementById('resultRight'),
        general: document.getElementById('result')
    }
    const check = {
        face1: document.getElementById('checkFace1'),
        face2: document.getElementById('checkFace2'),
        top: document.getElementById('checkTop'),
        bottom: document.getElementById('checkBottom'),
        left: document.getElementById('checkLeft'),
        right: document.getElementById('checkRight'),
    }

    const generalResult = () => {
        let summ = 0;
        if (check.face1.checked) {
            summ = summ + +stoneFace;
        }
        if (check.face2.checked) {
            summ = summ + +stoneFace;
        }
        if (check.top.checked) {
            summ = summ + +stoneTop;
        }
        if (check.bottom.checked) {
            summ = summ + +stoneTop;
        }
        if (check.left.checked) {
            summ = summ + +stoneSide;
        }
        if (check.right.checked) {
            summ = summ + +stoneSide;
        }
        return summ.toFixed(3);
    }


    result.face1.innerHTML = `<span>Лице 1: ${get.width}см. х ${get.height}см.</span> <b>${stoneFace}кв.</b>`;
    result.face2.innerHTML = `<span>Лице 2: ${get.width}см. х ${get.height}см.</span> <b>${stoneFace}кв.</b>`;
    result.left.innerHTML = `<span>Лобік бік 1: ${get.height}см. х ${get.weight}см.</span> <b>${stoneSide}кв.</b>`;
    result.right.innerHTML = `<span>Лобік бік 2: ${get.height}см. х ${get.weight}см.</span> <b>${stoneSide}кв.</b>`;
    result.top.innerHTML = `<span>Лобік верхній: ${get.width}см. х ${get.weight}см.</span> <b>${stoneTop}кв.</b>`;
    result.bottom.innerHTML = `<span>Лобік нижній: ${get.width}см. х ${get.weight}см.</span> <b>${stoneTop}кв.</b>`;
    result.general.innerHTML = `<b>${generalResult()}кв.</b>`
})