// Инициализация объекта WebApp
const tg = window.Telegram.WebApp;

// Элемент для вывода ID
const userDisplay = document.getElementById('user-display');

// Получаем данные пользователя
const user = tg.initDataUnsafe.user;

if (user && user.id) {
    // Если пользователь открыл из Telegram, показываем его ID
    userDisplay.textContent = `Ваш ID: ${user.id}`;
    
    // Сообщаем телеграму, что приложение готово
    tg.ready();
    
    // Опционально: развернуть на весь экран
    tg.expand(); 
} else {
    // Если открыто не в Telegram (для тестов в браузере)
    userDisplay.textContent = "Откройте через Telegram";
}
