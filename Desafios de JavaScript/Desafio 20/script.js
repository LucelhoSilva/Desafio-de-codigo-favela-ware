const caractere = 'a';

switch (caractere.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(`${caractere} é uma vogal.`);
        break;
    default:
        console.log(`${caractere} não é uma vogal.`);
}
