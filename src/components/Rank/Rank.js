import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div className= 'bg-transparent mt6'>
      <div className=' center white f3 bg-transparent'>
        {`${name}, your current entry count is...`}
      </div>
      <div className=' center bg-transparent white f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;