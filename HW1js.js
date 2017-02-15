function MakeDesk(){
  this.desk=function(){
  var array=["A","B","C","D","E","F","G","H"];
  var i,j;
  document.write("<table border=1>");
  for(i=8;i>0;i--){
    document.write("<tr class='line",i,"'>");
    for(j=0;j<8;j++){
      if((i%2==0 && j%2==0) || (i%2!=0 && j%2!=0)){
        document.write("<td class='column', bgcolor=white width=70 height=70 align=center >");
        document.write("<font color=black>");
        document.write(array[j],i,"</font> </td>");
        }else{
        document.write("<td class='column', bgcolor=black width=70 height=70 align=center >");
        document.write("<font color=white>");
        document.write(array[j],i,"</font> </td>");
      }
    }
    document.write("</tr>");
  }
  document.write("</table>");
  }

}
var chess=new MakeDesk();
chess.desk();
