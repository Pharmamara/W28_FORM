import React, { useState } from "react";

export default function TextInput() {
  const [text, setText] = useState(""); // Стейт для хранения введённого текста
  const [submittedText, setSubmittedText] = useState(""); // Стейт для хранения отформатированного текста после отправки

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    // Преобразуем текст в верхний регистр и сохраняем его
    setSubmittedText(text.toUpperCase());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Введите текст"
        />
        <input type="submit" value="Отправить" />
      </form>

      {/* Вывод заглавного текста после отправки */}
      {submittedText && (
        <div>
          <h2>{submittedText}</h2>
        </div>
      )}
    </div>
  );
}
