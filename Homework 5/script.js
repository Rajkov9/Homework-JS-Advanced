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
    this.name = !name ? "Unnamed" : name;
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
    };
    this.getOwnerDetails = function (people) {
        let catOwnerID = people.filter(person => person.id === this.ownerId).map(person => person.getFullName());
        console.log(catOwnerID.length > 0 ? catOwnerID[0] : "The cat does not have an owner");
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
cat.meow();
cat.sleep();
cat.getOwnerDetails(people);

let cat2 = new Cat("Tom", 5, "gray", 5)
console.log(cat2);
cat2.meow();
cat2.eat();
cat2.getOwnerDetails(people);

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
            console.log(`${this.name} the cat is friendly!`);
        } else{
            console.log(`${this.name} the cat is not friendly!`);
        }
    }
}

let persianCat = new PersianCat("blue", "Duchess", 4, "white and gray", 2);
console.log(persianCat);
persianCat.funDescription();
persianCat.getOwnerDetails(people);

let ragDollCat = new RagDollCat(9, true, "Jasper", 10, "red", 4);
console.log(ragDollCat);
ragDollCat.printPersonality();
ragDollCat.getOwnerDetails(people);