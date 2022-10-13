const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors({
}))

const port = 8080

app.get('/:n', function(req, res){
    const n = req.params.n
    const z = n*n
    var arr = [];
    while(arr.length < z){
    var r = Math.floor(Math.random() * 7) + 1;
    arr.push(r);
    }
    res.end(arr.toString());
});

app.listen(port, function(error){
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on portt' + port)
    }
})