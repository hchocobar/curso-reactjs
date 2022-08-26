import React from 'react';

function Hook1useState() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
       <p>You clicked {count} times</p>
       <button onClick={() => setCount(count + 1)}>
          Click me
       </button>
    </div>
  );
}

export default Hook1useState;
