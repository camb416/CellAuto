(function( global ) {
  var CellApp = (function() {

    // these are private variables
    //var data = "secret";
    //var numRows = -1;
    //var numCols = -1;
    //var cells;

    return {
      // public properites
      //bool: true,
      //string: "a string",
      //array: [ 1, 2, 3, 4 ],
      //object: {
      //  lang: "en-Us"
      //},
      
      init : function(){
        $(".rule-clicker").click(function () {
        if($(this).css("background-color")!="rgb(0, 0, 0)"){
            $(this).css("background-color","black");
        } else {
            $(this).css("background-color","");
        }
        
        
        
    });
    $('.container').append('<img src="http://cameronbrowning.com/cbsig.png"  style="position:absolute;left:20px;bottom:20px;" />');
      },
      makeBlack: function(theObject) {
        // get the current value of `data`
        theObject.css("background-color","#000000");
      },
      getRule: function( num ) {
      var queryString = ".rule-head r"+num;
     // alert($('rule-clicker').eq(num).css("background-color"));
      if($('.rule-clicker').eq(num).css("background-color")=="rgb(0, 0, 0)"){
      return 1;
      } else {
      return 0;
      }
      
      }
      
        
        
        

      
    };
  })();

  // Other things might happen here

  // expose our module to the global object
  global.CellApp = CellApp;

})( this );


/*


CellAuto = {

   numRows : -1,
   numCols: -1,
    
   i: -1,
   j: -1,
    
   cells: -1
    
    
     };
     
    CellAuto.init = function(numCols_in,numRows_in){
        
        numRows = numRows_in;
        numCols = numCols_in;
        cells = new Array(numRows);
        
        for (i=0;i<numRows;i++){
            cells[i] = new Array(numCols);
            
            for(j=0;j<numCols;j++){
                cells[i][j] = 0;
            }
        }
        cells[Math.floor(numCols/2)][0] = 1;
        
        
        rule = new Array(8);
        for(i=0;i<8;i++){
            rule[i] = -1;
        }
        // alert("init seems to be calling okay: "+numCols+", "+numRows);
        
    };
    
    CellAuto.setRule = function(r0,r1,r2,r3,r4,r5,r6,r7){
        rule[0] = r0;
        rule[1] = r1;
        rule[2] = r2;
        rule[3] = r3;
        rule[4] = r4;
        rule[5] = r5;
        rule[6] = r6;
        rule[7] = r7;
    };
    
    CellAuto.checkUndef = function(thisVar){
        if(thisVar === null){
            return 0;
        } else {
            return thisVar;
        }
    };

    CellAuto.calcCell = function(cx,cy){
        if(cy==0) return -1;
        
        var left    =    CellAuto.checkUndef(cells[cx-1][cy-1]);
        var center  =    CellAuto.checkUndef(cells[cx][cy-1]);
        var right   =    CellAuto.checkUndef(cells[cx+1][cy-1]);
        
        if(!left && !center && !right){
            return rule[0];
        } else if(!left && !center && right){
            return rule[1];
        } else if(!left && center && !right){
            return rule[2];
        } else if(!left && center && right){
            return rule[3];
        } else if(left && !center && !right){
            return rule[4];
        } else if(left && !center && right){
            return rule[5];
        } else if(left && center && !right){
            return rule[6];
        } else if(left && center && right){
            return rule[7];
        } else {
            return -1;
        }
    };
    
    CellAuto.calcRow = function(rowNum){
        for(i=0;i<numCols;i++) cells[i][rowNum] = CellAuto.calcCell(i,rowNum);
    };
    
    CellAuto.calcAllTheCells = function(){
        for(j=0;j<numRows;j++) CellAuto.calcRow(j);
    };
    
    */
