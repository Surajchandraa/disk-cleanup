function kb_to_bytes(data){
    return data*1024;
}
function mb_to_bytes(data){
    return data*1024*1024;
}
function gb_to_bytes(data){
    return data*1024*1024*1024;
}
function tb_to_bytes(data){
    return data*1024*1024*1024*1024;
}

function pb_to_bytes(data) {
    return data * 1024 * 1024 * 1024 * 1024 * 1024;
}

function eb_to_bytes(data) {
    return data * 1024 * 1024 * 1024 * 1024 * 1024 * 1024;
}

function zb_to_bytes(data) {
    return data * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024;
}

function yb_to_bytes(data) {
    return data * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024;
}


module.exports={eb_to_bytes,gb_to_bytes,kb_to_bytes,mb_to_bytes,pb_to_bytes,tb_to_bytes,yb_to_bytes,zb_to_bytes}