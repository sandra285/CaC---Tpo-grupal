function validar(){
    if(document.formulario.nombre.value.length == 0){
        alert("Por favor ingrese su nombre")
        document.formulario.nombre.focus()
        return 0
    }

    if(document.formulario.email.value.length == 0){
        alert("Por favor ingrese su email")
        document.formulario.email.focus()
        return 0
    }

    if(document.formulario.telefono.value.length == 0){
        alert("Por favor ingrese su número de teléfono")
        document.formulario.telefono.focus()
        return 0
    }

    if(document.formulario.asunto.value.length == 0){
        alert("Por favor ingrese el asunto")
        document.formulario.asunto.focus()
        return 0
    }

    if(document.formulario.mensaje.value.length == 0){
        alert("Por favor ingrese su mensaje")
        document.formulario.mensaje.focus()
        return 0
    }
    
    alert("Muchas gracias por enviar el formulario")
    document.formulario.submit()
}