import React, { useState, useEffect } from 'react';

function Hook2useEffect() {
   const [count, setCount] = useState(0);
   useEffect(() => {
     // Actualiza el título del documento usando la API del navegador
     document.title = `You clicked ${count} times`;
   });

   return (
     <div>
       <p>You clicked {count} times</p>
       <button onClick={() => setCount(count + 1)}>
          Click me
       </button>
     </div>
     );
}

export default Hook2useEffect;
