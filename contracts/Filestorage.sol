// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.5;

/// @title Nestcoin Library - A decentralised library
/// @author Team Probation - Blockgames - Game phase
/// @notice You can use this contract just to see the workings of a decentralized Library storage system
/// @dev All function calls are currently implemented without side effects
contract Filestorage {
    address owner;

    /// @dev Create a File Property using the @param struct
    struct FileProp {
        string ipfsHash;
        bool status;
        string fileName;
        string description;
    }

    /// @dev Instantiating the Shared Files specifying the address shared to, peprson sharing and sharedHash
    struct SharedFile {
        address sharedTo;
        address sharedBy;
        string sharedHash;
    }

    /// @dev Emit an event on successful file creation and sharing of a file
    event FileCreation(address owner, string fileName, bool status);
    event FileSharing(address sharedTo, address sharedBy, string sharedHash);

    /// @dev Map address creating private file to that file instance. Also Map a sharers @param address to the file instance being shared
    mapping(address => FileProp[]) public privateFiles;
    mapping(address => SharedFile[]) public sharedFiles;

    /// @dev Declare public file
    FileProp[] publicFiles;

    /// @dev This Function uploads a File to the decentralized Library
    /// @param string for IPFS Hash
    /// @param bool for status of the file whether Private or Public
    /// @param string saved in Memory as File Name
    /// @dev the function describes the file creation of both Private and Public Files
    /// @dev Emits an event @param FileCreation on successful upload of the File
    function addFile(
        string memory _ipfsHash,
        bool _status,
        string memory _fileName,
        string memory _description
    ) public {
        FileProp memory dataToAdd = FileProp(
            _ipfsHash,
            _status,
            _fileName,
            _description
        );

        if (_status == true) {
            privateFiles[msg.sender].push(dataToAdd);
            emit FileCreation(msg.sender, _fileName, _status);
        }
        publicFiles.push(dataToAdd);
        emit FileCreation(msg.sender, _fileName, _status);
    }

    /// @dev retrieve the public files available to the message caller as @param view state.
    function retrievePublicFiles() public view returns (FileProp[] memory) {
        return publicFiles;
    }

    /// @dev retrieve the Private files available to the @param msgsender as a @param view instance.
    /// @param owner address is taken as an argument as only the owner can retrieve the @param privateFile here.
    function retrievePrivateFiles(address _owner)
        public
        view
        returns (FileProp[] memory)
    {
        return privateFiles[_owner];
    }

    /// @dev This Function enables for sharing the Private Files between the file owner and the address to be shared to
    /// @param _sharedTo address is the address of the person getting access to the File
    /// @param _sharedHash is the hash of the file to be shared to the @param _sharedTo address
    /// @param FileSharing is emitted on successful sharing of the file to the @param _sharedTo address
    function shareFile(address _sharedTo, string memory _sharedHash) public {
        require(msg.sender == _sharedTo, "You cant share file to yourself");
        SharedFile memory dataToAdd = SharedFile(
            _sharedTo,
            msg.sender,
            _sharedHash
        );
        sharedFiles[msg.sender].push(dataToAdd);
        emit FileSharing(_sharedTo, msg.sender, _sharedHash);
    }

    /// @dev This function retrieves the sharedfiles that was shared to @param _sharedTo
    /// @dev checks to ensure that the caller is not the oener of the file
    /// @dev also returns the @param struct SharedFile.
    function retrieveSharedFiles(address _sharedTo)
        public
        view
        returns (SharedFile[] memory)
    {
        require(
            msg.sender == _sharedTo,
            "you cant retrieve shared files from yourself"
        );
        return sharedFiles[_sharedTo];
    }
}
