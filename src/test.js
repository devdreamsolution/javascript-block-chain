const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();
const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1551795259702,
      transactions: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0"
    },
    {
      index: 2,
      timestamp: 1551795353632,
      transactions: [],
      nonce: 18140,
      hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      previousBlockHash: "0"
    },
    {
      index: 3,
      timestamp: 1551795459182,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "2f9ba0a03f5111e99c96f1f35c17a339",
          transactionId: "2fb088303f5111e99c96f1f35c17a339"
        },
        {
          amount: 10,
          sender: "NASDFASD9F0AS80DF890AS8D9FASD",
          recipient: "FA99D8F98A0S0DF8SDASDF980SDA8F",
          transactionId: "5cbe31603f5111e99c96f1f35c17a339"
        },
        {
          amount: 20,
          sender: "NASDFASD9F0AS80DF890AS8D9FASD",
          recipient: "FA99D8F98A0S0DF8SDASDF980SDA8F",
          transactionId: "632fab003f5111e99c96f1f35c17a339"
        },
        {
          amount: 30,
          sender: "NASDFASD9F0AS80DF890AS8D9FASD",
          recipient: "FA99D8F98A0S0DF8SDASDF980SDA8F",
          transactionId: "65715da03f5111e99c96f1f35c17a339"
        }
      ],
      nonce: 5287,
      hash: "0000e7a47f8dbcae64f409d6bf9f27c64a9abbf947402f0fe33d898afa314d69",
      previousBlockHash:
        "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
      index: 4,
      timestamp: 1551795687341,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "6e8c25503f5111e99c96f1f35c17a339",
          transactionId: "6e97be103f5111e99c96f1f35c17a339"
        },
        {
          amount: 40,
          sender: "NASDFASD9F0AS80DF890AS8D9FASD",
          recipient: "FA99D8F98A0S0DF8SDASDF980SDA8F",
          transactionId: "ebcafb403f5111e99c96f1f35c17a339"
        },
        {
          amount: 50,
          sender: "NASDFASD9F0AS80DF890AS8D9FASD",
          recipient: "FA99D8F98A0S0DF8SDASDF980SDA8F",
          transactionId: "ee63a7803f5111e99c96f1f35c17a339"
        },
        {
          amount: 60,
          sender: "NASDFASD9F0AS80DF890AS8D9FASD",
          recipient: "FA99D8F98A0S0DF8SDASDF980SDA8F",
          transactionId: "f01994e03f5111e99c96f1f35c17a339"
        }
      ],
      nonce: 87301,
      hash: "0000357e6a2d511429d25ccb93ebf0c0cdf27aa23f50021fc6fbf768f8751648",
      previousBlockHash:
        "0000e7a47f8dbcae64f409d6bf9f27c64a9abbf947402f0fe33d898afa314d69"
    }
  ],
  pendingTransactions: [
    {
      amount: 12.5,
      sender: "00",
      recipient: "f61394903f5111e99c96f1f35c17a339",
      transactionId: "f6960b003f5111e99c96f1f35c17a339"
    }
  ],
  networkNodes: [],
  currentNodeUrl: "http://localhost:3001"
};
// const previousBlockHash = "87765DA6CCF0668238C1D27C35692E11";
// const currentBlockData = [
//   { amount: 101, sender: "B4CEE9C0E5CD571", recipient: "3A3F6E462D48E9" },
//   { amount: 30, sender: "3A3F6E462D48E9", recipient: "FD98FD78A9SD8F" },
//   { amount: 200, sender: "09AD8F9809AS980", recipient: "FD980A8098WQ8R" }
// ];
// const nonce = 111767;
// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

console.log("VALID:", bitcoin.chainIsValid(bc1.chain));
