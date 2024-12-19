document.addEventListener("DOMContentLoaded", () => {
  const itemClasses = ["car__item", "coach__item", "mattres__item", "curtain__item", "carpet__item"];
  let currentIndex = 0; // Индекс текущего изображения
  let displayCount = 1; // Количество отображаемых изображений

  itemClasses.forEach((itemClass) => {
    const items = document.querySelectorAll(`.${itemClass}`); // Получаем все элементы с текущим классом

    // Функция для обновления отображаемых элементов
    function updateSlider() {
      // Скрываем все элементы
      items.forEach((item) => {
        item.style.display = "none";
      });

      // Отображаем нужное количество элементов
      for (let i = 0; i < displayCount; i++) {
        const index = (currentIndex + i) % items.length; // Циклический индекс
        items[index].style.display = "block"; // Показываем элемент
      }
    }

    // Ищем родительский элемент, содержащий текущий itemClass
    const parentElement = items[0].closest('section');

    // Ищем кнопки внутри родительского элемента
    const leftButton = parentElement.querySelector(".carousel__button.left");
    const rightButton = parentElement.querySelector(".carousel__button.right");

    leftButton.addEventListener("click", () => {
      currentIndex = (currentIndex + items.length - 1) % items.length; // Уменьшаем индекс, циклически
      updateSlider();
    });

    rightButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % items.length; // Увеличиваем индекс, циклически
      updateSlider();
    });

    updateSlider();
  });
});