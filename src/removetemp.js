const fs= require('fs');
const path = require("path");



function removeTemporary(dpath, callback) {
    fs.readdir(dpath, (err, files) => {
        if (err) {
            callback(err, null);
            return;
        }

        let tempFilesFound = false;
        let errors = [];
        let filesProcessed = 0;

        files.forEach((file, index) => {
            const filePath = path.join(dpath, file);

            if (file.endsWith('.tmp')) {
                console.log('Removing:', filePath);
                fs.unlink(filePath, error => {
                    filesProcessed++;
                    if (error) {
                        errors.push(`Error deleting ${file}: ${error}`);
                    } else {
                        tempFilesFound = true;
                    }

                   

                    if (filesProcessed === files.length) {
                        if (errors.length > 0) {
                            callback(errors.join('\n'), null);
                        } else if (tempFilesFound) {
                            callback(null, 'Deletion successful');
                        } else {
                            callback(null, 'Temporary files not found');
                        }
                    }
                });
            } else {
                filesProcessed++;
                if (filesProcessed === files.length) {
                    if (errors.length > 0) {
                        callback(errors.join('\n'), null);
                    } else if (tempFilesFound) {
                        callback(null, 'Deletion successful');
                    } else {
                        callback(null, 'Temporary files not found');
                    }
                }
            }
        });
    });
}


module.exports=removeTemporary