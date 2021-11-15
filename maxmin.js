

function maxmin(arr){
    var max=arr[0];
    var min=arr[0];
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
        if(min>arr[i]){
            min=arr[i]; 
        }
    
        sum+=arr[i];
    }

    let avg=sum/arr.length;

    return "The minimum is "+min+" the maximum is " + max+" and the average is "+avg;


}


console.log(maxmin([-1,2,3,1,9,2]));