var fs = require('fs');


let vars = new Map()

const operations = ["add"]
function fileHandler(){

    fs.readFile('textFile.txt', 'utf8', (err, data) => {
        if(err) throw err;

        let arr = data.split(/\n/)

        arr.forEach(line => {
            var line_arr = line.split(" ")
            console.log(line_arr[0]); 


if(operations.indexOf(line_arr[0]) > -1){
// console.log("Yoo eah");

    const operation = line_arr.shift()

    if(operation.toLowerCase() == 'add'){


    console.log(operation);
    console.log("line_arr ", line_arr);
    console.log(vars);
        

    }



}else{
    vars.set(line_arr[0], line_arr[2])
}




            // line_arr[0]
        })
        
        // console.log(arr);
        

    });

}

fileHandler();
