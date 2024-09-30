import React, { useRef, useState } from "react";

export default function UppercaseInput() {
  // Используем useRef для получения значения из текстового поля
  const inputRef = useRef(null);
  // состояние для хранения форматированного текста
  const [formattedText, setFormattedText] = useState("");

  // Обработчик нажатия на кнопку
  const handleClick = () => {
    // Получаем значение из текстового поля и преобразуем его в верхний регистр
    const inputText = inputRef.current.value.toUpperCase();
    // Сохраняем форматированный текст в состояние
    setFormattedText(inputText);
  };

  return (
    <div>
      {/* Текстовое поле */}
      <input type="text" ref={inputRef} placeholder="Введите текст" />

      {/* Кнопка для отображения текста */}
      <button onClick={handleClick}>Показать</button>

      {/* Вывод форматированного текста */}
      {formattedText && (
        <div>
          <h2>{formattedText}</h2>
        </div>
      )}
    </div>
  );
}
