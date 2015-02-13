pythagoreanTheorem = function(a, b, c){

    var result;
    var check;
    
    //If a is nothing//
    if(a === null){
        
        //Squaring Values//
        b = Math.pow(b,2);
        c = Math.pow(c,2);
        
        //Subtracting the hypotenuse from the leg//
        //in order to find the value of a//
        result = (c - b);
        result = Math.sqrt(result);
        check = isNaN(result);
        
        if(check === true){
            result = "not a number. There are either too many or too little values.";
        }
        
        return ('a is equal to ' + result);
    }
    
    //If b is nothing//
    if(b === null){
        
        a = Math.pow(a,2);
        c = Math.pow(c,2);
        
        result = (c - a);
        result = Math.sqrt(result);
        check = isNaN(result);
        
        if(check === true){
            result = "not a number. There are either too many or too little values.";
        }
        
        return ('b is equal to ' + result);
    }

    //If c is nothing//
    if(c === null){
        a = Math.pow(a,2);
        b = Math.pow(b,2);
    
        result = (a + b);
        result = Math.sqrt(result);
        check = isNaN(result);
        
        if(check === true){
            result = "not a number. There are either too many or too little values.";
        }

        return ('c is equal to ' + result);
    }
}

//Declare variables with missing values as "null"//
pythagoreanTheorem(3, 4, null);
