// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.5;


/// @title Nestcoin Library - A decentralised library
/// @author Team Probation - Blockgames - Game phase
/// @notice You can use this contract just to see the workings of a decentralized Library storage system
/// @dev All function calls are currently implemented without side effects
contract Filestorage {

/// @dev Three state variables are declared, name which is public and  countPublic and countPrivate whch are assign the value 0
    string public name;
    uint countPublic = 0;
    uint countPrivate = 0;
    
    enum Status { Public, Private }


 
/// @dev The the Publicfile struct takes in count-number of files, owner's address, the ipfsHash of the file and status for public files
    struct Publicfile {
        uint count;
        address owner;
        string ipfsHash;
        Status status;
    }
/// @dev The the Privatefile struct takes in count-number of files, the ipfsHash of the file and status for private files
     struct Privatefile {
        uint count;
        string ipfsHash;
        Status status;
    }
/// @dev The the sharedFile struct takes in the address of the person sharing the file, the Hash of the shared file
    struct sharedFile {
        address shared_by;
        string shared_hash;
    }
/// @dev Here private and shared files are mapped to an address*
    mapping (uint => Publicfile) public publicfiles;
    mapping (address => Privatefile[]) public privatefiles;
    mapping (address => sharedFile[]) public shared_files;

 /// @notice Uploads the file*
/// @param count The number of file uploaded 
/// @param owner The address of the file owner
/// @param Hash The Hash of the file uploaded
/// @param status The status of the file
    event FileCreation ( uint count, address owner, string Hash, Status status);


/// @notice This upload files based on their stauses wheather public or private
/// @param _hash The Hash of the file uploaded
/// @param _status The status of the file uploaded
function addFile ( string memory _hash, string memory _status ) public {
      if(keccak256(abi.encodePacked(_status)) == keccak256(abi.encodePacked("public"))) {
            countPublic ++;
            publicfiles[countPublic] = Publicfile( countPublic, msg.sender, _hash, Status.Public);
            emit FileCreation(countPublic, msg.sender, _hash, Status.Public );
        }
    else {
        countPrivate ++;
        privatefiles[msg.sender].push(Privatefile(countPrivate, _hash, Status.Private ));
        emit FileCreation(countPrivate, msg.sender, _hash, Status.Private );
    }
    }
    
    /// @notice Retrieve public files
    /// @return returns uploaded public files
    function retrievePublicFile () public view returns(Publicfile[] memory) {
      Publicfile[] memory public_files = new Publicfile[] (countPublic);
      for(uint i=0; i<countPublic; i++) {
        Publicfile storage public_file = publicfiles[i];
            public_files[i] = public_file;
      }
      return public_files;
  }
   
  /// @notice Retrieve private files
  /// @return returns uploaded private files accessible only to the uploader
  /// @param _address The address of the uploader
  function retrievePrivateFile (address _address) public view returns (Privatefile[] memory)  {
      require(msg.sender == _address, "You do not have Access to retrieve this file");
      return privatefiles[_address];
  }

  /// @notice Shares uploaded files
  /// @param _share_to The address you want to share the uploaded file with 
  /// @param _hashed_file The hash of the file to be shared
  function shareFile ( address _share_to, string memory _hashed_file ) public {
      require( _share_to != address(0), "Actual address is required");
      shared_files[_share_to].push(sharedFile(msg.sender, _hashed_file));
  }
  
  /// @notice Retrieves files shared with your address
  /// @param _address The address the file is shared to
  /// @return Returns the files shared with an address
  function getSharedFile(address _address) public view returns (sharedFile[] memory) {
      return shared_files[_address];
  }
}
