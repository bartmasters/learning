function sumFibs(num) {
    var x=1;
    var y=1;
    var z = 0;
    var total = 0;
    
    while (x <= num) {
        if ((x % 2) != 0) {
            total += x;
        }

        z = x + y;
        x = y;
        y = z;
    }
  return total;
}

sumFibs(75024);