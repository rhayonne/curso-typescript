type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return user.username === sentValue.username && user.password === sentValue.password;
};

const bdUser = { username: 'joao', password: '123456' };
const sentUser = { username: 'joao', password: '123456', permissions: '' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);

/* quando se cria um tipo e se usa esse tipo, nao quer dizer que você tenha que usar o tipo da forma que foi criado
como é o caso do sentUser, que usa o tipo User, mas tem uma propriedade a mais.
Basta que o objeto corresponda as caracteristicas demandadas pelo tipo, nesse caso, username e password (em string)

*/
