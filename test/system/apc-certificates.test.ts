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
test('Valid Cert, with a multi-line condition', async (t) => {
  t.deepEqual(await ApcFromPDFFile('./samples/ValidCertWithLongConditions.pdf'), {
    fullName: 'Jack Turner',
    issueDate: new Date('7 February 1883'),
    expiryDate: new Date('31 March 1883'),
    hpiCpnID: '17ASKD',
    registrationNumber: '70-10932',
    practiceScope: 'Intergalactic Travel',
    conditions:
      '- Only applies to leaving the planet, not return trips.- Jack can only leave the planet between the hours of 9:35am to 9:40am.- Jack can only leave on Fridays.- Jack can only use commercial renewable resources released before 1832.',
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
