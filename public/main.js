
const errBtn = document.querySelector('#error-button')
const warnBtn = document.querySelector('#warning-button')
const critBtn = document.querySelector('#critical-button')

        function errHandler(e){
            e.preventDefault()
            axios.post('/error')
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
        function warnHandler(e){
            e.preventDefault()
            axios.post('/warning')
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
        function critHandler(e){
            e.preventDefault()
            axios.post('/critical')
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }

        errBtn.addEventListener('click', errHandler)
        warnBtn.addEventListener('click', warnHandler)
        critBtn.addEventListener('click', critHandler)