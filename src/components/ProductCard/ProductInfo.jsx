import React from 'react';
import productImg from '../../assets/product-img.png';

export default function ProductInfo({ product, discountPrice }) {
  return (
    <>
      <div className="h-[183px] overflow-hidden">
        <img
          src={productImg}
          alt={product.name}
          className="object-cover w-full h-full "
        />
      </div>
      <h1 className="mt-4 text-lg font-bold leading-6">
        {product.name}
        <br />
        {product.amount}
      </h1>
      <div className="flex items-center justify-between py-4 border-b border-Gray-200">
        <span aria-label="할인율" className="text-lg font-bold text-secondary">
          {Math.floor(product.discount)}%
        </span>
        <p className="flex items-center font-bold ">
          <span
            aria-label="정상가"
            className="mr-[0.375rem] text-Gray-300 line-through"
          >
            {product.regularPrice.toLocaleString()}원
          </span>
          <span aria-label="판매가" className="text-[1.375rem]  font-normal">
            {discountPrice}원
          </span>
        </p>
      </div>
      <div className="py-4 text-sm">
        <p className="flex items-center pb-2">
          <span className='after:mx-1 after:text-Gray-300 after:content-["|"]'>
            택배배송
          </span>
          <span aria-label="배송비" className="font-bold">
            3000원
          </span>
          <span className="ml-1 font-bold text-secondary">(주문시 결제)</span>
        </p>
        <p className="text-Gray-300">10개마다 부과</p>
      </div>
    </>
  );
}
