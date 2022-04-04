console.log('JS OK!');

const app = new Vue({
    el:'#app',
    data:{
        email: '',
        arrayEmails: []
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
            const result = response.data;
            console.log(result);
            this.email = result.response;

            /*      BONUS
            for(let i = 0; i < 10;i++){
                this.array.push(result.response);
            }
            
            console.log(this.array);
            */
           
        });
    }
});

 /*effettuo una richiesta AJAX in javascript (in particolare ricorro alla libreria axios) ad un URL del 
 server di boolean il quale ritorna un dato in formato JSON . Una volta ricevuto il dato ne faccio il parsing 
 tramite il metodo parse() in modo da ottenere un oggetto javascript da poter manipolare.
 'response' è solo un alias che rappresenta l'oggetto (la stringa) in formato JSON */