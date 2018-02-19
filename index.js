import React from 'react';
import { render } from 'react-dom';

/*
const output = <div>
    <div>
        <h1 id="title">Major General's Song</h1>
        <div>
          <p>Author: Gilbert and Sullivan</p>
          <p>1879</p>
        </div>
    </div>
</div>
*/

const makeSong = (inHeader) => {
  let line = <div> <div> {inHeader} <div> </div> </div> </div>;
  console.log(line);
  return(line);
}



const makeHeader = (inObj) => {
  let line = <h1 id={inObj.id}>{inObj.text}</h1>;
  console.log(line);
  return(line);
}


const makeBody = (inObj) => {
  let line = <p>Author: {inObj.author}</p> <p>{inObj.year}</p>;
  console.log(line);
  return(line);
}

const header = makeHeader({ id: 'title', text: "Major General's Song" });
//const author = makeBody({ author: 'Gilbert and Sullivan', year: 1879 });
const majorGeneral = makeSong(header);



let output = <div />;

console.log(output)

render(output, document.getElementById('root'));
