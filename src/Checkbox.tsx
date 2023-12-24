import React, { useState } from 'react';

const Checkbox = ({ label, models, onCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onCheckboxChange(label, newCheckedState, models);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {label}
      </label>
      {models && (
        <div style={{ marginLeft: '20px' }}>
          {models.map((model) => (
            <div key={model}>
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onCheckboxChange(model, isChecked)}
                />
                {model}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
