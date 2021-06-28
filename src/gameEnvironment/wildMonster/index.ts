interface WildMonsterInterface {
    bloodVolume: number;    //血量

}

//野怪
class WildMonster implements WildMonsterInterface {
    bloodVolume: number;
    constructor({ bloodVolume }: { bloodVolume: number }) {
        this.bloodVolume = bloodVolume
    }

}

//蓝buff
class BlueBuff extends WildMonster {
    constructor({ bloodVolume }: { bloodVolume: number }) {
        super({ bloodVolume })
    }

}

//红buff
class RedBuff extends WildMonster {

}

//野猪
class WildBoar extends WildMonster {

}

//小鸟
class Birds extends WildMonster {

}
