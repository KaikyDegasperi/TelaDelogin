let usuario= document.getElementById("campo")
let password= document.getElementById("senha")
let btn=document.querySelector("a")
//funcao para verificar se no envio o campo está limpo

btn.addEventListener('click',()=>{
    if(usuario.value.length==0){
        alert('coloque seu email')
    }else{
        return true
    }
})
//verifica os elementos do dominio e usuario
function validar(field){
    
   
    let user= field.value.substring(0,field.value.indexOf('@'))
    let domain= field.value.substring(field.value.indexOf('@'),field.value.length)
    if(
        ((user.search('@')==-1)&&(domain.search('@')==0))&&
        ((user.search(' ')==-1)&&(domain.search(' ')==-1))&&
        ((user.search('.')>=-1)&&(domain.search('.')>=0))
        )
        {
        
        document.querySelector('.txtEmail').innerHTML=''
        let p=document.createElement('p');
        let txt=document.createTextNode('Email valido');
        p.appendChild(txt)
        document.querySelector('.txtEmail').appendChild(p);
    } else {
        
       document.querySelector('.txtEmail').innerHTML=''
       let p=document.createElement('p');
       let txt=document.createTextNode('Email invalido')
       p.appendChild(txt)
       document.querySelector('.txtEmail').appendChild(p);
       
    }
}

usuario.addEventListener('blur',()=>{
    validar(usuario);
})

password.addEventListener('blur',(senha)=>{
    senha= password.value
    if(senha.length){
        console.log('ok')
    }else{
        console.log('A senha precisa ter no minimo 8 digitos')
    }
})
