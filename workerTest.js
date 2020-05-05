this.onmessage = function(e){

    console.log("inside worker js");
    
    if(e.data.addThis != undefined) {
        this.postMessage({result: e.data.num1 + e.data.num2});
    }
};
