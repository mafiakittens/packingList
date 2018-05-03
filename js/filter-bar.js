/* Make expand/conceal button functional.
    Two states: conceal-minus & expand-triangle*/
var functionName = function(){
    var className = d3.select(this).select('span').attr('class')
    if(className=='conceal-minus'){
        d3.select(this).select('span').attr('class','expand-triangle')
    }
    else /*if (className=='expand-triangle')*/ {
        d3.select(this).select('span').attr('class','conceal-minus')
    }
}
d3.selectAll('.expand-conceal')
    .on('click',functionName)
