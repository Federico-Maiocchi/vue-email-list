// console.log('Hello JS');

const {createApp} = Vue;

createApp ({
    data () {
        return {
            mail:'',
            arrayMail:[]

        }
    },

    methods: {
        

        fetchMail() {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                
                const emailAddress = res.data.response
                this.mail = emailAddress
                // console.log("RISPOSTA SERVER", this.mail);

                this.arrayMail.push(this.mail)
                console.log(this.arrayMail)   
            })
        },

        
        getMail(n) {

            for (let i = 0; i < n; i++) {
                // let currentMail = mail[i];

                // console.log(currentMail);
                this.fetchMail();
                // console.log("FOR", i);
            }
        }
    },

    created() {
        // invoco la funzione axios
        this.getMail(10)
    },

    mounted() {
        // console.log('Hello Vue');
    }

}).mount('#app')

// Axios in Js Vanilla

// axios
//     .get('https://flynn.boolean.careers/exercises/api/random/mail')
//     .then((res) => {

//         // res contiene la risposta totale del server
//         console.log(res);
//         // res.data contiene il Json convertito in oggetto
//         console.log(res.data);
//         // res.data.response contiene la proprietà dell'oggetto del data
//         console.log(res.data.response);
//     })