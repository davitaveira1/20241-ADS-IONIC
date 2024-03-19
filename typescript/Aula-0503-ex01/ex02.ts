interface parametros{
    n1 : number;
    n2 : number;
}

function soma(nums : parametros){
    console.log(nums.n1 + nums.n2);
}

//teste da interface e dos métodos
let numerosAleatorios : parametros = {
    n1 : 10,
    n2 : 20
}

soma(numerosAleatorios)
