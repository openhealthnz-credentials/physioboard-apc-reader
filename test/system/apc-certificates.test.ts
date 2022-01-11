import test from 'ava'

import { ApcFromPDFFile } from '../../src/index'

test('Valid Cert, without a condition', async (t) => {
  t.deepEqual(await ApcFromPDFFile('./samples/ValidCertWithoutConditions.pdf'), {
    fullName: 'John Doe',
    issueDate: new Date('1847-03-31T12:20:56.000Z'),
    expiryDate: new Date('2202-03-30T11:00:00.000Z'),
    practiceScope: 'Arson',
    conditions: null,
  })
})

test('Valid Cert, with a short condition', async (t) => {
  t.deepEqual(await ApcFromPDFFile('./samples/ValidCertWithConditions.pdf'), {
    fullName: 'Jane Doe',
    issueDate: new Date('1847-03-31T12:20:56.000Z'),
    expiryDate: new Date('2202-03-30T11:00:00.000Z'),
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
