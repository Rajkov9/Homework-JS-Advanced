function Person(id, firstName, lastName, age){
    this.id = id;
    this.firstName = !firstName ? "Unnamed" : firstName;
    this.lastName = !lastName ? "Unnamed" : lastName;
    this.age = age;
    this.getFullName = function(){
        return `${firstName} ${lastName}`;
    }
}

function Animal(name, age){
    this.name = name ? "Unnamed" : name;
    this.age = age;
    this.eat =function(){
     console.log(`${name} is eating`);
    };
    this.sleep = function(){
        console.log (`${name} is sleeping`);
    }
}

function Cat(name, age, color, ownerId){
    Object.setPrototypeOf(this, new Animal(name, age));
    this.color = color;
    this.ownerId = ownerId;
    this.meow = function(){
        console.log(`The cat ${this.name} says Meow`);
    }
}

let people =[
    new Person(1, "John", "Smith", 25),
    new Person(2, "Farah", "Amani", 27),
    new Person(3, "Patrick", "Stevens", 35),
    new Person (4, "Rebecca", "Winters", 24),
    new Person(5, "Emily", "Magnussen", 30)
]

let cat = new Cat("Garfield", 4, "brown", 1)
console.log(cat);

let cat2 = new Cat("Tom", 5, "gray", 5)
console.log(cat2);

function PersianCat(eyeColor, name, age, color, ownerId){
    Object.setPrototypeOf(this, new Cat(name, age, color, ownerId));
    this.eyeColor = eyeColor;
    this.funDescription = function(){
        console.log(`The cat ${this.name} has a full fur!`)
    }
}

function RagDollCat(weight, isFriendly, name, age, color, ownerId){
    Object.setPrototypeOf(this, new Cat(name, age, color, ownerId));
    this.weight = weight;
    this.isFriendly = isFriendly;
    this.printPersonality = function(){
        if(isFriendly === true){
            console.log(`${this.name} is friendly!`);
        } else{
            console.log(`${this.name} is not friendly!`);
        }
    }
}