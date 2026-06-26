import React from 'react';

const Step2Details = ({ formData, setFormData, onNext, onBack }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(); // Переходим к шагу 3
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>ШАГ 2/5. НАЗВАНИЕ ВТОРОГО ШАГА</h2>
      
      {/* Твои новые инпуты для 2 шага */}
      <div className="form-group">
        <label>Дополнительное поле 1</label>
        <input 
          type="text" 
          name="someAdditionalField" 
          value={formData.someAdditionalField || ''} 
          onChange={handleChange} 
        />
      </div>

      {/* Кнопки управления */}
      <div className="buttons-group">
        <button type="button" onClick={onBack} className="btn-back">
          Назад
        </button>
        <button type="submit" className="btn-next">
          Далее
        </button>
      </div>
    </form>
  );
};

export default Step2Details;