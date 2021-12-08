      function pali(str){

        let reversedStr = str.split("").reverse().join("");
        if(str === reversedStr){
          console.log( `A palavra ${str} é um palindromo`)
        } else{
          console.log(" não é um palindromo")
        }
           
      }

   (pali("reviver")); // A chamada da função pode ser feita sem os parênteses em volta da chamada
                      // Você pode chama-la assim: pali("reviver");
