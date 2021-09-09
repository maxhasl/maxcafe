import { useState } from 'react';

function useAmount(initialAmount) {
  const [amount, setAmount] = useState(initialAmount);

  const decrement = () => setAmount(amount > 0 ? amount - 1 : 0);
  const increment = () => setAmount(amount + 1);

  return { amount, increment, decrement };
}

export default useAmount;
