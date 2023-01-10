function add(x) {
    return y => z => x + y + z;
  }
  
  console.log(add(10)(20)(30));
  console.log(add(1)(2)(3));
  console.log(add(11)(22)(33));