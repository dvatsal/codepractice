var arr = ['A','B','C','D','E','F','G','H','I','J'];
var arrB = [];
var l = arr.length;
var k = 13;

console.log("Array without rotation-",arr.toString());

if(l==parseInt(k/2) || k==l)
    console.log("rotated array arr-",arr.toString());

console.log("Length of the array-",l);

var m = 0;
if(k>l)
        m = k-l;
else
        m = k;

var j = 0;

for(var i=0;i<l;i++){

    if( i+m <  l)
        j = i+m;
    else if( i+m == l)
        j = 0;
    else
        j++;
    
    arrB[j] = arr[i];
    //if(i+m > l-1)   //3+3 > 5
      //     arrB[l-m-i] = arr[i];  //arrB[6-3]--arrB[3] = arr[i]
    //else
      //  arrB[i] = arr[i+m];
}

console.log("rotated array arrB-",arrB.toString());