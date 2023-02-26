import React from 'react';
import HelpMessage from '../UI/Button/HelpMessage';

export default function ProductTotalPrice({ amount, price }) {
  return (
    <div className="flex justify-between py-4">
      <div className="flex items-center">
        <span className="text-sm font-bold">총 상품 금액</span>
        <HelpMessage />
      </div>
      <div className="flex items-center">
        <span className='text-sm text-Gray-300 after:mx-1 after:content-["|"]'>
          총 수량 {amount}개
        </span>
        <span className="text-[1.375rem] font-bold text-secondary">
          {(amount * price).toLocaleString()}원
        </span>
      </div>
    </div>
  );
}
