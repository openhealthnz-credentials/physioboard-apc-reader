import * as fs from 'fs'

import test from 'ava'
import pdfParse from 'pdf-parse'

const parsePDF = test.macro(async (t, pdfFileName: string, expectedText: string) => {
  const pdfData = await pdfParse(fs.readFileSync(`./samples/${pdfFileName}`))
  t.is(pdfData.text, expectedText)
})

test(
  'Wrong type of certificate',
  parsePDF,
  'WrongCert.pdf',
  `

CIRTIPHICATE
Jon dough
Is licensed to
Practise Practising`,
)

test(
  'Valid without conditions',
  parsePDF,
  'ValidCertWithConditions.pdf',
  `

2021/2022
This certificate is for the year commencing 1 April 2021. It should be available for inspection by 
your employer and clients. It must be surrendered to the Board upon request.
70-69420
69NEIN
Jane Doe
1 April 1847
31 March 2202
Witchcraft
Only on Tuesdays`,
)

test(
  'Valid with conditions',
  parsePDF,
  'ValidCertWithoutConditions.pdf',
  `

2021/2022
This certificate is for the year commencing 1 April 2021. It should be available for inspection by 
your employer and clients. It must be surrendered to the Board upon request.
70-42069
69BETA
John Doe
1 April 1847
31 March 2202
Arson`,
)

test(
  'Encrypted Certificate',
  parsePDF,
  'EncryptedAes256Example.pdf',
  `

ENCRYPTION Test
 - Should be "encrypted" using AES-256`,
)
