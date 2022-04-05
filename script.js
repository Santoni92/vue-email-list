console.log('JS OK!');

const app = new Vue({
    el:'#app',
    data:{
        mails: []
        
    },
    mounted(){
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(({status,data}) => {
                //console.log(data);
                if(status == 200 && data.success){
                    this.mails.push(data.response);
                }
            })
        }
    }
})
           

 /*effettuo una richiesta AJAX in javascript (in particolare ricorro alla libreria axios) ad un URL del 
 server di boolean il quale ritorna un dato in formato JSON . Una volta ricevuto il dato ne faccio il parsing 
 tramite il metodo parse() in modo da ottenere un oggetto javascript da poter manipolare.
 'response' è solo un alias che rappresenta l'oggetto (la stringa) in formato JSON */