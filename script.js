function CalcularPromedio(Mat,Len,Efs){
    return (Mat + Len + Efs) /3;

}

function CalcularMayorNota(Mat,Len,Efs) {

    if(Mat > Len){
        if(Mat>Efs){
            alert('La mayor nota es matemática con un ' + Mat)
        }
    }else if(Len > Mat){
        if(Len>Efs){
            alert('La mayor nota es Lengua con un ' + Len)
        }
    }else if(Efs>Mat){
        if(Efs>Len){
            alert('La mayor nota es EFSI con un ' + Efs)
        }
    }
}


function ValidarNotas(Mat,Len,Efs){

    if(Mat>10 || Mat<1) {
        alert('Hay un número mayor a 10 o menor a 1')

    }

    if(Len>10 || Len<1 ) {
        alert('Hay un número mayor a 10 o menor a 1')
    
        }

    if(Efs>10 || Efs<1) {
        alert('Hay un número mayor a 10 o menor a 1')
        
            }


}
const ColMat = document.getElementById('mat');
ColMat.addEventListener('input', function(color) {
   

});

miInput.addEventListener('len', function(event) {
    // Mostramos el valor del input en la consola cada vez que cambia
    console.log('Valor del input:', event.target.value);
});

miInput.addEventListener('efs', function(event) {
    // Mostramos el valor del input en la consola cada vez que cambia
    console.log('Valor del input:', event.target.value);
});
        



document.querySelector("#may").addEventListener("click", () => {
    let Mat = parseInt(document.getElementById("mat").value);
    let Len = parseInt(document.getElementById("len").value);
    let Efs = parseInt(document.getElementById("efs").value);

    CalcularMayorNota(Mat,Len,Efs);
})





document.querySelector("#env").addEventListener("click", () => {
    let Mat = parseInt(document.getElementById("mat").value);
    let Len = parseInt(document.getElementById("len").value);
    let Efs = parseInt(document.getElementById("efs").value);



       ValidarNotas(Mat,Len,Efs);

})

document.querySelector("#prom").addEventListener("click", () => {
    let Mat = parseInt(document.getElementById("mat").value);
    let Len = parseInt(document.getElementById("len").value);
    let Efs = parseInt(document.getElementById("efs").value);

    var Pro = CalcularPromedio (Mat,Len,Efs);
    alert ('El promedio de las notas es ' + Pro);


})