//natív (hogyan?)

const btn = document.createElement('button');   //btn változóba létrehozunk egy gombot

btn.onclick = function()
{
    alert("Ez egy natív kód!");     //gomb funkciója
}

btn.innerHTML = "Natív Gomb";

document.getElementById("nativ-button-container").appendChild(btn);

//react (mit akarok látni?)

const gomb = React.createElement("button", 
{
    onclick: function ()
    {
        alert("Ez egy react kód");
    },
}, 
    "React gomb"
)

//első paraméter az elemet amit hasznáéni szeretnénk
//második paraméter egy referencia egy natív DOM elemre, hivatkozásipont megadása
ReactDOM.render(gomb, document.getElementById('react-button-container'));

