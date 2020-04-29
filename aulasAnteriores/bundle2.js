"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//A
var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Flavio',
  idade: 33,
  empresa: 'Flavio Henrique'
}, {
  nome: 'Fabio',
  idade: 35,
  empresa: 'seguranca'
}];
var idades = usuarios.map(function (usuario) {
  return usuario.idade;
});
console.log(idades); //B

var usuariosEmpregados = usuarios.filter(function (usuario) {
  if (usuario.empresa === 'Rocketseat' && usuario.idade > 18) {
    return usuario;
  }
});
console.log(usuariosEmpregados); //C

var usuarioEmpresa = usuarios.find(function (usuario) {
  return usuario.empresa === 'Google';
});
console.log(usuarioEmpresa); //D

var idadesMulti = usuarios.map(function (usuario) {
  usuario.idade *= 2;
  return usuario;
});
console.log(idadesMulti);
idadesMulti = idadesMulti.filter(function (usuario) {
  console.log(usuario.idade);

  if (usuario.idade <= 50) {
    return usuario;
  }
});
console.log(idadesMulti); //Exercicio 3
//A

var array3 = [1, 2, 3, 4, 5];
console.log(array3.map(function (elem) {
  return elem + 10;
})); //B

var cliente = {
  nome: 'flavio',
  idade: 33
};

var mostraIdade = function mostraIdade(cliente) {
  return console.log(cliente.idade);
};

mostraIdade(cliente); //C

var nomeC = 'flavio';
var idadeC = 33;

var retorno = function retorno() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Flavio Henrique';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(retorno(nomeC, idadeC));
console.log(retorno(undefined, idadeC));

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

console.log(promise()); //exercicio 4
//A

var empresa = {
  nome: 'RockeSeat',
  endereco: {
    cidade: 'Natal',
    estado: 'RN'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado); //B

var mostraUsuario = function mostraUsuario() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  var _params$ = params[0],
      nome = _params$.nome,
      idade = _params$.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
};

console.log(mostraUsuario({
  nome: 'flavio',
  idade: 33
})); //exercicio 5
//A

var arr03 = [1, 2, 3, 4, 5, 6];
var x = arr03[0],
    rest = arr03.slice(1);
console.log(x);
console.log(rest);

var somaParams = function somaParams() {
  for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    params[_key2] = arguments[_key2];
  }

  params.reduce(total, function (next) {
    return total += next;
  });
};

console.log(soma(1, 2, 3, 4, 5)); //B

var usarioExerc5 = {
  nome: 'Flavio',
  idade: 33,
  endereco: {
    cidade: 'Natal',
    uf: 'RN',
    pais: 'Brasil'
  }
};

var usuarioNew = _objectSpread({}, usarioExerc5, {
  nome: 'Gabriel'
});

console.log(usuarioNew);

var usuarioNew2 = _objectSpread({}, usarioExerc5, {
  endereco: {
    cidade: 'Lontras'
  }
});

console.log(usuarioNew2); //Exercicio 6

var usuarioNew3 = 'Diego';
var idadeNew3 = 33;
console.log("O usu\xE1rio ".concat(usuarioNew3, " possui ").concat(idadeNew3, " anos.")); //exercicio7

var nomeNew = 'Flavio';
var idade = 33;
var novoUsuaio = {
  nomeNew: nomeNew,
  idade: idade,
  cidade: 'Natal'
};
console.log(novoUsuaio);
