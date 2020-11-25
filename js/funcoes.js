
var empresa="Gama Academy";
var curso="JavaScript"
alert("Sejam bem vindos "+empresa+" hoje iremos inicar o curso de "+curso);

function mensagem(){
    alert("Curioso");
}
function validar(){
    var nome=formulario.nome.value;
    var email=formulario.email.value;
    var senha=formulario.senha.value;

    if(nome==""){
        alert("Preencha o campo obrigatorio nome");
        formulario.nome.focus();
        return false;
    }
}