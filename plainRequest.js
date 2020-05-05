var url = 'https://cat-fact.herokuapp.com/facts'; //A local page

function load(url, callback) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        var responseMsg;
        xhr.onreadystatechange   = function () {
            //console.log("xhr.readyState: "+xhr.readyState);
            if (xhr.readyState === 4) {
                responseMsg = xhr.response;  
                console.log("inside callback");              
                callback(xhr.response); 
                resolve(responseMsg);      
                console.log("resolved");               
            }
        }

        xhr.open('GET', url, true);
        xhr.timeout = 10000;
        xhr.send();
        console.log("inside load");        
    })
};

async function fetchData(url) {
    
      await fetch(url).then(res => {
            if(!res.ok){
                throw Error(res.statusText);
            }
            return res.json();
        }).then(res => printResponse(res));
};


function printResponse(resp) {
    var jsonMsg = JSON.stringify(resp);
    //console.log(jsonMsg);
    //JSON.stringify(resp);
    let div = document.createElement('div');
    div.innerHTML = jsonMsg;
    document.body.append(div);
    //document.body = "<body>resp</body>";
}

function postResp(values){
    //return Promise.resolve("inside then");
    //console.log("inside then");
    console.log("inside then: "+values);
}

async function orchestrator(){
    let resp1 = await load(url, printResponse);
    postResp(resp1);
}

//orchestrator();
//fetchData(url);
fetchWithTime(url, 5000)
.then(res => res.json())
.then(resp => printResponse(resp))
.then(console.log("All Done"));


function fetchWithTime(url, timeout){
    return Promise.race([fetch(url), 
    new Promise((resolve,reject) => {
        setTimeout(() => reject(new Error('Timeout Exceeded')), timeout);
    })]);
};

var myWorker = new Worker('workerTest.js');

var message = {addThis: {num1:1, num2:2}};

myWorker.postMessage(message);

myWorker.onmessage = function(e) {
    console.log(e.data.result);
};
// load(url, printResponse)
//    .then((values) => postResp(values)).catch(err => {console.log("Exception occured")});