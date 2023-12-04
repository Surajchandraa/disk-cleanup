const removeTemporary=require('./src/removetemp');
const {filterEqual,filterGreater,filterSmaller}=require('./src/filterfiles')

filterEqual("/home/suraj/Desktop/bigger-packages/disk_cleanup/suraj",3,(err,result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
})