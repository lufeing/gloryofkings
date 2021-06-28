
interface EquipmentInterface {
    price: number;    //价格

}

//装备
class Equipment implements EquipmentInterface {
    price: number;
    constructor({ price }: { price: number }) {
        this.price = price
    }

}

//攻击装
class AttackEquipment extends Equipment {
    constructor({ price }: { price: number }) {
        super({ price })
    }

}

//法术
class SpellEquipment extends Equipment {
    constructor({ price }: { price: number }) {
        super({ price })
    }

}

//防御
class DefenseEquipment extends Equipment {
    constructor({ price }: { price: number }) {
        super({ price })
    }

}

//移动
class MobileEquipment extends Equipment {
    constructor({ price }: { price: number }) {
        super({ price })
    }

}

//打野
class FieldEquipment extends Equipment {
    constructor({ price }: { price: number }) {
        super({ price })
    }

}

//游走
class WanderingEquipment extends Equipment {
    constructor({ price }: { price: number }) {
        super({ price })
    }

}