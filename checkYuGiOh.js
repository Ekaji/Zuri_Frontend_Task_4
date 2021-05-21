
const checkYuGiOh = (n) => {
  const input = Number(n);
  if ( Number.isNaN( input ) === true || Array.isArray(n) === true || n.constructor === String ) {
    return console.log( `invalid parameter: ${JSON.stringify(n)}` );
  }
  const numbers = [];
  for ( i = 1; i <= input; i++ ) {
      if (i % 2 === 0 && i % 3 === 0 &&  i % 5 === 0) numbers.push('yu-gi-oh');
      else if (i % 2 === 0 && i % 5 === 0) numbers.push('yu-oh');
      else if (i % 2 === 0 && i % 3 === 0) numbers.push('yu-gi');
      else if (i % 2 === 0) numbers.push('yu');
      else if (i % 3 === 0) numbers.push('gi');
      else if (i % 5 === 0) numbers.push('oh');
      else numbers.push(i);
  }
  console.log( numbers );
}

checkYuGiOh();