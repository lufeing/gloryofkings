interface SoldierLineInterface {
    bloodVolume: number;    //血量

}

//兵线
class SoldierLine implements SoldierLineInterface {
    bloodVolume: number;
    constructor({ bloodVolume }: { bloodVolume: number }) {
        this.bloodVolume = bloodVolume
    }

}

//步兵
class Infantry extends SoldierLine {
    constructor({ bloodVolume }: { bloodVolume: number }) {
        super({ bloodVolume })
    }

}

//炮兵
// class ArtilleryCar extends SoldierLine {

// }

//超级兵
// class SuperSoldier extends SoldierLine {

// }

export { Infantry }