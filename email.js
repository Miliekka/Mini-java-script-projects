//Маскирует адрес электронной почты, сохраняя первый символ имени пользователя,
//последний символ перед @ и домен без изменений, заменяя остальную часть имени пользователя звездочками ( * ).
let email="example@mail.com"          
function maskEmail(email){
  let ind = email.indexOf("@");
  let username = email.slice(0, ind);
  let domain = email.slice(ind);

  let count = email.length - domain.length -2;
  return email[0]+ "*".repeat(count) + email.slice(1+count) ;
}
console.log(maskEmail(email));
