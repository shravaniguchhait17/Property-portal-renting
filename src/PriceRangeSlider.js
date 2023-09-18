import React from 'react';
import { Slider } from 'antd';
import 'antd/dist/reset.css';

const PriceRangeSlider = ({ minPrice, maxPrice, onPriceChange }) => {

  const handleSliderChange = (value) => {
    onPriceChange(value);
  };

  return (
    <div style={{ margin: '20px', maxWidth: '400px' }}>
      <Slider
        range
        min={minPrice}
        max={maxPrice}
        defaultValue={[minPrice, maxPrice]}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default PriceRangeSlider;
