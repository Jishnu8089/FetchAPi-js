//API (APPLICATION PROGRAMMING INTERFACE)

// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then((res)=>res.json())
// .then((user)=>{
//     console.log("users :" , user.name);
// })
// .catch((err)=>{
//     console.log('error :',err);
// })
//EXCEPTION HANDLING WITH TRY/CATCH/finally
// let num =10;
// try{

//     let result =num.toString()
//     console.log(result);
//     console.log(typeof result);

// }catch(err){
//     console.log('error :',err);
// }finally{
//     console.log('complited');
// }
//async/await.... this is a cleaner way to write promise-based codes

// async function myfunction(){
//     try{
//         const res =  await fetch('https://jsonplaceholder.typicode.com/users/1')
//         const data = await res.json()
//         console.log(data)
//     }catch(err){
//         console.log('error :',err)
//     }

// }
// myfunction()
/// arrow function
// let myfunction= async()=>{
//     try{
//         const res =  await fetch('https://jsonplaceholder.typicode.com/users/1')
//         const data = await res.json()
//         console.log(data)
//     }catch(err){
//         console.log('error :',err)
//     }

// }
// myfunction()
// function  getuser(){
//     return new Promis  ;
// }
// async function showUserData(){
//     try{
//         const name =await getuser();
    
//     console.log(name);
//     const details =await getUserDetails(name);
//     console.log(details);

//     const finalResult = await getUserAge(details);
//     console.log(finalResult);
//     }catch(error){
//     console.log("Error :",error);
//     }
// }
// showUserData()
// e((resolve)=>{
//         setTimeout(()=> resolve("Jishnu"),1000);
//     });
// }
// function getUserDetails(username){
//     return new Promise((resolve)=>{
//         setTimeout(()=> resolve(`${username} is a devoloper`),1000)
//     });
// }
// function getUserAge(UserDetails){
//     return new Promise((resolve)=>{
//         setTimeout(()=> resolve(`${UserDetails},age 25`),1000)
//     ;
// }
  



