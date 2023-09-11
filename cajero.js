function guardarDatos(){
    localStorage.setItem("saldo", cuentas[i].saldo)
    
        
}

function cargarDatos(){
    let sal = localStorage.getItem("saldo");
    document.getElementById('sesiondiv').innerHTML = sal + ('.00 Pesitos Joven');

    
}
cargarDatos();




/*function ocultar(){
    document.getElementById('monto').style.display = 'none'
}
ocultar();


function mostrarDeposito(){
    document.getElementById('monto'). style.display = 'block';
    
        
}*/

function mostrarRetiro(){
    document.getElementById('monto'). style.display = 'block';
    
        
}


function depositar(){
    
    let sal = localStorage.getItem("saldo");    
    let valorlocal = sal    
    let montonuevo = document.getElementById('monto')
    console.log(parseInt(montonuevo.value));
    console.log(parseInt(valorlocal));
    let sumavalores = parseInt(montonuevo.value) + parseInt(valorlocal)
        if(sumavalores > 990 ){
            document.getElementById('montofinal').innerHTML = 'Lo lamento joven no puede tener mas de $990 pesitos en su cuenta'
        }else if(montonuevo.value = null || montonuevo.value == 0){
            document.getElementById('montofinal').innerHTML = ('Su nuevo monto es de: ') + valorlocal + '.00' + ' = ' + '$ ' + sumavalores + '.00 pesitos joven';
        }else{
            document.getElementById('montofinal').innerHTML = ('Su nuevo monto es de: ') + montonuevo.value + '.00' + ' + ' + valorlocal + '.00' + ' = ' + '$ ' + sumavalores + '.00 pesitos joven';
        }
   
        localStorage.setItem("saldonuevo", sumavalores)
        let nuevasal = localStorage.getItem("saldonuevo");
        document.getElementById('sesiondiv').innerHTML = nuevasal + ('.00 Pesitos Joven');
}

function retirar(){
    let sal = localStorage.getItem("saldo");    
    let valorlocalretiro = sal    
    let montonuevoretiro = document.getElementById('monto')
    console.log(parseInt(montonuevoretiro.value));
    console.log(parseInt(valorlocalretiro));
    let restavalores = valorlocalretiro - montonuevoretiro.value
    console.log(restavalores);
        if(restavalores < 10 ){
            document.getElementById('montofinal').innerHTML = 'Lo lamento joven no puede tener meno de $10 pesitos en su cuenta'
        }else{
            document.getElementById('montofinal').innerHTML = ('Su nuevo monto es de: ') + montonuevoretiro.value + '.00' + ' - ' + valorlocalretiro + '.00' + ' = ' + '$ ' + restavalores + '.00 pesitos joven';
            
            
        }
   
        localStorage.setItem("saldonuevoretiro", restavalores)
        let nuevasalretiro = localStorage.getItem("saldonuevoretiro");
        document.getElementById('sesiondiv').innerHTML = nuevasalretiro + ('.00 Pesitos Joven');
}

function mostrarinicio(){
    window.location.href = 'index.html'
}



