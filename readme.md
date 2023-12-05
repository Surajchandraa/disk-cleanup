# disk-cleanup
This project offers a set of functions to perform disk cleanup operations in Node.js, including backup creation, restoration, and removal of files and directories.

## Prerequisites:
- Make sure you have Node.js installed on your system.

## Installation:
```bash
    npm install disk-cleanup
```

## Usage:


>> ***Removing Temporary Files***
- The removeTemporary function is used to delete temporary files from a specified directory.
- ```js
        const diskCleanup = require('disk-cleanup');

    diskCleanup.removeTemporary('/path/to/directory', (err, result) => {
        if (err) {
            console.error('Error:', err);
        } else {
            console.log('Result:', result);
        }
    });

    ```


>> ***Backup and Restore***
- This package also offers backup and restore functionalities.
- ```js
        const diskCleanup = require('disk-cleanup');


        const backupPath = diskCleanup.createBackupDirectory('/path/to/directory');  // this function will create a backup directory inside the directory given by you
        console.log('Backup directory created at:', backupPath); 


        backupFile("/path/of/file","/path/of/backup directory");
        // this function will backup a file you provided by path inside backup directory path you provided.


        restoreBackup("backupPath", "filename", "dirPath");
        //restore the backup file
        // backuppath- backup directory path inside which the file is saved or backup.
        // filename- the name of file
        // dirpath- path of directory where you want to restore

        removeBackupFile("backupPath", "fileName");
        // removes the backup file
        // backuppath - this is the path of backup directory
        // filename - file name u want to delete

        removeBackupdir("backupPath");
        //remove the backup directory all the backup will be deleted
        //backuppath - path of backup directory you want to delete





    ```

>> ***Filter by File Size***
- ```js

    const diskCleanup = require('disk-cleanup');


    // Deletes files of a specified size from a given directory.
    diskCleanup.filterEqual('/path/to/directory', size, (err, result) => { 
        if (err) {
            console.error('Error:', err);
        } else {
            console.log('Result:', result);
        }
    });


    //Deletes files greater than a specified size from a given directory.
    diskCleanup.filterGreater('/path/to/directory', size, (err, result) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Result:', result);
    }
    });


    //Deletes files smaller than a specified size from a given directory.
    diskCleanup.filterSmaller('/path/to/directory', size, (err, result) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Result:', result);
    }
    });









    
    ```