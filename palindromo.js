      function pali(str){

        let reversedStr = str.split("").reverse().join("");
        if(str === reversedStr){
          console.log( `A palavra ${str} é um palindromo`)
        } else{
          console.log(" não é um palindromo")
        }
           
      }

   pali("reviver");