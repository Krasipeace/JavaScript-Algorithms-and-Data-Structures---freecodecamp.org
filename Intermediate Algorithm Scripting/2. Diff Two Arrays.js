function diffArray(arr1, arr2) {
    const difference = new Set(arr1);
    arr2.forEach((item) => difference.has(item) ? difference.delete(item) : difference.add(item)
    );

    return Array.from(difference);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));