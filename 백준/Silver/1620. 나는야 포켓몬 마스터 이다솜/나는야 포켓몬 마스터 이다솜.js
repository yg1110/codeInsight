const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const pokemons = {};
const questions = input.slice(N, N + M);
let result = '';
for(let i=1; i<=N; i++) {
    const pokemon = input[i - 1];
    pokemons[i] = pokemon;
    pokemons[pokemon] = i;
}
for(let i=0; i<M; i++) {
    const key = input[N + i];
    const pokemon = pokemons[key];
    result += pokemon + '\n';
}
console.log(result);