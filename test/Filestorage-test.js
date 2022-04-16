const { expect, assert } = require("chai");
const { ethers } = require("hardhat");


//Filestorage contract deployment
describe("Filestorage", function () {
    let Filestorage;
    let filestorage;
    let owner;

    before(async () => {
        owner = await ethers.getSigners();
        Filestorage = await ethers.getContractFactory('Filestorage');
        filestorage = await Filestorage.deploy()
        await filestorage.deployed()
    });


    //contract is deployed successfully
    describe('Deployment', function () {
        it('should deploy successfully', async () => {
            const address = await filestorage.address()
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, 'null')
            assert.notEqual(address, undefined)
        })

        //name of the contract
        it('has a name', async () => {
            const name = await filestorage.name()
            assert.equal(name, 'File Storage')
        })
    })

    //Public file struct
    describe('Public file', async () => {
        let result, countPublic
        const count = '1'
        const ipfshash = '_hash'
        const status = '_status'

        before(async () => {
            result = await filestorage.addFile(ipsfhash, status, count, ({ from: owner }))
            countPublic = await filestorage.countPublic()
        })

        //check the event
        it('add file', async () => {

            // assert file is a public file
            assert.equal(countPublic, 1)
            const event = result.logs[0].args
            assert.equal(event.count.toNumber(), countPublic.toNumber(), 'public count is accurate')

            assert.equal(event.ipfshash, ipfshash, 'IPFS hash is accurate')

            assert.equal(event.status, status, 'File is Public ')
            assert.equal(event.owner, owner, 'Owner is correct')

            //Failure: must have hash
            await filestorage.addFile('', status).should.be.rejected;
            //Failure: must have status
            await filestorage.addFile(ipfshash, '').should.be.rejected;
        })

        //retrive public file
        it('Should retrieve Public file', async () => {
            const publicfiles = await filestorage.publicfiles(countPublic)
            assert.equal(publicfiles.count.toNumber(), countPublic.toNumber(), 'public count is accurate')
            assert.equal(publicfiles.owner, owner, 'is owner')
            assert.equal(publicfiles.ipfshash, ipfshash, 'IPFS is ipfs')
            assert.equal(publicfiles.status, status, 'Status is public file')

            await publicfiles.retrievePublicFiles()


        })

    })

    //Private file struct
    describe('Private file', async () => {
        let result, countPrivate
        const count = '1'
        const ipfshash = '_hash'
        const status = '_status'

        before(async () => {
            result = await filestorage.addFile(ipsfhash, status, count)
            countPrivate = await filestorage.countPrivate()
        })

        //check the event
        it('add file', async () => {

            // assert file is a private file
            assert.equal(countPrivate, 1)
            const event = result.logs[0].args
            assert.equal(event.count.toNumber(), countPrivate.toNumber(), 'private file count is accurate')

            assert.equal(event.ipfshash, ipfshash, 'IPFS hash is accurate')

            assert.equal(event.status, status, 'File is private ')
            assert.equal(event.owner, owner, 'Owner is correct')

            //Failure: must have hash
            await filestorage.addFile('', status).should.be.rejected;
            //Failure: must have status
            await filestorage.addFile(ipfshash, '').should.be.rejected;
        })

        it('should retrieve private file', async () => {
            const privatefile = await filestorage.privatefiles(countPrivate)
            assert.equal(privatefile.count.toNumber(), countPrivate.toNumber(), 'private')
            assert.equal(privatefile.ipsfhash, ipfshash, 'ipfs matches')
            assert.equal(privatefile.status, status, 'this file private')
            assert.equal(privatefile.owner, owner, 'only owner can retrieve private file')

            //failure: only owner address can call function
            await privatefile.retrievePrivateFile('').should.be.rejected;
            await privatefile.retrievePrivateFile(ipfshash).should.be.rejected;
            await privatefile.retrievePrivateFile(!owner).should.be.rejected;
        })



    });