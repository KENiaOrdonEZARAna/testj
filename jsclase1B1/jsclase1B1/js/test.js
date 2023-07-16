class Numeros{
    perfectos(){
    let num= document.getElementById("num").value 
    let perfecto= num
    num=parseInt(num)
    console.log(num)
    let i=0
    let contador=0
    while (i<num){
        i++
        if (num%i==0){
            contador=contador+ (i%perfecto)
    
    
        } else { if (contador==num){
            console.log("Es perfecto")
            resp.textContent= `El numero ${num} es perfecto`
        }
    else{ 
    console.log(" No es perfecto")
    resp.textContent= `El numero ${num}  no es perfecto`
    }
        }
    }
} 
figonasis(){
    let num = document.getElementById("num").value
    num = parseInt(num)
    console.log(num)
    
    let a = 0
    let b = 1
    let resultado = ''
    
    while (b <= num) {
      resultado += b + ' '
      let temp = b
      b = a + b
      a = temp
    }
    
    console.log(resultado)
    resp.textContent = resultado
    

}    
}
const numero= new Numeros()