//Exercice 3

let Tueur = {
    name : "Jason",
    pointDeVie: "100"
}

let Caracteristiques = ["nerd", "sportif", "blonde", "bogoss", "timide"]

let Prenoms = ["Camille", "Noa", "Sacha", "Dominique", "Stephane"]

class Survivant{
    constructor(name, caracteristique, probaSurvie, probaMort, probaDegatMort) {
        this.name = name
        this.caracteristique = caracteristique
        this.probaSurvie = probaSurvie
        this.probaMort = probaMort
        this.probaDegatMort = probaDegatMort
    }
}

function randomProbas(){
    //random 10, si nb > 5 on le prend sinn on prend le reste et on refait le random sur le nb apres plus qu'a convertir sur *0,1
    let nbDepart = Math.floor(Math.random() * 9)
    let Tri = []
    if(nbDepart > 5){
     nb2 = 10 - nbDepart 
     nb3 = Math.floor(Math.random() * nbDepart+1)
     nb4 = nbDepart - nb3
     Tri = [nb2*0.1, nb3*0.1, nb4*0.1]
     Tri.sort(function(a, b) {return a - b;})
     return Tri[0]+","+Tri[1]+","+Tri[2] 
    }
    else{
     nb2 = 10 - nbDepart
     nb3 = Math.floor(Math.random() * nb2+1)
     nb4 = nb2 - nb3
     Tri = [nbDepart*0.1, nb3*0.1, nb4*0.1]
     Tri.sort(function(a, b) {return a - b;})
     return Tri[0]+","+Tri[1]+","+Tri[2] 
    }
}

function creationPersos(){
    let prenomRandom = 0
    let caracteristiqueRandom = 0
    let prenom = ""
    let caracteristique = ""
    let probas = []
    let survivantsList = []
    while (Prenoms.length != 0 && Caracteristiques.length != 0){
        prenomRandom = Math.floor(Math.random() * Prenoms.length)
        prenom = Prenoms[prenomRandom]
        Prenoms.splice(prenomRandom,1)
        caracteristiqueRandom = Math.floor(Math.random() * Caracteristiques.length)
        caracteristique = Caracteristiques[caracteristiqueRandom]
        Caracteristiques.splice(caracteristiqueRandom,1)
        probas.push(randomProbas())
        survivantsList.push(prenom)
        let Survivant = new Survivant(prenom, caracteristique,probas[2],probas[1],probas[0])
    }
}

creationPersos()

console.log(survivants[0]+" "+survivants[1]+" "+survivants[2]+" "+survivants[3]+" "+survivants[4])

function scenario(){
    //init
    //while tout le monde vivant
}