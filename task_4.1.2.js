class Character{
    constructor(name , type  , attack  , defense){
        this.name = name ;
        this.type = type ;
        this.health = 100 ;
        this.attack = attack ;
        this.level = 1 ;
        this.defense = defense ;
        if (this.name.length > 10 || this.name.length < 2) {
            throw new Error("Character's name length must be between 2 and 10");
          }
    }
    levelUp(){
        if(this.health === 0){
            throw new Error("You cannot increase the level of the deceased"); 
        }else{
        this.level++
        this.attack += this.attack * 0.2
        this.defense += this.defense * 0.2
        this.health = 100
        }
    }
    damage(points){
       let  damagingHealth = points * (1 - this.defense/100)
        if(this.health>= damagingHealth) this.health -= damagingHealth ;
        if(this.health > 0 && this.health< damagingHealth) this.health = 0 ;
    }
}

class Bowman extends Character{
    constructor(name){
        super(name , "Bowman" , 25 , 25)
    }
}

class Swordsman extends Character{
    constructor(name){
        super(name , "Swordsman" , 40 , 10)
    }
}

class Magician extends Character{
    constructor(name){
        super(name , "Magician" , 10 , 40)
    }
}

class Undead extends Character{
    constructor(name){
        super(name , "Undead" , 25 , 25)
    }
}

class Zombie extends Character{
    constructor(name){
        super(name , "Zombie" , 40 , 10)
       
    }
}

class Daemon extends Character{
    constructor(name){
        super(name , "Daemon" , 10 , 40)
    }
}

let a = new Zombie("zozo")
a.damage(40)
console.log(a)
