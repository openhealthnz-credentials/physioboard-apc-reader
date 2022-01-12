import test from 'ava'

import { ApcFromPDFFile } from '../../src/index'

test('Valid Cert, without a condition', async (t) => {
  t.deepEqual(await ApcFromPDFFile('./samples/ValidCertWithoutConditions.pdf'), {
    fullName: 'John Doe',
    issueDate: new Date('1 April 1847'),
    expiryDate: new Date('31 March 2202'),
    hpiCpnID: '69BETA',
    registrationNumber: '70-42069',
    practiceScope: 'Arson',
    conditions: null,
  })
})

test('Valid Cert, with a short condition', async (t) => {
  t.deepEqual(await ApcFromPDFFile('./samples/ValidCertWithConditions.pdf'), {
    fullName: 'Jane Doe',
    issueDate: new Date('1 April 1847'),
    expiryDate: new Date('31 March 2202'),
    hpiCpnID: '69NEIN',
    registrationNumber: '70-69420',
    practiceScope: 'Witchcraft',
    conditions: 'Only on Tuesdays',
  })
})

test('Wrong Certificate', async (t) => {
  t.is(await ApcFromPDFFile('./samples/WrongCert.pdf'), null)
})

test('Invalid Certificate', async (t) => {
  await t.throwsAsync(async () => {
    await ApcFromPDFFile('./samples/InvalidCert.pdf')
  })
})

test('Encrypted Certificate', async (t) => {
  t.is(await ApcFromPDFFile('./samples/EncryptedAes256Example.pdf'), null)
})

test.todo('Valid Cert, with a multi-line condition')
