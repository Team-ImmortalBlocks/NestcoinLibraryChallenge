// SPDX-License-Identifier: MIT

pragma solidity ^0.8.5;

contract Fstorage {
  address owner;

  struct FileProp {
    string ipfsHash;
    bool status;
    string fileName;
    string description;
  }

  struct SharedFile {
    address sharedTo;
    address sharedBy;
    string sharedHash;
  }

  event FileCreation (address owner, string fileName, bool status);

  event FileSharing (address sharedTo, address sharedBy, string sharedHash);

  mapping (address => FileProp[]) public privateFiles;
  mapping (address => SharedFile[]) public sharedFiles;

  FileProp[] publicFiles;


  // add file
  function addFile(string memory _ipfsHash, bool _status, string memory _fileName, string memory _description) public {

    FileProp memory dataToAdd = FileProp(_ipfsHash, _status, _fileName, _description);

    if(_status == true) {
    privateFiles[msg.sender].push(dataToAdd);
    emit FileCreation(msg.sender, _fileName, _status);
    }

    publicFiles.push(dataToAdd);
    emit FileCreation(msg.sender, _fileName, _status);
  }

  function retrievePublicFiles() public view returns (FileProp[] memory) {
    return publicFiles;
  }

  function retrievePrivateFiles(address _owner) public view returns (FileProp[] memory) {
    return privateFiles[_owner];
  }

  // share file
  function shareFile(address _sharedTo, string memory _sharedHash) public {
    require(msg.sender == _sharedTo, "You cant share file to yourself");
    SharedFile memory dataToAdd = SharedFile(_sharedTo, msg.sender, _sharedHash);
    sharedFiles[msg.sender].push(dataToAdd);
    emit FileSharing(_sharedTo, msg.sender, _sharedHash);
  }

  function retrieveSharedFiles() public view returns (SharedFile[] memory) {
    return sharedFiles[msg.sender];
  }

}