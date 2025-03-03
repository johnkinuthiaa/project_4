const namePrice:any =document.getElementsByClassName("name__price");
let pizzaId:number =1

type Pizza ={
    name:string,
    id:number,
    qty:number,
    price:number
}
type Order ={
    id:number,
    status:"completed"|"pending"|"ordered",
    itemOrdered:string,
    quantity:number
}
const orderQueue:Order[] =[]
let cash =100

const menu:Pizza[] =[
    {
        id:1,
        name:"pizza",
        qty:6,
        price:14
    },
    {
        id:2,
        name:"rice",
        qty:6,
        price:10
    },
    {
        id:3,
        name:"bacon",
        qty:6,
        price:25
    },
    {
        id:4,
        name:"eggs",
        qty:6,
        price:12
    },
    {
        id:5,
        name:"fish",
        qty:6,
        price:50
    },
    {
        id:6,
        name:"chapo",
        qty:6,
        price:20
    },

]

const addNewPizza =(name:string,qty:number,price:number)=>{
    const pizza:Pizza ={
        id:0,
        name:"",
        qty:0,
        price:0
    }

    const exists =menu.find((item:Pizza)=>{return item.name===name})
    if (exists){
        console.log("item already exists")
        return
    }
    pizza.id=pizzaId
    pizza.name=name
    pizza.qty=qty,
        pizza.price=price
    console.log(pizza)
    pizzaId++
    menu.push(pizza)
}
addNewPizza("kiapo",12,100)
addNewPizza("chapatis",12,100)
addNewPizza("vyapati",12,100)
console.log(menu)

const placeOrder =(name:string,quantity:number)=>{
    const exists:Pizza | undefined =menu.find((item:Pizza)=>{
        return item.name ===name
    })
    if(!exists){
        console.log(name+" does not exist")
        return
    }
    if(exists.qty>=quantity){
        exists.qty -=quantity
        cash +=exists.price
        const order:Order ={
            id:0,
            status:"pending",
            itemOrdered:"",
            quantity:0
        }
        order.status ="ordered"
        order.quantity=quantity
        order.itemOrdered=name
        order.id =1
        orderQueue.push(order)

        console.log("item order complete")


    }else{
        console.log("item is not in stock")
    }


}
placeOrder("chapo",3)


const completeOrder =(id: number)=>{
    const order =orderQueue.find((order)=>{
        return order.id ===id
    })
    if(order){
        order.status ="completed"
        console.log("order complete")
    }else{
        console.log("order not found")
    }

}
completeOrder(1)


const getPizzaDetails =(identifier :string | number):Pizza|undefined =>{
    let details:Pizza|undefined


    if(typeof(identifier)==="string"){
        details =menu.find((item:Pizza)=>item.name ===identifier)
        if(typeof(details)==="undefined"){
            console.log("Pizza not found!")
        }
        console.log("Details about pizza with the name "+identifier)
    }
    else if(typeof(identifier) ==="number"){
        details = menu.find((item:Pizza)=>item.id ===identifier)
        if(typeof(details)==="undefined"){
            console.log("Pizza not found!")
        }
        console.log("Details about pizza with id "+identifier)
        console.table(details)
    }

    return details
}
const result =getPizzaDetails("chaposs")
console.log(result)