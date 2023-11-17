let fileSizes = {
  testFile1: 65,
  testFile2: 48,
};

function getFileSize(filename, cb) {
  setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
}

function sumFileSizes(filename1, filename2, cb) {
  getFileSize(filename1, (size1) => {
    if (size1 === undefined) {
      cb(undefined, new Error(`File ${filename1} not found`));
      return;
    }

    getFileSize(filename2, (size2) => {
      if (size2 === undefined) {
        cb(undefined, new Error(`File ${filename2} not found`));
        return;
      }

      const sum = size1 + size2;
      cb(sum);
    });
  });
}

export { getFileSize, sumFileSizes, fileSizes };
