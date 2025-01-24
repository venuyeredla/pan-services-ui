
 async function Login(userid, pass){
  console.log("Submitting login request");
  var body={ 'username': userid, 'password':pass };
    var httpResponse =await fetch('/api/v1/auth/signin', {
     method: 'post',
     headers: {'Content-Type':'application/json'},
        body:JSON.stringify(body)
     });
     var res=await httpResponse.json()
     return res;
}

const SignUP = (UserInfo)=>{
  return true;
}

// Getproducts from API.
async function getProducts() {
    const response =await fetch("/api/v1/product/getproducts"); // api/v1/product/getproducts
    const products = await response.json();
    return products;
  }

   function getQuotes(){
     let quotes=[];
        quotes.push({h:"Quote -1",q:"I don't want do this job-1"});
        quotes.push({h:"Quote -2",q:"I don't want do this job-2"});
        quotes.push({h:"Quote -3",q:"I don't want do this job-3"});
        return quotes
   }
    

export { 
    Login,
    SignUP,
    getProducts,
    getQuotes

}