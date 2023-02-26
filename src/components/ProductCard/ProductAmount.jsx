import React, { useState } from 'react';
import PurchaseBtn from '../UI/Button/PurchaseBtn';
import ProductCount from './ProductCount';
import ProductTotalPrice from './ProductTotalPrice';

export default function ProductAmount({ discountPrice }) {
  const [amount, setAmount] = useState(1);

  const plusAmount = () => {
    setAmount(amount + 1);
  };

  const minusAmount = () => {
    if (amount === 0) {
      setAmount((prev) => prev + 1);
    }
    setAmount((prev) => prev - 1);
  };

  return (
    <>
      <ProductCount amount={amount} plus={plusAmount} minus={minusAmount} />
      <ProductTotalPrice amount={amount} price={discountPrice} />
      <PurchaseBtn amount={amount} />
    </>
  );
}
