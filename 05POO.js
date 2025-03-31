class Person {
    constructor(name, age, height){
        this._name = name
        this._age = age
        this._height = height
    }
    get name(){
        return this._name.split(" ")[0]
    }
    set name(newName){
        this._name = `${newName} ${this._name.split(" ")[1] || ""}`;
    }
    get age(){
        return this._age.split(" ")[0]
    }
    set age(newAge){
        this._age = `${newAge} ${this._age.split(" ")[1] || ""}`;
    }
    get height(){
        return this._height.split(" ")[0]
    }
    set height(newHeight){
        this._height = `${newHeight} ${this._height.split(" ")[1] || ""}`;
    }
}