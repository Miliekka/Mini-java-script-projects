/**Программа генерирует пароль из рандомных чисел,букв и символов заданной длины */
function generatePassword(len) {
    let password = ''; 
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    
    for (let i = 0; i < len; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex]; 
    }
    
    return password;
}

let password = generatePassword(15);
console.log("Generated password: "+password); 