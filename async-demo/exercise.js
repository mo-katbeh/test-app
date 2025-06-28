const { reject, functions } = require("underscore");

// getCustomer(1, (customer)=>{
//     console.log('Customer:', customer);
//     if(customer.isGold){
//         getTopMovies((movies)=>{
//             console.log('Top Movies:', movies)
//             sendEmail(customer.email, movies, ()=>{
//                 console.log('Email sent...');
//             });
//         });
//     }
// });


async function displayEmail(){
    try{
        const customer = await getCustomer(1);
        console.log('Customer:', customer);
        const movies = await getTopMovies();
        console.log('Top Movies:', movies)
        const email = await sendEmail(customer.email, movies[0]);
        console.log('Email sent...');
    }
    catch(err){
        console.log('Error', err.message)
    }
}

displayEmail();

function getCustomer(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                id:1,
                name:'mohammad',
                isGold: true,
                email: 'email'
            });
        }, 4000);
    })
}
function getTopMovies(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(['movie1', 'movie2'])
        }, 3000)
    })
}
function sendEmail(email, movies){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve()
        }, 2000)
    })
}