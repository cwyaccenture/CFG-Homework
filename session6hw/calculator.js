function SUM(a,b){
    return a+b
}

function SUBTRACT(a,b){
    return a-b
}

function DIVIDE(num,den){
    return num/den
}

function MULTIPLY(a,b){
    return a*b
}

function POWER(a,b){
    var ans=1;
    if (b ==0){
        return ans
    } 
    else if (b>0){
        for(let i=0;i<b;i++){ans=ans*a}
        return ans
    }
    else{
        for(let i=0; i<-b;i++){
            ans=ans/a
        }
        return ans
    }
       
    
}

// function SQRT(a){
//     var rt=a/2
//     for(let err=(rt*rt-a);err>=0.0001 || err <=-0.0001;{
//     if(err=(rt*rt-a)>0){rt=rt/2;}
//     else{rt=rt+rt/2;}
//     })
// return rt}

function binarysearch(a,sqroot){
    for(let err=a*a-a; err>=0.0001 || err <=-0.0001;err=sqroot*sqroot-a){
        if(err>0){sqroot=sqroot/2;}
        else{sqroot=sqroot+sqroot/2;}}
    return sqroot;}

function SQRT(a){
    return binarysearch(a,a)}

// var qn=prompt("Input the expression you would like to calculate according to the instruction.")

// var sol=qn
// console.log(qn)

// document.getElementById("Solution").innerHTML = "Solution is " + sol


    