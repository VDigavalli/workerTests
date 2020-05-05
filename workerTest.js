this.onmessage = function(e){

    console.log("inside worker js");
    
    if(e.data.addThis != undefined) {
        this.postMessage({result: e.data.addThis.num1 + e.data.addthis.num2});
    }
};
