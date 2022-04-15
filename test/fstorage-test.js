const { expect } = require("chai");
const { ethers } = require("hardhat");


//Fstorage contract deployment

describe("Fstorage", function () {
    let account;
    let Fstorage;
    let fstorage;

    before(async () => {
        account = await ethers.getSigners();
        Fstorage = await ethers.getContractFactory('Fstorage');
        fstorage = await Fstorage.deploy()
        await fstorage.deployed()
    });

    it("store file successfully", async () => {
        const name = 'nameOfTheFile';
        const _cid = 'QmV8cfu6n4NT5xRr2AHdKxFMTZEJrA44qgrBCr739BN9Wb';
        const description = 'descriptionOfTheFile';
        let status = true;

        await fstorage.store({ from: _userAddress }, _cid, status, name, description)
        const file = await fstorage.retrievePublic()

        expect(file['name']).to.be.equal(name)
        expect(file['_cid']).to.be.equal(_cid)
        expect(file['description']).to.be.equal(description)
        expect(file['status']).to.be.bool(true)
    });

    it("Makes a file private", async () => {
        const name = 'nameOfTheFile';
        const _cid = 'QmV8cfu6n4NT5xRr2AHdKxFMTZEJrA44qgrBCr739BN9Wb'
        const description = 'descriptionOfTheFile';
        let status = false;


        await fstorage.store({ from: _userAddress }, _cid, status, name, description)
        const file = await fstorage.retrievePrivate(count)

        expect(file['_name']).to.be.equal(name)
        expect(file['_url']).to.be.equal(url)
        expect(file['_access_level']).to.be.equal('private')

        expect(file['name']).to.be.equal(name)
        expect(file['_cid']).to.be.equal(_cid)
        expect(file['description']).to.be.equal(description)
        expect(file['status']).to.be.equal(status)
    });
});