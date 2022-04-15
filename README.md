<h1> Nest Library </h1>
Nest Library is a decentralised library, allowing users to upload books , and retrieve them and sharing it with others.
Books uploaded are available to everyone on the Blockchain except if the upload is made private.

This project is live at https://eager-trousers.surge.sh

The contract can be found at https://rinkeby.etherscan.io/address/0xa1A5F14b48FC4E9CA091F887eFB490Ada6E0576E 




How to use the Nest Library DApp.

1- Connect your Blockchain address via metamask by clicking on the "connect" button and following the prompt 

2- Click on "choose file" to get a pop up that allows you to browse your storage for the books you would like to upload.
Select the book you want to upload.
Input some description about the book in the input box , then click on  the "upload" button.

3- Once you have uploaded the book, a list of books you have uploaded  along with their description will be on display below the upload section.

4- Are you interested in knowing what others uploaded?
Just click on the search button, and search by name, CID, description etc



The contract behind this DApp is called Filestorage

The struct public file takes in file meant to be accessible to the public, while the private struct takes in files meant to be public.
These structs take in the following: the count, the IPFS hash and status, however, Inthe private File struct the owner is not taking in.

The shared struct holds the address of the person who shares a file and the shared hash 

The constructor takes in an argument which is  a string  stored in memory
