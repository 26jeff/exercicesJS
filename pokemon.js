//Exercice 1

class Pokemon{
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        return this.luck > (Math.random()*100)
    }

    attackPokemon(adversaire) {
        return this.attack - adversaire.defense
    }
}

function fight(pokemon1, pokemon2){
    let degat = 0
    console.log("Le combat commence entre " + pokemon1.name + " et " + pokemon2.name)
    while (pokemon1.hp > 0 || pokemon2.hp > 0){
        console.log(pokemon1.name + " attaque " + pokemon2.name + "!")
        if(pokemon1.isLucky()){
            degat = pokemon1.attackPokemon(pokemon2)
            pokemon2.hp -= degat
            if(pokemon2.hp > 0){
                console.log(pokemon1.name + " inflige "+ degat +" à "+ pokemon2.name + " qui lui n'es plus qu'à " + pokemon2.hp + " hp")
            }
            else{
                console.log("Le coup a été fatal. "+ pokemon2.name +" est K.O! " + pokemon1.name + " ressort victorieux!")
                break
            }
        }
        else{
            console.log("L'attaque a échoué! C'est au tour de l'adversaire.")
        }
        console.log(pokemon2.name + " attaque " + pokemon1.name + "!")
        if(pokemon2.isLucky()){
            degat = pokemon2.attackPokemon(pokemon1)
            pokemon1.hp -= degat
            if(pokemon1.hp > 0){
                console.log(pokemon2.name + " inflige "+ degat +" à "+ pokemon1.name + " qui lui n'es plus qu'à " + pokemon1.hp + " hp")
            }
            else{
                console.log("Le coup a été fatal. "+ pokemon1.name +" est K.O! " + pokemon2.name + " ressort victorieux!")
                break
            }
        }
        else{
            console.log("L'attaque a échoué! C'est au tour de l'adversaire.")
        }
    }
}

let Groudon = new Pokemon("Groudon", 46, 63, 90, 82)
let Celebi = new Pokemon("Celebi", 102, 26, 102, 58)

fight(Groudon, Celebi)