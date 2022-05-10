function calculateFactorial(){
    const userNum = parseInt(document.getElementById('user-number').value)
    
    console.log(userNum)
    
    if(isNaN(userNum) || userNum < 0){
        alert('Numero incorrecto')
        return
    }
    
    if(userNum === 0) {
        document.getElementById('result').innerHTML = `El factorial de ${userNum} es 1 `
    }
    
    const arrayNumber = []
    let end = userNum
    let factorial = 1

    for (let cont = 0; cont < end; cont++) { 
        arrayNumber.push(cont+1)
    
        factorial = factorial * parseInt(arrayNumber[cont])
    
        document.getElementById('result').innerHTML = `El factorial de ${userNum} es ${factorial}`
    }

}