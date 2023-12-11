const removeTemporary=require('./src/removetemp');
const {filterEqual,filterGreater,filterSmaller}=require('./src/filterfiles');
const {eb_to_bytes,gb_to_bytes,kb_to_bytes,mb_to_bytes,pb_to_bytes,tb_to_bytes,yb_to_bytes,zb_to_bytes} = require('./src/toBytes');
const {createBackupDirectory,restoreBackup,backupFile,removeBackupdir,removeBackupFile} = require('./src/backup');




module.exports={removeTemporary,filterEqual,filterGreater,filterSmaller,eb_to_bytes,gb_to_bytes,kb_to_bytes,mb_to_bytes,pb_to_bytes,tb_to_bytes,yb_to_bytes,zb_to_bytes,createBackupDirectory,restoreBackup,backupFile,removeBackupdir,removeBackupFile}