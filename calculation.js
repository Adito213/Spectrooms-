 var room_prices = new Array();
 room_prices["Room661"]=20;
 room_prices["Room662"]=25;
 room_prices["Room663"]=35;
 room_prices["Room664"]=75;
 
 var filling_prices= new Array();
 filling_prices["None"]=0;
 filling_prices["One actor"]=10;
 filling_prices["Two actor"]=15;
	 
function getRoomPrice()
{  
    var RoomPrice=0;
    var theForm = document.forms["reservationform"];
    var selectedroom = theForm.elements["selectedroom"];
    for(var i = 0; i < selectedroom.length; i++)
    {
        if(selectedroom[i].checked)
        {
            RoomPrice = room_prices[selectedroom[i].value];
            break;
        }
    }
    return RoomPrice;
}
function getFillingPrice()
{
    var roomfilling=0;
    var theForm = document.forms["reservationform"];
    var selectedFilling = theForm.elements["filling"];
     
    roomfilling = filling_prices[selectedFilling.value];

    return roomfilling;
}

function candlesPrice()
{
    var includehorror=0;
    var theForm = document.forms["reservationform"];
    var includehorror = theForm.elements["includehorror"];

    if(includehorror.checked==true)
    {
        includehorror=5;
    }
    return includehorror;
}

function calculateTotal()
{
    var RoomPrice = getRoomPrice() + getFillingPrice() + candlesPrice();
    
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the Cake $"+RoomPrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}