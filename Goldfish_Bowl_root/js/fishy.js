/* ***********************************************************/
/*     Daragh Walshe        B00064428         April 2013     */
/*     Web. Dev. 2          website project       			 */
/*************************************************************/

//function to calculate prices on the shop page

function getPrices(){

		//cost of shop items
		price1=75.00; price2=116; price3=44; price4=5.25; price5=3.75; price6=12.75; price7=4.10;

		//ammount of items chosen
		item_1=0; item2=0; item3=0; item4=0; item5=0; item6=0; item6=0; item7=0;

		//sub-total for each item
		subTot_1 = 0; subTot_2=0; subTot_3=0; subTot_4=0; subTot_5=0; subTot_6=0; subTot_7=0;

		//get number of items
		item_1 = document.getElementById("item_1").value;
		item_2 = document.getElementById("item_2").value;
		item_3 = document.getElementById("item_3").value;
		item_4 = document.getElementById("item_4").value;
		item_5 = document.getElementById("item_5").value;
		item_6 = document.getElementById("item_6").value;
		item_7 = document.getElementById("item_7").value;


		//subtotal for item
		subTot_1 = eval(item_1) * eval(price1);
		subTot_1 = subTot_1.toFixed(2);
		document.getElementById("subTot_1").value = subTot_1;

		//subtotal for item 2
		subTot_2 = eval(item_2) * eval(price2);
		subTot_2 = subTot_2.toFixed(2);
		document.getElementById("subTot_2").value = subTot_2;

		//subtotal for item 3
		subTot_3 = eval(item_3) * eval(price3);
		subTot_3 = subTot_3.toFixed(2);
		document.getElementById("subTot_3").value = subTot_3;

		//subtotal for item 4
		subTot_4 = eval(item_4) * eval(price4);
		subTot_4 = subTot_4.toFixed(2);
		document.getElementById("subTot_4").value = subTot_4;

		//subtotal for item 5
		subTot_5 = eval(item_5) * eval(price5);
		subTot_5 = subTot_5.toFixed(2);
		document.getElementById("subTot_5").value = subTot_5;

		//subtotal for item 6
		subTot_6 = eval(item_6) * eval(price6);
		subTot_6 = subTot_6.toFixed(2);
		document.getElementById("subTot_6").value = subTot_6;

		//subtotal for item 7
		subTot_7 = eval(item_7) * eval(price7);
		subTot_7 = subTot_7.toFixed(2);
		document.getElementById("subTot_7").value = subTot_7;

		//work out total for all items
		Totamt = eval(subTot_1)+eval(subTot_2)+eval(subTot_3)+eval(subTot_4)+eval(subTot_5)+eval(subTot_6)+eval(subTot_7);
		Totamt = Totamt.toFixed(2);
		document.getElementById("GrandTotal").value = Totamt;

}//end getPrices


//function called on purchase button for shopping cart

function shopout()
{
	alert("Thank you for your custom Your order will be processed shortly.");
}

////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////
//  suprise rollover function

	function suprise()
	{
		// Declare image2 + size
		var image1 = new Image();//var image2 = new Image(100,200);
		// image address
		image1.src = "images/omg.jpg";//image1.src = "images/betta_fish.jpg";

		document.getElementById("prizeImg").src = image1.src;
	}//end suprise


	function backToNormal()
	{
		// Declare image2 + size
		var image2 = new Image();//var image2 = new Image(100,200);
		// image address
		image2.src = "images/prize.jpg";

		document.getElementById("prizeImg").src = image2.src;
	}//end suprise

//////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
//  slideshow code function

function slideshow()
{
	var i, album, photo;

	function restart()
	{
		photo.src = album[i] ;
		(i == (album.length-1) ) ? i=0 : i++ ;
		setTimeout(restart,4000);
	}

	photo = document.getElementById("s_show");

	album=["images/slide2.jpg","images/slide3.jpg","images/slide4.jpg",
		   "images/slide5.jpg","images/slide6.jpg","images/slide7.jpg",
		   "images/slide8.jpg","images/slide1.jpg"];

	var imgArray = new Array();

	for(i=0; i < album.length; i++)
	{
		imgArray[i] = new Image();
		imgArray[i].src = album[i];
    }//end for-loop

	i=0;

	restart();

}//end slideshow



///////////////////////////////////////////////////////////////////
//  function for reveal box on completing membership form

function show(elementIn)
{
	document.getElementById(elementIn).style.visibility='visible';
}//end function show()

function hide(elementIn)
{
	document.getElementById(elementIn).style.visibility='hidden';
}//end function hide()


///////////////////////////////////////////////////////////////////




