#!/bin/bash
rm test.zip
rm -rf ./done


echo "---------------------------------------"
echo "JS Archiving deflate mode AES256"
time node index.js a test.zip test_file.*  -mm=Deflate -mem=AES256 -mx5 -pTESTPASS -tzip -bt -bd -bb3
echo "JS Extracting deflate mode AES256"
time node index.js x test.zip -pTESTPASS -aoa -o./done -bt -bd -bb3
echo "Archive Listing"
node 7za.js l /working/test.zip  -slt -bt

