function Person( name, age ) {
    console.log(this)
    this.name = name
    this.age = age
}

const p = new Person( 'Mark', 37 )

console.log( p, p.name, p.age )

const a = new Person( 'Anna', 26 )

console.log( a, a.name, a.age )

const Cat =(name,age)=>{
    console.log(this)
    this.name=name
    this.age=age
}
//const c = new Cat('냥이',1) <==arrow 함수는 this를 가질 수 없음

