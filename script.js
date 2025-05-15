var arr = [
    {
        team:'CSK',
        primary:'Yellow',
        secondary:'Blue'
    },
    {
        team:'RCB',
        primary:'Red',
        secondary:'Black'
    },
    {
        team:'KKR',
        primary:'purple',
        secondary:'Gold'
    },
    {
        team:'MI',
        primary:'Blue',
        secondary:'yellow'
    },
    {
        team:'SRH',
        primary:'Orange',
        secondary:'Black'
    },
    {
        team:'RR',
        primary:'Pink',
        secondary:'Blue'
    },
    {
        team:'DC',
        primary:'Blue',
        secondary:'Red'
    },
    {
        team:'PBKS',
        primary:'Crimson',
        secondary:'Black'
    },
    {
        team:'GT',
        primary:'Blue',
        secondary:'Gold'
    },
    {
        team:'LSG',
        primary:'Green',
        secondary:'Maroon'
    },
]

var btn = document.querySelector('button')
var h1 = document.querySelector('h1')

btn.addEventListener('click',function(){
    var num = Math.floor(Math.random()*arr.length)
    var winner = arr[num];

    h1.innerHTML = winner.team
    h1.style.backgroundColor = winner.primary
    h1.style.color = winner.secondary
    
    
    
})