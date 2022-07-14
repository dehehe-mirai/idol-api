const Rx = require("rxjs")
const {startWith} = require("rxjs/operators")
requestUrl = "http://localhost:3000/idols"

var requestStream = new Rx.Observable()
requestStream.subscribe((requestUrl)=>{
    console.log(requestUrl);
});

requestStream.pipe(startWith("https://api.github.com/users"))