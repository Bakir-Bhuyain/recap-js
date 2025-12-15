// Basic not 
console.log(!true);
console.log(!false);

//double not 
console.log(!!false);

//real life example
//Mone koro tumi check korcho ekjon user Logged In kina.
//Jodi se Logged In NA thake (!isLoggedIn), tahole tumi take
//"Login Page" e pathabe.
const isFinished = false;
if (!isFinished){
      console.log('please kaj ta sesh koro')
}else{
      console.log('good job');
}
const isLogged = false;
const done = (!isLogged) ? "kaj ta sesh koro" : "good job";
console.log(done)

//example 2 
const isWifiConnected = false ;
if (!isWifiConnected){
      console.log('using mobile data');
}else {
      console.log('Download Started');
}