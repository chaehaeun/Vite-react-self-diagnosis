import React from 'react';

export default function PurchaseBtn({ amount }) {
  return (
    <button
      type="button"
      disabled={!amount}
      className="flex h-[3rem] w-full items-center justify-center rounded-md bg-primary-100 text-sm font-bold text-white duration-200 hover:bg-primary-200 disabled:bg-Gray-200 disabled:text-Gray-300"
    >
      <svg
        className="mr-2"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="구매하기 버튼 아이콘"
      >
        <rect width="28" height="28" fill="white" />
        <path
          d="M7 7H11.719L16.2628 13.5971V7H21V21H16.2628L11.293 14.1082V21H7V7Z"
          fill={`${!amount ? '#999999' : `#03C75A`}`}
        />
      </svg>
      구매하기
    </button>
  );
}
