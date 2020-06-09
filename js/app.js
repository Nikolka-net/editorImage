'use strict';


const grayscale = document.getElementById('grayscale');
const contrast = document.getElementById('contrast');
const brightness = document.getElementById('brightness');
const sepia = document.getElementById('sepia');
const saturate = document.getElementById('saturate');
const img = document.getElementById('image'); // обращаемся к картинке
const btnReset = document.getElementById('reset'); // обращаемся к кнопке
const imgUrl = document.getElementById('img-url'); // инпут ввода адреса картинки

const defaults = { // объект для сброса значений
	grayscale: 0,
	contrast: 100,
	brightness: 100,
	sepia: 0,
	saturate: 100
};

/* Навешиваем события */
grayscale.addEventListener('input', updateFilterValue);
contrast.addEventListener('input', updateFilterValue);
brightness.addEventListener('input', updateFilterValue);
sepia.addEventListener('input', updateFilterValue);
saturate.addEventListener('input', updateFilterValue);
btnReset.addEventListener('click', resetFilterValue); // событие при нажатии
imgUrl.addEventListener('change', updateImageUrl); // при изменении, новый адрес картинки

/* Изменяем свойства картинки через css */
function updateFilterValue() {
	btnReset.disabled = false; // кнопка активна
	img.style.filter = `
	grayscale(${grayscale.value}%)
	contrast(${contrast.value}%)
	brightness(${brightness.value}%)
	sepia(${sepia.value}%)
	saturate(${saturate.value}%)
	`;

}

/* сбрасываем значения, картинка в исх. состояние */
function resetFilterValue() {
	img.style.filter = `
	grayscale(${defaults.grayscale}%)
	contrast(${defaults.contrast}%)
	brightness(${defaults.brightness}%)
	sepia(${defaults.sepia}%)
	saturate(${defaults.saturate}%)
	`;

	grayscale.value = defaults.grayscale;
	contrast.value = defaults.contrast;
	brightness.value = defaults.brightness;
	sepia.value = defaults.sepia;
	saturate.value = defaults.saturate;

	btnReset.disabled = true; // кнопка не активна
}

/* Меняем адрес картинки  */
function updateImageUrl() {
	const imageUrl = imgUrl.value; // записыв. значение, адрес картинки
	img.setAttribute('src', imageUrl); // меняем путь на новый адрес

}
