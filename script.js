// TASK 1 ------------Movie Class---------------

class Movie
{
    constructor(title,studio,rating = "PG")
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
       
    }
    set title(t){
        return this._title = t;
    }

    get title(){
        return this._title;
    }

    set studio(s){
        return this._studio = s;
    }

    get studio(){
        return this._studio;
    }

    set rating(r){
       return this._rating = r;
    }

    get rating(){
       return this._rating;
    }
   
}

const film = new Movie("Leo","7S","PG13");
const film1 = new Movie("Master","AAA","R")
const film2 = new Movie("Thalaiva","BBB","PG13");
const film3 = new Movie("Casino Royale","Eon Productions","PG­13");

console.log("------------CLASS MOVIE---------------");

console.log(`${film.title}               ${film.studio}                  ${film.rating}
            
${film1.title}            ${film1.studio}                 ${film1.rating}

${film2.title}          ${film2.studio}                 ${film2.rating}

${film3.title}     ${film3.studio}     ${film3.rating}
    `);

// TASK 2 ---------------Circle Class

console.log("-------------CLASS CIRCLE--------------");

class Circle{
    constructor(radius,color){
        this._radius = radius;
        this._color = color;
    }
    set radius(r){
        return this._radius = r;
    }
    
    get radius(){
        return this._radius;
    }

    set color(c){
        return this._color = c;
    }

    get color(){
        return this._color;
    }

    toString(){
        return `"Circle[radius = ${this._radius},color = ${this._color} ]"`;
    }

    get area(){
        return Math.PI * this._radius * this._radius;
    }

    get circumference(){
        return 2 * Math.PI * this._radius;
    }
}

const obj1 = new Circle(3.0,"Blue");
const obj2 = new Circle(1.0,"Black");
console.log(`Radius: ${obj1.radius}     
Colour: ${obj1._color} 
${obj1.toString()}

Area: ${obj1.area}
Cicumference:${obj1.circumference}



Radius: ${obj2.radius}     
Colour: ${obj2._color} 
${obj2.toString()}

Area: ${obj2.area}
Cicumference:${obj2.circumference}
`)


// TASK 3 ---------------Person Class

console.log("-------------CLASS PERSON--------------");

class Person{
    constructor(name,age,gender,degree,born_yr){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.degree = degree;
        this. born_yr = born_yr;
    }
}

const person1 = new Person("Priya",22,"F","BE",2001);
const person2 = new Person("Dharshini",23,"F","BSC",2000);
console.log(`Name: ${person1.name}
Age: ${person1.age}
Gender: ${person1.gender}
Degree: ${person1.born_yr}

Name: ${person2.name}
Age: ${person2.age}
Gender: ${person2.gender}
Degree: ${person2.born_yr}`);

// TASK 4 ---------------Person Class

console.log("-------------CLASS UBER--------------");

class Uber{
    constructor(km,unit_price = 25){
        this._unit_price = unit_price;
        this._km = km;
    }

    set unit_price(pr){
        return this._unit_price = pr;
    }

    get unit_price(){
        return this._unit_price;
    }

    set km(mtr){
        return this._km = mtr;
    }
    get km(){
        return this._km;
    }
}

const price = new Uber(5);
const price1 = new Uber(4);
console.log(`Price per km: ${price._unit_price}
Km's travelled: ${price._km}
Total Amount payable: ${price._unit_price*price._km}

Price per km: ${price1._unit_price}
Km's travelled: ${price1._km}
Total Amount payable: ${price1._unit_price*price._km}`);