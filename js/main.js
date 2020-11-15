if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

const menuIconWrapper = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

menuIconWrapper.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
}

const btnShowMoreCard = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-hidden');
btnShowMoreCard.onclick = function () {
    hiddenCards.forEach(function (card) {
        card.classList.remove('card-hidden');
    })
}

const widgets = document.querySelectorAll('.widget');

widgets.forEach(function (widget) {
    widget.addEventListener('click', function (e) {
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    })

})

const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

checkBoxAny.addEventListener('change', function () {

    if (checkBoxAny.checked) {
        topLocationCheckboxes.forEach(function (item) {
            item.checked = false;
        })
    }
});

topLocationCheckboxes.forEach(function (item) {
    item.addEventListener('change', function () {
        if (checkBoxAny.checked) {
            checkBoxAny.checked = false;
        }
    })
})

const showMoreOption = document.querySelector('.widget__show-hidden');
const hiddenCheckboxes = document.querySelectorAll('.checkbox--hidden');

showMoreOption.onclick = function (e) {
    if (showMoreOption.dataset.option == 'hidden') {
        
        hiddenCheckboxes.forEach(function (item) {

            item.style.display = 'block';
        });
        showMoreOption.innerText = 'Скрыть дополнительные опции';
        showMoreOption.dataset.option = 'visible';
    } else if (showMoreOption.dataset.option == 'visible') {
        
        hiddenCheckboxes.forEach(function (item) {

            item.style.display = 'none';
        });
        showMoreOption.innerText = 'Показать еще';
        showMoreOption.dataset.option = 'hidden';

    }


}