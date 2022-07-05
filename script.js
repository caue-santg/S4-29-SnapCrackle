function snapCrackle(maxValue){
    let resultado = []
    
    for (let i = 1; i <= maxValue; i++){
        
        if( i % 2 === 1 && [i] % 5 === 0){
        resultado.push("SnapCrackle")

        }else if(i % 5 === 0){
            resultado.push("Crackle")

        }else if(i % 2 === 1){
            resultado.push("Snap")

        }else if(i % 2 === 0){
            resultado.push(i)
        }   

    }
    return resultado.join(", ")
}

     let result = snapCrackle()
console.log(result) 


//------SnapCracklePrime

/* function snapCracklePrime (num){
    let result = []

    for ( let i = 1; i <= num; i++){

        if(i % 2 === 1 && i % 5 === 0 && numerosPrimo(i)){
            result.push("SnapCracklePrime")

        }else if(i % 2 === 1 && numerosPrimo(i)){
            result.push("SnapPrime")
            
        }else if(i % 5 === 0){
            result.push("Crackle")

        }else if(i % 2 === 1  && numerosPrimo(i)){
            result.push("Snap")

        }else if(i == numerosPrimo(i)){
            result.push("Prime")
        }
        else if(i % 2 === 0 && numerosPrimo(i)){
            result.push(i)
        }
    }
    return result.join(", ")
}
console.log(snapCracklePrime(15)) */



function numerosPrimo (numero){

    for ( let i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return false
        }
        return numero > 1
    }
}
numerosPrimo()