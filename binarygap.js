var number = 13;
//var binaryNumber = number.toString(2);

//var binaryNumber = dec2bin(number);
//var binaryNumber = toBinary(number);

function runBinaryGap()
{
var arrays = [1041,13,32,1];
 for(var i = 0; i<arrays.length; i++)
 {
     console.log("calling for--",arrays[i]);
    binaryGap(arrays[i].toString(2));
 }


}

function dec2bin(dec){
    console.log((dec >>> 0).toString(2));
    return (dec >>> 0).toString(2);
}

function toBinary(number) {
		var result=[],i;
		for (i=number;i>0;i=parseInt(i/2)) {
			result.push(i%2);
		}
		
		return result.reverse().join("");
	}



function binaryGap(binaryNumber){

    var positionsOfOne = [];

    for(var i = 0;i<binaryNumber.length;i++)      
        if(binaryNumber.charAt(i)=="1")
             positionsOfOne.push(i);
    
    
    var maxGap = 0;
    for(var i=0;i<positionsOfOne.length;i++)
        if(positionsOfOne[i+1] != positionsOfOne[i]+1 && maxGap < positionsOfOne[i+1]-positionsOfOne[i])
            maxGap = positionsOfOne[i+1]-positionsOfOne[i]-1;
            
    console.log("binaryNumber",binaryNumber);
    console.log("positionsOfOne",positionsOfOne.toString());
    console.log("binary gap ",maxGap)
}
runBinaryGap();
//binaryGap();

