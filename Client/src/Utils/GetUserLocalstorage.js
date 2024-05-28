const GetCurrentuser=(key)=>{
    const user=localStorage.getItem(key);
    return user;
}
module.exports={GetCurrentuser};