const username = document.getElementById('usuario')
const password = document.getElementById('password')
const button = document.getElementById('boton')


const cuentas = [
    {nombre: "marcelo", password:"123", saldo:300},
    {nombre: "jonas", password:"456", saldo:400},
    {nombre: "mclovin", password:"789", saldo:600}
]

button.addEventListener('click', (e) =>{
    e.preventDefault()
    for(i = 0; i < cuentas.length; i++){
        if(username.value == cuentas[i].nombre && password.value == cuentas[i].password){
            window.location.href = 'cajero.html'
            guardarDatos();
            
            
        }else{
            let incorrecto = 'usuario o contraseña incorrectos joven' 
            document.getElementById('inner').innerHTML = incorrecto
        }    
        
             
    }
    
})













