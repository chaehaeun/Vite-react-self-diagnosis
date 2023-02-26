import React, { useState } from 'react';

export default function HelpMessage() {
  const [helpBtn, setHelpBtn] = useState(false);

  const helpBtnHandler = () => {
    setHelpBtn((prev) => !prev);
  };

  return (
    <div className="relative ">
      <button
        type="button"
        className="ml-1 h-4 w-4 border border-Gray-200 text-[11px]"
        onClick={helpBtnHandler}
        aria-label="배송비 안내 버튼"
      >
        ?
      </button>
      <div
        role={'dialog'}
        aria-labelledby="helpProductPrice"
        aria-modal="true"
        className={`triangle-before triangle-after absolute -left-20 top-9 z-10 flex w-[300px] justify-center border border-Gray-200 bg-white py-4 duration-200 ${
          helpBtn ? `` : `hidden`
        }`}
      >
        <span className="sr-only" id="helpProductPrice">
          배송비 안내
        </span>
        <p className="text-xs">
          총 상품금액에{' '}
          <span className=" text-secondary">
            배송비는 포함되어 있지 않습니다.
          </span>
          <br />
          결제시 배송비가 추가될 수 있습니다.
        </p>
        <svg
          role="button"
          aria-label="도움말 닫기 버튼"
          className="ml-4 cursor-pointer"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={helpBtnHandler}
        >
          <path
            d="M5.99999 6.70706L1.40379 11.3033L0.696686 10.5962L5.29288 5.99996L0.696688 1.40376L1.40379 0.696655L5.99999 5.29285L10.5962 0.696655L11.3033 1.40376L6.7071 5.99996L11.3033 10.5962L10.5962 11.3033L5.99999 6.70706Z"
            fill="#333333"
          />
        </svg>
      </div>
    </div>
  );
}
