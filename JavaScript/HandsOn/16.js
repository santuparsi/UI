class BOX
{
    show()
    {
        console.log('I am a Box')
    }
}
let ob=new BOX();
ob.show();
class Car
{
    constructor(name,year)
    {
        this.name=name;
        this.year=year;
    }
    age()
    {
        let date=new Date();
        return date.getFullYear()-this.year;
    }
    details()
    {
        console.log("Name: "+this.name);
        console.log("Year: "+this.year);
        console.log('The Car is '+this.age()+' Years old')
    }
}
let car=new Car('Ferari',2010);
car.details();