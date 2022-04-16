export const ERC20ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "fileName",
        type: "string",
      },
      { indexed: false, internalType: "bool", name: "status", type: "bool" },
    ],
    name: "FileCreation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sharedTo",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sharedBy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "sharedHash",
        type: "string",
      },
    ],
    name: "FileSharing",
    type: "event",
  },
  {
    inputs: [
      { internalType: "string", name: "_ipfsHash", type: "string" },
      { internalType: "bool", name: "_status", type: "bool" },
      { internalType: "string", name: "_fileName", type: "string" },
      { internalType: "string", name: "_description", type: "string" },
    ],
    name: "addFile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "privateFiles",
    outputs: [
      { internalType: "string", name: "ipfsHash", type: "string" },
      { internalType: "bool", name: "status", type: "bool" },
      { internalType: "string", name: "fileName", type: "string" },
      { internalType: "string", name: "description", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    name: "retrievePrivateFiles",
    outputs: [
      {
        components: [
          { internalType: "string", name: "ipfsHash", type: "string" },
          { internalType: "bool", name: "status", type: "bool" },
          { internalType: "string", name: "fileName", type: "string" },
          { internalType: "string", name: "description", type: "string" },
        ],
        internalType: "struct Fstorage.FileProp[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "retrievePublicFiles",
    outputs: [
      {
        components: [
          { internalType: "string", name: "ipfsHash", type: "string" },
          { internalType: "bool", name: "status", type: "bool" },
          { internalType: "string", name: "fileName", type: "string" },
          { internalType: "string", name: "description", type: "string" },
        ],
        internalType: "struct Fstorage.FileProp[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_sharedTo", type: "address" }],
    name: "retrieveSharedFiles",
    outputs: [
      {
        components: [
          { internalType: "address", name: "sharedTo", type: "address" },
          { internalType: "address", name: "sharedBy", type: "address" },
          { internalType: "string", name: "sharedHash", type: "string" },
        ],
        internalType: "struct Fstorage.SharedFile[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_sharedTo", type: "address" },
      { internalType: "string", name: "_sharedHash", type: "string" },
    ],
    name: "shareFile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "sharedFiles",
    outputs: [
      { internalType: "address", name: "sharedTo", type: "address" },
      { internalType: "address", name: "sharedBy", type: "address" },
      { internalType: "string", name: "sharedHash", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
];
