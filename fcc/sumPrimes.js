function sumPrimes(num) {
    var total = 0;

    for (var i = 2; i <= num; i++){
        var isPrime = 'y';
        for (var x = 2; x < i; x++){
            if ((i % x) == 0){
                isPrime = 'n';
            }
        }
        if (isPrime == 'y'){
            total += i;
        }
    }
  return total;
}

sumPrimes(977);