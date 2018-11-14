var greeter = new greeter();


class anotherCustomer{
    private firstName: string;
    private lastName: string;

    constructor(firstname: string, lastname: string){
        this.firstName=firstname;
        this.lastName=lastname;

    public greeter()
    {
            console.log(`Hello ${this.firstname} ${this.lastname}`);
    }

    }
}
let anotherCustomer = new anotherCustomer("John","Smith");
anotherCustomer.greeter();