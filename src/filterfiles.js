const fs= require('fs');
const path = require("path");




function filterSmaller(dpath, size, callback) {
    fs.readdir(dpath, (err, files) => {
        if (err) {
            callback(err,null);
            return;
        }

        let filesProcessed = 0;
        let filesDeleted = 0;
        let errorEncountered = false;

        files.forEach(file => {
            let path_of = path.join(dpath, file);

            fs.stat(path_of, (err, stats) => {
                if (err) {
                    console.error(`Error getting stats for ${file}:`, err);
                    errorEncountered = true;
                    return;
                }

                if (stats.size < size) {
                    fs.unlink(path_of, err => {
                        filesProcessed++;
                        if (err) {
                            console.error(`Error deleting ${file}:`, err);
                            errorEncountered = true;
                        } else {
                            filesDeleted++;
                        }

                        if (filesProcessed === files.length) {
                            if (errorEncountered) {
                                callback('Some files could not be deleted');
                            } else if (filesDeleted === 0) {
                                callback(null, `No files of size smaller than ${size} bytes found`);
                            } else {
                                callback(null, `Successfully deleted ${filesDeleted} files of size smaller than ${size} bytes`);
                            }
                        }
                    });
                } else {
                    filesProcessed++;
                    if (filesProcessed === files.length) {
                        if (errorEncountered) {
                            callback('Some files could not be deleted');
                        } else if (filesDeleted === 0) {
                            callback(null, `No files of size smaller than ${size} bytes found`);
                        } else {
                            callback(null, `Successfully deleted ${filesDeleted} files of size smaller than ${size} bytes`);
                        }
                    }
                }
            });
        });
    });
}





function filterGreater(dpath, size, callback) {
    fs.readdir(dpath, (err, files) => {
        if (err) {
            callback(err,null);
            return;
        }

        let filesProcessed = 0;
        let filesDeleted = 0;
        let errorEncountered = false;

        files.forEach(file => {
            let path_of = path.join(dpath, file);

            fs.stat(path_of, (err, stats) => {
                if (err) {
                    console.error(`Error getting stats for ${file}:`, err);
                    errorEncountered = true;
                    return;
                }

                if (stats.size > size) {
                    fs.unlink(path_of, err => {
                        filesProcessed++;
                        if (err) {
                            console.error(`Error deleting ${file}:`, err);
                            errorEncountered = true;
                        } else {
                            filesDeleted++;
                        }

                        if (filesProcessed === files.length) {
                            if (errorEncountered) {
                                callback('Some files could not be deleted');
                            } else if (filesDeleted === 0) {
                                callback(null, `No files of size greater than ${size} bytes found`);
                            } else {
                                callback(null, `Successfully deleted ${filesDeleted} files of size greater than ${size} bytes`);
                            }
                        }
                    });
                } else {
                    filesProcessed++;
                    if (filesProcessed === files.length) {
                        if (errorEncountered) {
                            callback('Some files could not be deleted');
                        } else if (filesDeleted === 0) {
                            callback(null, `No files of size greater than ${size} bytes found`);
                        } else {
                            callback(null, `Successfully deleted ${filesDeleted} files of size greater than ${size} bytes`);
                        }
                    }
                }
            });
        });
    });
}




                

function filterEqual(dpath, size, callback) {
    fs.readdir(dpath, (err, files) => {
        if (err) {
            callback(err,null);
            return;
        }

        let filesProcessed = 0;
        let filesDeleted = 0;
        let errorEncountered = false;

        files.forEach(file => {
            let path_of = path.join(dpath, file);

            fs.stat(path_of, (err, stats) => {
                if (err) {
                    console.error(`Error getting stats for ${file}:`, err);
                    errorEncountered = true;
                    return;
                }

                if (stats.size === size) {
                    fs.unlink(path_of, err => {
                        filesProcessed++;
                        if (err) {
                            console.error(`Error deleting ${file}:`, err);
                            errorEncountered = true;
                        } else {
                            filesDeleted++;
                        }

                        if (filesProcessed === files.length) {
                            if (errorEncountered) {
                                callback('Some files could not be deleted');
                            } else if (filesDeleted === 0) {
                                callback(null, `No files of size ${size} bytes found`);
                            } else {
                                callback(null, `Successfully deleted ${filesDeleted} files of size ${size} bytes`);
                            }
                        }
                    });
                } else {
                    filesProcessed++;
                    if (filesProcessed === files.length) {
                        if (errorEncountered) {
                            callback('Some files could not be deleted');
                        } else if (filesDeleted === 0) {
                            callback(null, `No files of size ${size} bytes found`);
                        } else {
                            callback(null, `Successfully deleted ${filesDeleted} files of size ${size} bytes`);
                        }
                    }
                }
            });
        });
    });
}


module.exports={filterEqual,filterGreater,filterSmaller}