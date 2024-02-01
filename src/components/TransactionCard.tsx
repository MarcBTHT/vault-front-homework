// TransactionCard.tsx
import React from 'react';
import { TransactionCardProps } from "../types/index";

const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => {

  let iconSrc = "";

  if (transaction.type === "TRANSACTION_RECEIVED") {
    iconSrc = "/check-circle.svg"; 
  } else if (transaction.type === "TRANSACTION_SENT") {
    iconSrc = "/send.svg"; 
  } else if (transaction.type === "ACCOUNT_CREATED") {
    iconSrc = "/user-plus.svg";
  }

  const renderTransactionDetails = () => {
    if (transaction.type === "TRANSACTION_RECEIVED") {
      return (
        <>
          <p className="text-gray-600 pr-2">{transaction.data.amount}</p>
          <p className="text-gray-600 pr-6">{transaction.data.unit}</p>
          <p className="text-gray-600">
            <span className="font-bold pr-6">from</span>
            <span className="pr-6">{transaction.data.from}</span>
          </p>
          <p className="text-gray-600">
            <span className="font-bold pr-6">to</span>
            <span className="pr-6">{transaction.data.to}</span>
          </p>
        </>
      );
    } else if (transaction.type === "TRANSACTION_SENT") {
      return (
        <>
          <p className="text-gray-600 pr-2">{transaction.data.amount}</p>
          <p className="text-gray-600 pr-6">{transaction.data.unit}</p>
          <p className="text-gray-600">
            <span className="font-bold pr-6">to</span>
            <span className="pr-6">{transaction.data.to}</span>
          </p>
          <p className="text-gray-600">
            <span className="font-bold pr-6">from</span>
            <span className="pr-6">{transaction.data.from}</span>
          </p>
        </>
      );
    } else if (transaction.type === "ACCOUNT_CREATED") {
      return (
        <>
          <p className="text-gray-600">
            <span className="font-bold pr-6">currency</span>
            <span className="pr-6">{transaction.data.currency}</span>
          </p>
          <p className="text-gray-600">
            <span className="font-bold pr-6">name</span>
            <span className="pr-6">{transaction.data.name}</span>
          </p>
        </>
      );
    }
    return (
      <p className="text-gray-600">Type not supported</p>
    );
  };

  return (
    <div className="flex items-center p-4 my-4 rounded shadow-lg bg-thistle transition-all hover:bg-thistle_light">
      <img src={iconSrc} alt={transaction.type} className="h-6 w-6 mr-6" />
      <p className="font-bold text-wenge pr-6">{transaction.type.split('_')[1]}</p>
      {renderTransactionDetails()}
    </div>
  );
};


export default TransactionCard;