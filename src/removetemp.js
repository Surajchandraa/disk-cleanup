const fs= require('fs');
const path = require("path");



function remove_temp(dpath, callback) {
    fs.readdir(dpath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            callback(err, null);
            return;
        }

        let tempFilesFound = false;
        let errormsgs = [];

        const deleteFile = (index) => {
            if (index >= files.length) {
                if (errormsgs.length > 0) {
                    callback(errormsgs.join('\n'), null);
                } else if (tempFilesFound) {
                    callback(null, 'Deletion successful');
                } else {
                    callback(null, 'Temporary files not found');
                }
                return;
            }

            const file = files[index];
            const filePath = path.join(dpath, file);

            if (file.endsWith('.tmp')) {
                console.log('Removing:', filePath);
                fs.unlink(filePath, error => {
                    if (error) {
                        errormsgs.push(`Error Deleting ${file} ${error}`);
                    }
                    tempFilesFound = true;
                    deleteFile(index + 1);
                });
            } else {
                deleteFile(index + 1);
            }
        };

        deleteFile(0);
    });
}
