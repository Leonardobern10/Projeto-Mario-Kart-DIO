class Player {
    constructor(nome, velocidade, manobrabilidade, poder, pontos) {
        this.nome = nome;
        this.velocidade = velocidade;
        this.manobrabilidade = manobrabilidade;
        this.poder = poder;
        this.pontos = pontos;
    }

    getNome() {
        return this.nome;
    }
}

const MARIO = new Player("Mario", 4, 3, 3, 0);
const PEACH = new Player("Peach", 3, 4, 2, 0);
const YOSHI = new Player("Yoshi", 2, 4, 3, 0);
const BOWSER = new Player("Bowser", 5, 2, 5, 0);
const LUIGUI = new Player("Luigui", 3, 4, 4, 0);
const DONKEY_KONG = new Player("Donkey Kong", 2, 2, 5, 0);

const players = [MARIO, PEACH, YOSHI, BOWSER, LUIGUI, DONKEY_KONG];

module.exports = players;
