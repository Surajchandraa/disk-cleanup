const fs= require('fs');
const path = require("path");
let current=process.cwd()
let defaultbackup=current+"/backup"



function createBackupDirectory(directoryPath=current) {
    const backupPath = path.join(directoryPath, 'backup');
    if (!fs.existsSync(backupPath)) {
        fs.mkdirSync(backupPath);
    }
    return backupPath;
}

function restoreBackup( filename,backupPath=defaultbackup, dirPath=current) {
    const backupFilePath = path.join(backupPath, filename);
    const restoredFilePath = path.join(dirPath, filename);
    fs.copyFileSync(backupFilePath, restoredFilePath);
}




function backupFile(filePath, backupPath=defaultbackup) {
    const fileName = path.basename(filePath);
    const backupFilePath = path.join(backupPath, fileName);

    fs.copyFileSync(filePath, backupFilePath); 
}

function removeBackupFile(fileName,backupPath=defaultbackup) {
    const filePath = path.join(backupPath, fileName);

    fs.unlink(filePath, (err) => {
        if (err) {
            console.error("Error deleting file:", err);
        } else {
            console.log("File deleted successfully");
        }
    });
}


function removeBackupdir(backupPath=defaultbackup) {
    fs.readdir(backupPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            const curPath = path.join(backupPath, file);

            if (fs.lstatSync(curPath).isDirectory()) {
                removeBackupdir(curPath); 
            } else {
                fs.unlinkSync(curPath); 
            }
        });

       
        fs.rmdir(backupPath, err => {
            if (err) {
                console.error('Error deleting directory:', err);
            } else {
                console.log('Backup directory removed successfully');
            }
        });
    });
}


module.exports={createBackupDirectory,restoreBackup,backupFile,removeBackupdir,removeBackupFile};