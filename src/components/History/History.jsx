import React from 'react';

import "./History.css"

function History({ history }) {
  return (
    <div>
      <h4>تاریخچه:</h4>
      {history.map((item, index) => (
        <div key={index} className="history-item">
          <p>درآمد: {item.income} | هزینه: {item.expense} | باقیمانده پوله شما: {item.result} | تاریخ: {item.date}</p>
        </div>
      ))}
    </div>
  );
}

export default History;
