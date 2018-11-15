
function rotationNumber(lengthVal,rotationVal){
    console.log("call to rotationNumber",lengthVal,rotationVal);

    if(rotationVal - lengthVal < lengthVal)
    return rotationVal - lengthVal;

    rotationNumber(rotationVal - lengthVal,rotationVal);

}

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    

var arrB = [];
var l = A.length;
var k = K;

console.log("Array without rotation-",A.toString());
console.log("Rotation Count",K);

if(l==parseInt(k/2) || k==l){
   console.log("rotated array A-",A.toString());
    return A;
}
console.log("Length of the array-",l);

var m = 0;
if(k>l)
    m = rotationNumber(k,l);
        //m = k-l;
else
    m = k;

var j = 0;

console.log("Value of m",m);



for(var i=0;i<l;i++){

    if( i+m <  l)
        j = i+m;
    else if( i+m == l)
        j = 0;
    else
        j++;
    
    arrB[j] = A[i];
    
}

console.log("rotated array arrB-",arrB.toString());
return arrB;
}
//solution([3, 8, 9, 7, 6], 3);
//solution([0, 0, 0], 1);
//solution([1, 2, 3, 4], 4); 
solution([10, 20, 30, 40,50], 14);
//solution([13], 14);