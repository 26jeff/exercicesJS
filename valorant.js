//Exercice Valorant

function nbRole(personnage){
    if (personnage[1] != 0){
        return 0
    }
    else{
        return 1
    }
}

function supElement(array, item){
    let index = array.indexOf(item);
    if (index !== -1) {
    array.splice(index, 1);
    }
}

function scenario(){
    let personnageActuel = []
    let personnageActuel2 = []
    let nbManche = 1
    let scoreA = 0
    let scoreD = 0
    console.log("La partie commence!")
    while(scoreA < 13 && scoreD < 13 ){
        let persos = ["Omen", "Fade", "Phoenix", "Chamber", "Jett","Omen", "Fade", "Phoenix", "Chamber", "Jett"]
        let equipeAttaque =["Omen", "Fade", "Phoenix", "Chamber", "Jett"]
        let equipeDefense =["Omen", "Fade", "Phoenix", "Chamber", "Jett"]
        console.log("Manche "+nbManche+": attaquants "+scoreA+"-"+scoreD+" défenseurs") 
        personnageActuel.push(persos[Math.floor(Math.random() * persos.length)], Math.floor(Math.random() * 2))
        personnageActuel2.push(persos[Math.floor(Math.random() * persos.length)], nbRole(personnageActuel))
        console.log(personnageActuel[0]+" a tué "+personnageActuel2[0])
        supElement(persos, personnageActuel2[0])
        if(personnageActuel2[1] == 0){
            supElement(equipeDefense, personnageActuel2[0])
        }
        else{
            supElement(equipeAttaque, personnageActuel2[0])
        }
        if((personnageActuel[1] != 0 && Math.floor(Math.random() * 101) < 60) || (personnageActuel[1] == 0 && Math.floor(Math.random() * 101) < 40)){
            console.log("Le spike est amorcé. Le jeu tourne en la faveur des attaquants.")
            personnageActuel.splice(0, 2)
            personnageActuel2.splice(0, 2)
            while(equipeAttaque.length > 0 || equipeDefense.length > 0){
                personnageActuel.push(persos[Math.floor(Math.random() * persos.length)], Math.floor(Math.random() * 2))
                if (personnageActuel[1] != 0 && equipeAttaque.indexOf(personnageActuel[0]) != -1){
                    personnageActuel2.push(equipeDefense[Math.floor(Math.random() * persos.length)], 0)
                    if (Math.floor(Math.random() * 101) < 70){
                        console.log(personnageActuel[0]+" a tué "+personnageActuel2[0])
                        supElement(persos, personnageActuel2[0])
                        if(personnageActuel2[1] == 0){
                            supElement(equipeDefense, personnageActuel2[0])
                            personnageActuel.splice(0, 2)
                            personnageActuel2.splice(0, 2)
                        }
                        else{
                            supElement(equipeAttaque, personnageActuel2[0])
                            personnageActuel.splice(0, 2)
                            personnageActuel2.splice(0, 2)
                        }
                    }
                    else{
                        console.log(personnageActuel2[0]+" a tué "+personnageActuel[0])
                        supElement(persos, personnageActuel2[0])
                        if(personnageActuel[1] == 0){
                            supElement(equipeDefense, personnageActuel[0])
                            personnageActuel.splice(0, 2)
                            personnageActuel2.splice(0, 2)
                        }
                        else{
                            supElement(equipeAttaque, personnageActuel[0])
                            personnageActuel.splice(0, 2)
                            personnageActuel2.splice(0, 2)
                        }
                    }
                }
                else{
                    personnageActuel2.push(equipeAttaque[Math.floor(Math.random() * persos.length)], 1)
                    if (Math.floor(Math.random() * 101) < 70){
                        console.log(personnageActuel[0]+" a tué "+personnageActuel2[0])
                        supElement(persos, personnageActuel2[0])
                        if(personnageActuel2[1] == 0){
                            supElement(equipeDefense, personnageActuel2[0])
                            personnageActuel.splice(0, 2)
                            personnageActuel2.splice(0, 2)
                        }
                        else{
                            supElement(equipeAttaque, personnageActuel2[0])
                            personnageActuel.splice(0, 2)
                            personnageActuel2.splice(0, 2)
                        }
                    }
                    else{
                        console.log(personnageActuel2[0]+" a tué "+personnageActuel[0])
                        supElement(persos, personnageActuel2[0])
                        if(personnageActuel[1] == 0){
                            supElement(equipeDefense, personnageActuel[0])
                            personnageActuel.splice(0, 2)
                            personnageActuel2.splice(0, 2)
                        }
                        else{
                            supElement(equipeAttaque, personnageActuel[0])
                            personnageActuel.splice(0, 2)
                            personnageActuel2.splice(0, 2)
                        }
                    }  
                }
                if (equipeAttaque.length == 0){
                    console.log("La manche est gagné par les Défenseurs")
                    nbManche += 1
                    scoreD += 1
                    break
                }
                if (equipeDefense.length == 0){
                    console.log("La manche est gagné par les Attaquants")
                    nbManche += 1
                    scoreA += 1
                    break
                }
            }
        }
        if((personnageActuel[1] == 0 && Math.floor(Math.random() * 101) > 60) || (personnageActuel[1] != 0 && Math.floor(Math.random() * 101) > 40)){
            personnageActuel.splice(0, 2)
            while(equipeAttaque.length < 0 && equipeDefense.length < 0){
                if (Math.floor(Math.random() * 2) == 0){
                    console.log(personnageActuel[0]+" a tué "+personnageActuel2[0])
                    supElement(persos, personnageActuel2[0])
                    if(personnageActuel2[1] == 0){
                        supElement(equipeDefense, personnageActuel2[0])
                        personnageActuel.splice(0, 2)
                        personnageActuel2.splice(0, 2)
                    }
                    else{
                        supElement(equipeAttaque, personnageActuel2[0])
                        personnageActuel.splice(0, 2)
                        personnageActuel2.splice(0, 2)
                    }
                }
                else{
                    console.log(personnageActuel2[0]+" a tué "+personnageActuel[0])
                    supElement(persos, personnageActuel2[0])
                    if(personnageActuel[1] == 0){
                        supElement(equipeDefense, personnageActuel[0])
                        personnageActuel.splice(0, 2)
                        personnageActuel2.splice(0, 2)
                    }
                    else{
                        supElement(equipeAttaque, personnageActuel[0])
                        personnageActuel.splice(0, 2)
                        personnageActuel2.splice(0, 2)
                    }
                }
                if (equipeAttaque.length == 0){
                    console.log("La manche est gagné par les Défenseurs")
                    nbManche += 1
                    scoreD += 1
                    break
                }
                if (equipeDefense.length == 0){
                    console.log("La manche est gagné par les Attaquants")
                    nbManche += 1
                    scoreA += 1
                    break
                }
            }
        }
    }
    if (scoreA == 13){
        console.log("Manche "+nbManche+": Les attaquants ont gagnés "+scoreA+"-"+scoreD+" face aux défenseurs")
    }
    if (scoreD == 13){
        console.log("Manche "+nbManche+": Les défenseurs ont gagnés "+scoreD+"-"+scoreA+" face aux attaquants")
    }
}   

scenario()