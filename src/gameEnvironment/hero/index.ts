interface HeroInterface {
    name: string;    //英雄名称

}

//英雄
class Hero implements HeroInterface {
    name: string;
    constructor({ name }: { name: string }) {
        this.name = name
    }

}

//英雄技能
class HeroSkills {


}

//被动技能
class PassiveSkills extends HeroSkills {


}

//技能1
class Skills1 extends HeroSkills {


}

//技能2
class Skills2 extends HeroSkills {


}

//技能3
class Skills3 extends HeroSkills {


}