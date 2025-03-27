let email="freecodecamp@example.com"             
function maskEmail(email){
  let ind = email.indexOf("@");
  let username = email.slice(0, ind);
  let domain = email.slice(ind);

  let count = email.length - domain.length -2;
  return email[0]+ "*".repeat(count) + email.slice(1+count) ;
}
console.log(maskEmail(email));