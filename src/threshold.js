const fs= require('fs');
const path = require("path");



function filter_smaller_than(dpath,size){
    fs.readdir(dpath,(err,files)=>{

        if(err){
            return err;
        }
        files.forEach(file=>{
            let path_of = path.join(dpath, file);
            const stats = fs.statSync(path_of);

            if(stats.size<size){
                fs.unlink(path_of,err=>{
                    if (err) {
                        console.error('Error deleting file:', err);
                    }
                })
            }
            else{
                console.log(`files greater than ${size} not found`)
            }
            
        })
    })
}


function filter_greater_than(dpath,size){
    fs.readdir(dpath,(err,files)=>{

        if(err){
            return err;
        }
        files.forEach(file=>{
            let path_of = path.join(dpath, file);
            const stats = fs.statSync(path_of);

            if(stats.size>size){
                fs.unlink(path_of,err=>{
                    if (err) {
                        console.error('Error deleting file:', err);
                    }
                })
            }
            else{
                console.log(`files greater than ${size} not found`)
            }
            
        })
    })
}


function filter_equal_to(dpath,size){
    fs.readdir(dpath,(err,files)=>{

        if(err){
            return err;
        }
        files.forEach(file=>{
            let path_of = path.join(dpath, file);
            const stats = fs.statSync(path_of);

            if(stats.size==size){
                fs.unlink(path_of,err=>{
                    if (err) {
                        console.error('Error deleting file:', err);
                    }
                })
            }
            else{
                console.log(`files equal to ${size} not found`)
            }
            
        })
    })
}