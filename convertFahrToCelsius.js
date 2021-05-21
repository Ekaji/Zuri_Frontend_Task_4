 const convertFahrToCelsius = (input) => {
    const fahrenheit = Number(input);
    //also checks if the entered value is an empty string or array
    if( Number.isNaN(fahrenheit) === true || Array.isArray(input) === true || input.constructor === String || typeof(input) === 'boolean' ){
        const res = `${JSON.stringify(input)} is not a valid number but a/an ${ Array.isArray(input) === true ? 'Array' : typeof(input)}`
        const boolResonse = `${JSON.stringify(input)} is not a valid number but a/an ${ Array.isArray(input) === true ? 'Array' : typeof(input)}`
        return typeof(input) === 'boolean' ? console.log(boolResonse) : console.log(res)
    } else {
      const fahrenheitToCel = (fahrenheit - 32) * 5 / 9;
      const celciusTo4DecPlace = parseFloat(fahrenheitToCel).toFixed(4)
      const result = fahrenheitToCel === 0 ? 0 : ` ${celciusTo4DecPlace}`;
        console.log(result)
        }
} 

convertFahrToCelsius(true)
