'use strict';

alert('Начало');
const who = prompt('Кто там?');
if (who === 'Отмена' || who === '' || who === null) {
  alert('Отменено');
} else if (who === 'Другое') {
  alert('Я вас не знаю');
} else if (who === 'Админ') {
  const who = prompt('Пароль?');
  if (who === 'Отмена' || who === '' || Boolean(who) === null) {
    alert('Отменено');
  } else if (who === 'Другое') {
    alert('Неверный пароль');
  } else if (who === 'Я Главный') {
    alert('Здравствуйте!');
  } else {
    alert('Неверный пароль, начинайте сначала');
  }
} else {
  alert('Идите нахуй!');
}
