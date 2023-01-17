// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

if (document.querySelector('#map')) {
	function init() {
		let map =new ymaps.Map('map', {
			center: [55.46942599178721,37.727729107254],
			zoom: 15,
		});
		let placemark = new ymaps.Placemark([55.46942599178721,37.727729107254], {},
		{
			iconLayout: 'default#image',
			iconImageHref: 'https://w7.pngwing.com/pngs/367/903/png-transparent-house-circle-icon-round-house-icon-png-material-text-trademark.png',
			iconImageSize: [30, 20],
			iconImageOffset: [-345, -110]
		});

		let placemark1 = new ymaps.Placemark([55.47228433328054,37.71354558598325], {
			balloonContent: `
			<div class="balloon">
				<div class="balloon__address">Логистическая ул. 1</div>
			</div>`
		});
		
		map.controls.remove('geolocationControl'); // удаляем геолокацию
		map.controls.remove('searchControl'); // удаляем поиск
		map.controls.remove('trafficControl'); // удаляем контроль трафика
		map.controls.remove('typeSelector'); // удаляем тип
		map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
		map.controls.remove('zoomControl'); // удаляем контрол зуммирования
		map.controls.remove('rulerControl'); // удаляем контрол правил
		map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
		
		map.geoObjects.add(placemark);
		map.geoObjects.add(placemark1);
		
		placemark1.balloon.open();
		}
	ymaps.ready(init)
}
