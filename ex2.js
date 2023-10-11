let Personnage = {
    name : 'Jhon',
    mentalHealth : 10
}

let Musique = ["Anissa - Wejdene",
"H - H. La Drogue",
"Le Crime Paie - Lunatic",
"Partis de Rien - Scred Connexion",
"Flashback - Fave feat Gazo"]

let Trajet = {
    nbFeuxRouges : 30,
    chgmntTaxis : 0
}

function musiqueAleatoire(Musique){
    return Musique[Math.floor(Math.random() * Musique.length)]
}

function scenario(Personnage, Musique, Trajet){
    console.log( Personnage.name + " a passé une très mauvaise journée, fatigué, il tente de rentrer chez lui.")
    console.log("Il prend un 1er Taxi.")
    let musiqueActuelle = musiqueAleatoire(Musique)
    console.log("Dans le taxi, une première musique se lance.")
    while(Trajet.nbFeuxRouges > 0){
        console.log("La morceau joué est " + musiqueActuelle)
        if (musiqueActuelle == "Anissa - Wejdene"){
            Trajet.chgmntTaxis +=1
            Personnage.mentalHealth -=1
            console.log(Personnage.name+" n'en peu plus .C'est le morceau qu'il déteste le plus.")
            console.log("Sa tête commence a gonflée! Un énorme mal de crâne lui prend.")
            if(Personnage.mentalHealth != 0){
                console.log("Il s'empresse de sortir du Taxi")
                console.log("Après s'être calmé. Il rentre dans un nouveau Taxi.")
            }
            else{
                console.log('"non..NOn..NON! TOUT MAIS PAS ENCORE WEJDENE!"')
                console.log("Mais malheureusement, cette fois c'est la fois de trop. Sa tête ne s'arrêtera pas de gonflée.")
                console.log("Elle finira par explosée. Son crâne giclant partout sur les sièges.")
                return console.log("Le chaufeur, dépité, passera sa soirée a nettoyer.")   
            }
        }
        else{
            console.log("La musique lui plait. Il est heureux et reste au confort dans le Taxi.")
        }
        Trajet.nbFeuxRouges -= 1
        console.log("Le taxi atteint un feu rouge, plus que "+ Trajet.nbFeuxRouges +" avant l'arrivé à son domicile.")
        console.log("Tout à coup, la musique change.")
        musiqueActuelle = musiqueAleatoire(Musique)
    }
    console.log("Malgrès ce trajet difficile, ses "+ Trajet.chgmntTaxis +" changements de taxis, "+ Personnage.name + " atteint son objectif.")
    console.log("Son arrivée chez lui sonna comme une délivrance.")
}

scenario(Personnage, Musique, Trajet)