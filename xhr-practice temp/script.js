const button = document.querySelector('button')
const Resolve = document.querySelector('#resolve')
const Reject = document.querySelector('#reject')
const img = document.querySelector('img')

//****************simple xml http request***********/

// button.addEventListener('click',()=>{
    
//     const xhr = new XMLHttpRequest()
//     xhr.responseType = "json"

//     xhr.addEventListener('load',()=>{
//         console.log(xhr.response)
//         img.src = xhr.response.message
//     })

//     xhr.open('GET','https://dog.ceo/api/breeds/image/random')
//     xhr.send()

// })

//****************callback hell using xhr***********/


// function makeXHRRequest(method,url,cb){
//     const xhr = new XMLHttpRequest()
//     xhr.responseType = 'json'
//     xhr.addEventListener('load',()=>{
//         console.log(xhr.response)
//         cb(xhr.response)
//     })

//     xhr.open(method,url)
//     xhr.send()
// }

// makeXHRRequest("GET","https://dummyjson.com/users",(usersData)=>{
//     makeXHRRequest('GET',`https://dummyjson.com/users/${usersData.users[0].id}/posts`,(postsData)=>{
//         makeXHRRequest('GET',`https://dummyjson.com/posts/5`,(postData)=>{
//             console.log(postData.views)

//         })
//     })
// })

//****************promise***********/

// const p = new Promise((res,rej)=>{
//     Resolve.addEventListener('click',()=>{
//         res('Promise Resolved')
//     })
//     Reject.addEventListener('click',()=>{
//         rej('Promise Rejected')
//     })
// })
// p.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


//***************************/
