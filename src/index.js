import './Assets/Styles/index.scss'

const updateOutputField = (element, output) => {
    element.querySelector('.output').innerText = output;
}

const calculateCylinderVolume = data => {
    const { "cylinder-height": height, "cylinder-radius": radius } = data;

    return Math.PI * Math.pow(radius, 2) * height;
}

const updateCylinderResult = (element, data) => {
    updateOutputField(element, calculateCylinderVolume(data))
}

const calculateCuboidVolume = data => {
    const { "cuboid-height": height, "cuboid-width": width, "cuboid-length": length } = data;

    return height * width * length;
}

const updateCuboidResult = (element, data) => {
    updateOutputField(element, calculateCuboidVolume(data))
}


const handleFormSubmit = (updateResultCb, ...inputs) => e => {

    const { target } = e;

    e.preventDefault();

    const form = new FormData(target);

    const data = inputs.reduce((data, input) => {
        let value = parseFloat(form.get(input));
        data[input] = value;
        return data;
    }, {});

    updateResultCb(target, data)

}

const cyliderForm = document.querySelector('.cylinder');
const cuboidForm = document.querySelector('.cuboid');

cyliderForm.addEventListener('submit', handleFormSubmit(updateCylinderResult, 'cylinder-height', 'cylinder-radius'));
cuboidForm.addEventListener('submit', handleFormSubmit(updateCuboidResult, 'cuboid-height', 'cuboid-length', 'cuboid-width'));