//console.log(process.argv);
// function grabValue(key){
//     const index= process.argv.indexOf(key);
//     return index !== -1?process.argv[index+1] : null;
// }
// const firstName=grabValue("--firstName");
// const lastName=grabValue("--lastName");
// if(!firstName || !lastName){
//     console.log("Enter valid information");
// }else{
//     console.log(`you are ${firstName} ${lastName}`);
// }




// process.stdout.write("hello\n");
// process.stdout.write("world\n");
// process.stdin.on("data", data=>{
//     if(data.toString().trim().toLowerCase()==="exit"){
//         process.exit();
//     }else{
//         console.log(data.toString());
//     }
// });
// process.on("exit",()=>{
//     console.log("the app exited");
// });




/* quetion app */
// const ques = ["What is your name?\n","How old are you?\n"];
// const ans=[];
// process.stdout.write(ques[0]);
// process.stdin.on("data",data=>{
//     ans.push(data.toString().trim());
//     if(ans.length<ques.length){
//         process.stdout.write(ques[ans.length]);
//     }else{
//         process.exit();
//     }
//     process.on("exit",()=>{
//         for(const value of ans){
//             process.stdout.write(value+"\n");
//         }
//     })
// });