this.onmessage = function(e){

    console.log("inside worker js");
    
    if(e.data.addThis != undefined) {
        this.postMessage({result: 1 + 5});
    }
};
