interface DefenseTowerInterface {
    bloodVolume: number;    //血量
    attackRange: number;    //范围
    attackInterval: number; //间隔(毫秒)
    aggressivity: number;   //伤害
    ownSideInterfereSkill?: boolean;  //己方干扰技能
    enemyInterfereSkill?: boolean;     //敌方干扰技能
    enemy?: boolean;         //敌人
    defenseTowerFlags: number;         //防御塔标识
    run(): void             //初始化运行
    attackTimer(): void;   //攻击计时器
    enemyInterfereHandle(): void; //敌方干扰处理事件
    endOfInterfere(): void;  //干扰结束
    bloodVolumeIs0Handle(): void;   //血量为0事件
}

//防御塔
class DefenseTower implements DefenseTowerInterface {
    attackRange: number;
    attackInterval: number;
    aggressivity: number;
    bloodVolume: number;
    enemyInterfereSkill: boolean;
    enemy: boolean;
    defenseTowerFlags: number;

    constructor({ bloodVolume, attackRange, attackInterval, aggressivity, enemyInterfereSkill, enemy, defenseTowerFlags }
        : {
            bloodVolume: number, attackRange: number, attackInterval: number, aggressivity: number,
            enemyInterfereSkill?: boolean | any, enemy?: boolean | any, defenseTowerFlags: number | any
        }) {
        this.bloodVolume = bloodVolume
        this.attackRange = attackRange
        this.attackInterval = attackInterval
        this.aggressivity = aggressivity
        this.enemyInterfereSkill = enemyInterfereSkill
        this.enemy = enemy
        this.defenseTowerFlags = defenseTowerFlags
        this.run()

    }

    run() {
        this.enemyInterfereHandle()
    }

    attackTimer() {
        return setInterval(() => {
            console.log('防御塔发动攻击')
        }, this.attackInterval)
    }

    enemyInterfereHandle() {
        if (!this.enemyInterfereSkill && this.enemy) {
            this.attackTimer()
        } else if (this.enemyInterfereSkill) {
            clearInterval(this.attackTimer())
            console.log('防御塔停止攻击')
            this.endOfInterfere()

        }
    }

    endOfInterfere() {
        return setTimeout(() => {
            this.enemyInterfereSkill = false
            console.log(this.enemyInterfereSkill, '干扰结束')
            this.enemyInterfereHandle()

        }, 7000)
    }

    bloodVolumeIs0Handle() {
        if (this.bloodVolume <= 0 && this.defenseTowerFlags === 1) {
            console.log('一塔破')
        } else if (this.bloodVolume <= 0 && this.defenseTowerFlags === 2) {
            console.log('二塔破，减速附近的敌人，并生成视野之灵')
        } else if (this.bloodVolume <= 0 && this.defenseTowerFlags === 3) {
            console.log('高地破，敌方派出超级兵')
        } else if (this.bloodVolume <= 0 && this.defenseTowerFlags === 4) {
            console.log('水晶破，游戏结束')
        }
    }

}

//一塔
class OneTower extends DefenseTower {
    constructor({ bloodVolume, attackRange, attackInterval, aggressivity, enemyInterfereSkill, enemy, defenseTowerFlags = 1 }:
        {
            bloodVolume: number, attackRange: number, attackInterval: number, aggressivity: number,
            enemyInterfereSkill?: boolean, enemy?: boolean, defenseTowerFlags?: number
        }) {
        super({ bloodVolume, attackRange, attackInterval, aggressivity, enemyInterfereSkill, enemy, defenseTowerFlags });
    }
}

//二塔
class TwoTower extends DefenseTower {
    constructor({ bloodVolume, attackRange, attackInterval, aggressivity, enemyInterfereSkill, enemy, defenseTowerFlags = 2 }:
        {
            bloodVolume: number, attackRange: number, attackInterval: number, aggressivity: number,
            enemyInterfereSkill?: boolean, enemy?: boolean, defenseTowerFlags?: number
        }) {
        super({ bloodVolume, attackRange, attackInterval, aggressivity, enemyInterfereSkill, enemy, defenseTowerFlags });
    }
}

//高地
class Highland extends DefenseTower {
    constructor({ bloodVolume, attackRange, attackInterval, aggressivity, enemyInterfereSkill, enemy, defenseTowerFlags = 3 }:
        {
            bloodVolume: number, attackRange: number, attackInterval: number, aggressivity: number,
            enemyInterfereSkill?: boolean, enemy?: boolean, defenseTowerFlags?: number
        }) {
        super({ bloodVolume, attackRange, attackInterval, aggressivity, enemyInterfereSkill, enemy, defenseTowerFlags });
    }
}

//水晶
class Crystal extends DefenseTower {
    constructor({ bloodVolume, attackRange, attackInterval, aggressivity, enemyInterfereSkill, enemy, defenseTowerFlags = 4 }:
        {
            bloodVolume: number, attackRange: number, attackInterval: number, aggressivity: number,
            enemyInterfereSkill?: boolean, enemy?: boolean, defenseTowerFlags?: number
        }) {
        super({ bloodVolume, attackRange, attackInterval, aggressivity, enemyInterfereSkill, enemy, defenseTowerFlags });
    }
}

export { OneTower, TwoTower, Highland, Crystal }