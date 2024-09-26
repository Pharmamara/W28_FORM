import React, { useState } from "react";
//Компонент имеет два состояния: inputValue хранит введённый текст, formattedText хранит форматированный текст
const TextFormatter = () => {
  const [inputValue, setInputValue] = useState("");
  const [formattedText, setFormattedText] = useState("");

  // Функция обработки ввода. Когда пользователь вводит текст в поле, этот текст сохраняется в inputValue
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Функция обработки нажатия кнопки. При нажатии на кнопку вызывается функция handleButtonClick, которая преобразует текст в верхний регистр и сохраняет его в formattedText
  const handleButtonClick = () => {
    const formatted = inputValue.toUpperCase();
    setFormattedText(formatted);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите текст"
      />
      <button onClick={handleButtonClick}>Показать текст</button>

      {/* Отображаем форматированный текст и стилизуем его красным жирным шрифтом */}
      {formattedText && (
        <p style={{ color: "red", fontWeight: "bold" }}>{formattedText}</p>
      )}
    </div>
  );
};

export default TextFormatter;
