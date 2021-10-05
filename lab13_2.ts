interface Mountain{
name:string;
height:number;
};
let mountains:Mountain[]=[
{name:'Kilimanjaro',height:19341},
{name:'Everest',height:29029},
{name:'Denali',height:20310}
];
function findNameOfTallestMountain(mountains:Mountain[]):string{
    let tallestmountain=0;
    let currentname='';
    for(let i=0;i<mountains.length;i++){
        if(mountains[i].height>tallestmountain){
            tallestmountain=mountains[i].height;
            currentname=mountains[i].name;
        }
    }
    return currentname;

};
var x = findNameOfTallestMountain(mountains);
console.log(x);

interface Product{
name:string;
price:number;
};
let products:Product[] = [
{name:'Thing',price:10},
{name:'Other Thing', price:11},
{name:'Yet Another Thing', price:17}
];
function calcAverageProductPrice(products:Product[]):number{
let sum=0;
for(let i=0;i<products.length;i++){
    sum=sum+products[i].price;
}
var result = sum/products.length;
return result;
}
var y = calcAverageProductPrice(products);
console.log(y);

interface InventoryItem{
name:string;
price:number;
quantity:number;

};
let items:InventoryItem[]=[
{name:'motor',price:10.00,quantity:10},
{name:'sensor',price:12.50,quantity:4},
{name:'LED',price:1.00,quantity:20}
];

function calcInventoryValue(items:InventoryItem[]):number{
    let sum1=0;
    let sum2=0;
    for(let i=0; i<items.length;i++){
        sum1=items[i].price*items[i].quantity;
        sum2=sum1+sum2;
    }
    return sum2;
};
let z = calcInventoryValue(items);
console.log(z);