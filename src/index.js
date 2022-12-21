function initFetchCep() {
    
    const inputCep = document.getElementById('cep'); // input (manipulando o dom)

    const btnCep = document.getElementById('btnCep') // button (manipulando o dom)
   
    

    btnCep.addEventListener('click', handleClick); // adicionando o evento de click no botão

    // função que vai ser executada quando o botão for clicado
    function handleClick(event) {
        event.preventDefault(); // previne o comportamento padrão do botão

        function buscaCep(cep) {// função que vai buscar o cep

            var cep = inputCep.value; // pegando o valor do input(usa-se o var para poder usar o cep dentro da função. O let não funciona.Por que ? quando se usa o let ele só funciona dentro do escopo da função)
           
            fetch(`https://viacep.com.br/ws/${cep}/json/`) // fetch é uma função que faz requisições http, recebe uma url como parâmetro.
                
            .then(response => response.json()) // then : é uma função que recebe uma função como parâmetro. A função que é passada como parâmetro é executada quando a requisição é finalizada. O response.json() é uma função que transforma o json em um objeto javascript.

                .then(body => { // body é o objeto que foi transformado em json
                    
                        const nomeRua = document.getElementById('rua') // pegando o elemento pelo id rua
                        const nomeBairro = document.getElementById('bairro') // pegando o elemento pelo id bairro
                        const complemento = document.getElementById('complemento') // pegando o elemento pelo id complemento
                        const gia = document.getElementById('gia') // pegando o elemento pelo id gia
                        const ibge = document.getElementById('ibge') // pegando o elemento pelo id ibge 
                        const localidade = document.getElementById('localidade') // pegando o elemento pelo id localidade
                        const uf = document.getElementById('uf') // pegando o elemento pelo id uf

                        //innerText : é uma propriedade que pega o valor do elemento e coloca no elemento. A seguir temos o exemplo de como pegar o valor do atributo logradouro do objeto body e colocar no elemento nomeRua.
                        


                        nomeRua.innerText = body.logradouro; // pegando o valor do atributo logradouro do objeto body e colocando no elemento nomeRua
                        
                        nomeBairro.innerText = body.bairro; // pegando o valor do atributo bairro do objeto body e colocando no elemento nomeBairro
                       
                        complemento.innerText = body.complemento; // pegando o valor do atributo complemento do objeto body e colocando no elemento complemento
                        
                        gia.innerText = body.gia; // pegando o valor do atributo gia do objeto body e colocando no elemento gia
                        
                        ibge.innerText = body.ibge; // pegando o valor do atributo ibge do objeto body e colocando no elemento ibge
                       
                        localidade.innerText = body.localidade; // pegando o valor do atributo localidade do objeto body e colocando no elemento localidade
                        
                        uf.innerText = body.uf; // pegando o valor do atributo uf do objeto body e colocando no elemento uf
                       
                   
                })
        }
        
        
        buscaCep(cep); // chamando a função buscaCep
    }


}

initFetchCep() // chamando a função initFetchCep

