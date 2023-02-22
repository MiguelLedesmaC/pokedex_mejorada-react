import React from 'react';
import './Pagination.css'

const Pagination = (props) => {
const {onLeftClick, onRightClick, page, totalPages} = props;

  return (
    <div className='pagination'>
      <button onClick={onLeftClick}>
            <div>
                👈    
            </div>
      </button>

      <p>{page} de {totalPages}</p>
      <button onClick={onRightClick}>
        <div>           
            👉             
        </div>  
      </button>
    </div>
  );
};

export default Pagination;