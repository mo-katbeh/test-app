console.log('Before');
// getUser(1, (user)=>{
//     getRepositories(user.gitHubUsername, (repos)=>{
//         getCommits(repos[0], (commits)=>{
//             console.log(commits);
            
//         })
//     })
// })

// getUser(1)
//   .then(user => getRepositories(user.gitHubUsername))
//   .then(repos => getCommits(repos[0]))
//   .then(commits => console.log('Commits', commits))
//   .catch(err=>console.log('Error', err.message));

async function displayCommits(){
    try{
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch(err){
        console.log('Error', err.message);
    }
}
displayCommits();

console.log('After');
// getUser(1, displayRepositories);

function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Reading a user from db');
            resolve({id: id, gitHubUsername: "mohammad"});
        }, 2000);
    })
     
}
function getRepositories(username){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{ 
        console.log('Reading a repo from db');
        reject(new Error('can not reach to repos'));
            }, 2000);
    });    
}

function getCommits(repo){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{ 
        console.log('Calling github');
        resolve(['commit']);
            }, 2000);
    });
}

// function displayRepositories(user){
//     getRepositories(user.gitHubUsername, getCommits);
// }
// function getCommits(repos){
//     getCommits(repo, displayCommits);
// }
// function displayCommits(commits){
//     console.log(commits);
// }


