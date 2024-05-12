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
    const size = {
        face1: document.getElementById('sizeFace1'),
        face2: document.getElementById('sizeFace2'),
        top: document.getElementById('sizeTop'),
        bottom: document.getElementById('sizeBottom'),
        left: document.getElementById('sizeLeft'),
        right: document.getElementById('sizeRight'),
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

    size.face1.innerHTML = `<span>${get.width}см. х ${get.height}см.</span>`;
    size.face2.innerHTML = `<span>${get.width}см. х ${get.height}см.</span>`;
    size.top.innerHTML = `<span>${get.width}см. х ${get.weight}см.</span>`;
    size.bottom.innerHTML = `<span>${get.width}см. х ${get.weight}см.</span>`;
    size.left.innerHTML = `<span>${get.height}см. х ${get.weight}см.</span>`;
    size.right.innerHTML = `<span>${get.height}см. х ${get.weight}см.</span>`;

    result.face1.innerHTML = `<b>${stoneFace}кв.</b>`;
    result.face2.innerHTML = `<b>${stoneFace}кв.</b>`;
    result.left.innerHTML = `<b>${stoneSide}кв.</b>`;
    result.right.innerHTML = `<b>${stoneSide}кв.</b>`;
    result.top.innerHTML = `<b>${stoneTop}кв.</b>`;
    result.bottom.innerHTML = `<b>${stoneTop}кв.</b>`;
    result.general.innerHTML = `<b>${generalResult()}кв.</b>`
})