import html from '../../js/utils/html.js';

export default (id, submitText = 'Отправить') => ({
  action: 'https://echo.htmlacademy.ru',
  fields: [
    html`<input
        id="${id}-name"
        name="name"
        type="text"
        placeholder="Имя"
        pattern="^[A-Za-zА-Яа-яЁё\\- ]+$"
        required
      />
      <label for="${id}-name">Имя</label>`,
    html`<input
        id="${id}-phone"
        name="phone"
        type="tel"
        placeholder="Телефон"
        pattern="^\\+7\\(\\d{3}\\)\\d{7}$"
        required
      />
      <label for="${id}-phone">Телефон</label>`,
    html`<textarea
        id="${id}-comment"
        name="comment"
        placeholder="Ваш вопрос"
      ></textarea>
      <label for="${id}-comment">Ваш вопрос</label>`,
    html`<label>
      <input name="agree" type="checkbox" checked required />
      Я согласен на обработку персональных данных
    </label>`,
  ],
  submitText,
});
