this.onmessage = function(e){

    console.log("inside worker js");
    
    if(e.data.addThis != undefined) {
        console.log("num1: "+e.data.num1);
        console.log("num2: "+e.data.num2);
        
        this.postMessage({result: e.data.num1 + e.data.num2});
    }
};
