import queryString from 'query-string'

let rootUrl = 'https://www.fastmock.site/mock/11e42011dcf2b906cf9ecfc573194a88/api';
let myFetch = {
    post(url,body){
        return fetch(rootUrl+url,{
            method:'POST',
            headers:{
                "Accept":'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        })
            .then(res=>res.json())     
    }
}
export {myFetch};