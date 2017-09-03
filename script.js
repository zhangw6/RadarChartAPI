
var colorscale = d3.scale.category10();

//Legend shit
var LegendOptions = ['Smartphone','Tablet'];

ini();


          


function ini(){


//sequence_of_selected_attributes; 

//


var d = [
		  [
			{axis:"School Rank",value:72},
			{axis:"Social Networks",value:56},
			{axis:"Internet Banking",value:42},
			{axis:"News Sportsites",value:34},
			{axis:"Search Engine",value:48},
			{axis:"View Shopping sites",value:14},
			
		  ],[
			{axis:"School Rank",value:48},
			{axis:"Social Networks",value:41},
			{axis:"Internet Banking",value:27},
			{axis:"News Sportsites",value:28},
			{axis:"Search Engine",value:46},
			{axis:"View Shopping sites",value:29},
		
		  ]

		];
	
var max_data=[72, 1, 1, 1,1];
var min_data=[48, 0.41, 0.27, 0.28,0.46,0.14];

var selected_attributes=[];

var colours_of_items=["green","blue","red"];
var sequence_of_selected_attributes=[0,1,1,1];//e.g. want school rank to be as samll as possible

var Test =[4,2,3,4];
console.log(Test.unshift("a"));
console.log(Test);


drawSpiderChart(d,max_data, min_data,selected_attributes,colours_of_items,sequence_of_selected_attributes);


}

  



   function drawSpiderChart(d,max_data, min_data,selected_attributes,colours_of_items,sequence_of_selected_attributes){




var w = document.getElementById('chart').clientWidth-150;
var h = document.getElementById('chart').clientHeight-150;

var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  minValue:[0,0,0,0],
  maxData:[0,0,0,0],
  levels: 6,
  ExtraWidthX: 200,
  color:["yellow","blue","red"],
  sequence:[]

}
   


      mycfg.sequence = sequence_of_selected_attributes;

	  mycfg.color=colours_of_items;

      mycfg.minValue = min_data;

      mycfg.maxData = max_data;

     for(var i=0,j=0; i<selected_attributes.length; ++i){	 
	       splice1(d,(selected_attributes[i]-j));
	       // console.log(selected_attributes[i]);

	        j++;
       }



      // for(var i=0,j=0; i<unchecked_item.length; ++i){	 
	     //   splice2(d,(unchecked_item[i]-j));
	     //   // console.log(selected_attributes[i]);

	     //    j++;
      //  }


       RadarChart.draw("#chart", d, mycfg);



     }



 function splice1(d,n){
   if (n==0){
   	d[0].splice(0,1);
   	d[1].splice(0,1);
   }
   else{
   	d[0].splice(n,n);
   	d[1].splice(n,n);
   }

}


function splice2(d,n){
   if (n==0){
   	d.splice(0,1);
   	d.splice(0,1);
   }
   else{
   	d.splice(n,n);
   	d.splice(n,n);
   }

}




// function splice(d,n){
//    if (n==0){
//    	d[0].splice(0,1);
//    	d[1].splice(0,1);
//    }
//    else{
//    	d[0].splice(i,i);
//    	d[1].splice(i,i);
//    }

// }















//Options for the Radar chart, other than default


//Call function to draw the Radar chart
//Will expect that data is in %'s
////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

// var svg = d3.select('#body')
// 	.selectAll('svg')
// 	.append('svg')
// 	.attr("width", w+300)
// 	.attr("height", h)

// //Create the title for the legend
// var text = svg.append("text")
// 	.attr("class", "title")
// 	.attr('transform', 'translate(90,0)') 
// 	.attr("x", w - 70)
// 	.attr("y", 10)
// 	.attr("font-size", "12px")
// 	.attr("fill", "#404040")
// 	.text("What % of owners use a specific service in a week");
		
// //Initiate Legend	
// var legend = svg.append("g")
// 	.attr("class", "legend")
// 	.attr("height", 100)
// 	.attr("width", 200)
// 	.attr('transform', 'translate(90,20)') 
// 	;
// 	//Create colour squares
// 	legend.selectAll('rect')
// 	  .data(LegendOptions)
// 	  .enter()
// 	  .append("rect")
// 	  .attr("x", w - 65)
// 	  .attr("y", function(d, i){ return i * 20;})
// 	  .attr("width", 10)
// 	  .attr("height", 10)
// 	  .style("fill", function(d, i){ return colorscale(i);})
// 	  ;
// 	//Create text next to squares
// 	legend.selectAll('text')
// 	  .data(LegendOptions)
// 	  .enter()
// 	  .append("text")
// 	  .attr("x", w - 52)
// 	  .attr("y", function(d, i){ return i * 20 + 9;})
// 	  .attr("font-size", "11px")
// 	  .attr("fill", "#737373")
// 	  .text(function(d) { return d; })
// 	  ;	
