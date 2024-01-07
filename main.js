var numbers = [1, 2, 3, 4, 5,6]

let iterat=(number,iteration)=>{
    iteration(number)
}

function iteration(num){
    num.forEach(e=>{
        document.write(e+"<br>")
    })
}
iterat(numbers,iteration)  




