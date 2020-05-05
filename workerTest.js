this.onmessage = function(e){

    if(e.data.addThis != undefined) {
        this.postMessage({result: e.data.addThis.num1 + e.data.addthis.num2})
    }
};