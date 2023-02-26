import React from 'react';

export default function ProductCount({ amount, plus, minus }) {
  const handleDecrement = () => {
    minus();
  };
  const handleIncrement = () => {
    plus();
  };

  return (
    <div className="border-y-2 border-Gray-100 py-4">
      <div className="flex w-28 items-center justify-between border border-Gray-200">
        <button
          type="button"
          aria-label="수량 1 감소"
          onClick={handleDecrement}
          className=" h-[2.125rem] w-[2.125rem] bg-Gray-100"
        >
          -
        </button>
        <output className="block ">{amount}</output>
        <button
          type="button"
          aria-label="수량 1 증가"
          onClick={handleIncrement}
          className=" h-[2.125rem] w-[2.125rem] bg-Gray-100"
        >
          +
        </button>
      </div>
    </div>
  );
}
