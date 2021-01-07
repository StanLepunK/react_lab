import '../App.css';

import React from 'react';
import { Link } from 'react-router-dom';

export const Test = () => {
  //console.log(data.location.aboutProps.name)
  return (
    <div className="App-header">
      {/* <div>{data.location.aboutProps}</div> */}
      <Link to="/" className="App-link">
        go home
      </Link>
    </div>
  );
};

export default Test;

// export default function Result() {
//   return (
//     <div>
//       <Link to="/">go home</Link>
//     </div>
//   );
// }
