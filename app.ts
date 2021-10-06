//Validar si un número es primo
const isPrime = (num: number): boolean => {

    for (let i = 2; i < num; i++) {
  
      if (num % i === 0) {
        return false;
      }
  
    }
  
    return num !== 1;
}

// Primeros números primeros dependiendo del total que se desea mostrar.

const firstPrimes = (total: number) => {

    const primes: number[] = []

    let count: number = 1

    while(primes.length < total){

        count++;

        if(isPrime(count)){
            primes.push(count)
        }
    }

    return primes

}

console.log(firstPrimes(10));
