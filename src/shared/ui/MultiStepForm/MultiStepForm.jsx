import React, { useState } from 'react';
import Step1GeneralInfo from './Step1GeneralInfo';
import Step2Details from './Step2Details'; // Твой новый 2-й шаг

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ /* общий state */ });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="multistep-container">
      {/* Рендерим компонент в зависимости от текущего шага */}
      {step === 1 && (
        <Step1GeneralInfo 
          formData={formData} 
          setFormData={setFormData} 
          onNext={nextStep} 
        />
      )}
      
      {step === 2 && (
        <Step2Details 
          formData={formData} 
          setFormData={setFormData} 
          onNext={nextStep} 
          onBack={prevStep} // Для второго шага передаем еще и кнопку "Назад"
        />
      )}
      
      {/* Шаги 3, 4, 5... */}
    </div>
  );
}