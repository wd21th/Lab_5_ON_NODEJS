var fs = require('fs');


let vars = new Map()
let strings = new Map()



const operations = ["add", "sub", "inc", "dec", "mul", "div", "exe"]

function fileHandler(){
    // decrement.txt
    // multiplication
    // div
    // substriction.txt
    // string_var
    // exchange.txt
    fs.readFile('exchange.txt', 'utf8', (err, data) => {
        if(err) throw err;

        let arr = data.split(/\n/)

        arr.forEach(line => {
            var line_arr = line.split(" ")
            console.log("Variable ",line_arr[0]); 
            console.log("Pseudo-ops ",line_arr[1]); 


if(operations.indexOf(line_arr[0].toLowerCase() ) > -1){
// console.log("Yoo eah");

const operation = line_arr.shift()


console.log("toLowerCase ", operation.toLowerCase());




    if(operation.toLowerCase() == 'add'){


    // console.log(operation);
    // console.log("line_arr ", line_arr);

    var sum = 0
    line_arr.forEach(
        variable => {
            sum += +vars.get(variable)
        }
    )
    // console.log("vars " ,vars);
    console.log("SUM " ,sum);
        

    }else if(operation.toLowerCase() == 'sub'){

        var sub = +vars.get(line_arr[0])
        line_arr.forEach(
            variable => {
                sub -= +vars.get(variable)
            }
        )
        // console.log("vars " ,vars);
        console.log("sub " ,sub);
            

    }else if(operation.toLowerCase() == 'inc'){


  line_arr.forEach(
        variable => {
            console.log( +vars.get(variable) + 1)
        }
    )

    }else if(operation.toLowerCase() == 'dec'){


        line_arr.forEach(
            variable => {
                console.log( +vars.get(variable) -1)
            }
        )

    }else if(operation.toLowerCase() == 'mul'){

let mul = 1
        line_arr.forEach(
            variable => {
                mul *= +vars.get(variable)
            }
        )
console.log(mul)


    }else if(operation.toLowerCase() == 'div'){

        let div = +vars.get(line_arr[0])
                line_arr.forEach(
                    variable => {
                        div /= +vars.get(variable)
                    }
                )
        console.log(div)
        
        
            }

            else if(operation.toLowerCase() == 'exe'){


                var variable_1 = vars.get(line_arr[0])
                var variable_2 = vars.get(line_arr[1])

console.log("Exchange")
console.log(variable_1)
console.log(variable_2)

//console.log(vars.get(variable_1))
//console.log(vars.get(variable_2))



var a = vars.get(line_arr[1])

vars.set(line_arr[0], a) 



console.log(vars)



            }       









}else{

    console.log("Variable name ", line_arr[0])
    // console.log("Fist symbol ",line_arr[0][0])
    console.log(Number.isInteger( +line_arr[0][0] ))


    if(Number.isInteger( +line_arr[0][0])) {
        console.log("Fist symbol must be not started with digit")
    }


// console.log(line_arr[0].match(/./))
    if(line_arr[0].match(/./)){
        console.log("Не использовать точку")
    }


console.log(line_arr[0].match(/&/))
    if(line_arr[0].match(/&/)){
        console.log("Ampersands!")
    }







    if(line_arr[1] == "DB"){

if(line_arr[2] > -128 && line_arr[2] < 128){
    vars.set(line_arr[0], line_arr[2])
}


    }else if(line_arr[1] == "DW"){

        if(line_arr[2] > -32 && line_arr[2] < 767){
            vars.set(line_arr[0], line_arr[2])
        }

    }else if(line_arr[1] == "DD"){

        if(line_arr[2] > -32 && line_arr[2] < 767){
            vars.set(line_arr[0], line_arr[2])
        }

        
    }



console.log(vars)
console.log(strings)

}




            // line_arr[0]
        })
        
        // console.log(arr);
        

    });

}

fileHandler();

