function sliceArray(anim, beginSlice, endSlice) {
    let newArr = anim.slice(beginSlice, endSlice);
  
    return newArr;
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  console.log(sliceArray(inputAnim, 1, 3)); //dog,tiger