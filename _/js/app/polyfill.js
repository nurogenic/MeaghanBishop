
if(typeof Object.values !== 'function'){
    Object.values = function(obj) {
        var values = [];
        for(var i in obj){
            if(obj.hasOwnProperty(i)){
                values.push(obj[i]);
            }
        }

        return values;
    }
}

export default {};