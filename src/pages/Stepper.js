import { useState } from "react";

export default function Stepper({ initial = 0, onChange = () => {} }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(newCount);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onChange(newCount);
  };

  return (
    <div>
      <button
        data-cy="decrement"
        className="btn-primary"
        onClick={handleDecrement}
      >
        -
      </button>
      <span data-cy="counter">{count}</span>
      <button
        data-cy="increment"
        className="btn-primary"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}
