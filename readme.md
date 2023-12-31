# disk-cleanup
This project offers a set of functions to perform disk cleanup operations in Node.js, including backup creation, restoration, and removal of files and directories.

## Prerequisites:
- Make sure you have Node.js installed on your system.

## disk-cleanup-cli available [https://www.npmjs.com/package/disk-cleanup-cli]

## Installation:
```bash
    npm install disk-cleanup
```

## Usage:

note: if u don't give directory path than it will by default take current working directory as path. 

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
    
    
    ***const diskCleanup = require('disk-cleanup');**

    ***const backupPath = diskCleanup.createBackupDirectory('/path/to/directory');**
    - this function will create a backup directory inside the directory given by you.
    - If path of directory is not given than backup directory will be created in current working  directory.
    - console.log('Backup directory created at:', backupPath); 




    ***diskCleanup.backupFile("/path/of/file","/path/of/backup directory");**
    - this function will backup a file you provided by path inside backup directory path you provided.
    - if path of backup directory is not given it will search for backup directory in current working directory/



    ***diskCleanup.restoreBackup( "filename","backupPath", "dirPath");**
    - restore the backup file
    - ***backuppath-*** backup directory path inside which the file is saved or backup.
    - ***filename-*** the name of file
    - ***dirpath-*** path of directory where you want to restore
    - If backup path is not given than it will search for backup directory in you current working directory
    - if dirPath is not given than it will also restore the files in the current working directory.



    ***diskCleanup.removeBackupFile( "fileName", "backupPath");**
    - removes the backup file
    - ***backuppath-*** this is the path of backup directory
    - ***filename-*** file name u want to delete
    - If backupPath is not given than it will search for backup directory in current working directory



    ***diskCleanup.removeBackupdir("backupPath");**
    - remove the backup directory all the backup will be deleted
    - ***backuppath-*** path of backup directory you want to delete
    - If backupPath is not given than it will search for backup directory in current working directory



>> ***Filter by File Size***
- ```js

    const diskCleanup = require('disk-cleanup');


    //size will given in the bytes in all functions
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



    //if u know size not in bytes than you can simply convert by functions:
    diskCleanup.filterSmaller('/path/to/directory', kb_to_bytes(size in bytes), (err, result) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Result:', result);
    }
    });




    
    ```

>> ***Size conversion***
- convert the data size into bytes usefull for filtering functions.
- ```js

    kb_to_bytes(20) // convert 20 kb into bytes
    mb_to_bytes(20) //20 mb to bytes
    gb_to_bytes(10) 
    tb_to_bytes(20)
    pb_to_bytes(20)
    eb_to_bytes(20)
    zb_to_bytes(20)
    yb_to_bytes(20)

    ```

## Contributing:

- Contributions are welcome! Please feel free to submit issues or pull requests. 

## License
- This project is licensed under the MIT License.
- Feel free to modify or expand the README further based on your preferences or any additional information you wish to provide!


