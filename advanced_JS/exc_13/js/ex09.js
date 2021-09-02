const dog = {
    type: "Mammal",
    name: "",
    setName: (newName) => {
        this.name = newName;
    }
}

dog.setName("Rex");
console.log(dog.name);