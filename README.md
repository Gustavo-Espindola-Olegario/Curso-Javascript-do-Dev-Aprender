# Curso-Javascript-do-Dev-Aprender
JavasCript -->
- casesensitive = maiúsculo e minúscolo tem diferença (ex: Nome != nome);
- camelCase = nome de variaveis, functions e etc, quando tem nome duplo, a primeira letra do segundo nome recebe maiúsculo (ex: nomeCompleto);
- tipos primitivos(tipos por valores): 
let nome = 'Rafael'; --> string literal.
let idade = 25; --> number literal.
let estaAprovado = true; --> boolean.
let sobrenome; ou let sobrenome = undefined;(raro) --> Undefined.
let corSelecionado = null; --> null a gente usa pra redefinir um valor.
- Algumas variáveis var, let e const, a diferença entre elas são que: Variáveis de var podem ser atualizadas e declaradas novamente dentro de seu escopo. As variáveis de let podem ser atualizadas, mas não podem ser declaradas novamente. As variáveis de const não podem ser atualizadas nem declaradas novamente.
- JavaScripy tem tipagem dinâmica, ou seja, voce pode criar uma variavel e depois colocar um tipo nela ou mudar o tipo da variável se quiser, pra ver o tipo da variável, usamos o typeof no console (ex: typeof nome):
let nome = 'Rafael'; --> string
let idade = 25; --> number
let estaAprovado = true; --> boolean
let sobrenome; --> undefined
let corSelecionado = null; --> object
- tipos por referência:
