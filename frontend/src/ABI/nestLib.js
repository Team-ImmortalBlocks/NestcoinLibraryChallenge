export const ERC20ABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "count",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "Hash",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "enum Filestorage.Status",
        "name": "status",
        "type": "uint8"
      }
    ],
    "name": "FileCreation",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "_hash", "type": "string" },
      { "internalType": "string", "name": "_status", "type": "string" }
    ],
    "name": "addFile",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_address", "type": "address" }
    ],
    "name": "getSharedFile",
    "outputs": [
      {
        "components": [
          { "internalType": "address", "name": "shared_by", "type": "address" },
          { "internalType": "string", "name": "shared_hash", "type": "string" }
        ],
        "internalType": "struct Filestorage.sharedFile[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "name": "privatefiles",
    "outputs": [
      { "internalType": "uint256", "name": "count", "type": "uint256" },
      { "internalType": "string", "name": "ipfsHash", "type": "string" },
      {
        "internalType": "enum Filestorage.Status",
        "name": "status",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "name": "publicfiles",
    "outputs": [
      { "internalType": "uint256", "name": "count", "type": "uint256" },
      { "internalType": "address", "name": "owner", "type": "address" },
      { "internalType": "string", "name": "ipfsHash", "type": "string" },
      {
        "internalType": "enum Filestorage.Status",
        "name": "status",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_address", "type": "address" }
    ],
    "name": "retrievePrivateFile",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "count", "type": "uint256" },
          { "internalType": "string", "name": "ipfsHash", "type": "string" },
          {
            "internalType": "enum Filestorage.Status",
            "name": "status",
            "type": "uint8"
          }
        ],
        "internalType": "struct Filestorage.Privatefile[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "retrievePublicFile",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "count", "type": "uint256" },
          { "internalType": "address", "name": "owner", "type": "address" },
          { "internalType": "string", "name": "ipfsHash", "type": "string" },
          {
            "internalType": "enum Filestorage.Status",
            "name": "status",
            "type": "uint8"
          }
        ],
        "internalType": "struct Filestorage.Publicfile[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_share_to", "type": "address" },
      { "internalType": "string", "name": "_hashed_file", "type": "string" }
    ],
    "name": "shareFile",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "name": "shared_files",
    "outputs": [
      { "internalType": "address", "name": "shared_by", "type": "address" },
      { "internalType": "string", "name": "shared_hash", "type": "string" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]