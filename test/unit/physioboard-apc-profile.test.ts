import test from 'ava'

import {
  ParsedApcCert,
  parseCert as physioboardAPCParseCert,
} from '../../src/certProfiles/physioboardAPC'

const parseExtractedText = test.macro(
  (t, extractedText: string[], expectedResult: ParsedApcCert | null) => {
    t.deepEqual(physioboardAPCParseCert(extractedText), expectedResult)
  },
)

test(
  'Valid without conditions',
  parseExtractedText,
  [
    '2021/2022',
    'This certificate is for the year commencing 1 April 2021. It should be available for inspection by ',
    'your employer and clients. It must be surrendered to the Board upon request.',
    '70-42069',
    '69BETA',
    'John Doe',
    '1 April 1847',
    '31 March 2202',
    'Arson',
  ],
  {
    fullName: 'John Doe',
    issueDate: new Date('1847-03-31T12:20:56.000Z'),
    expiryDate: new Date('2202-03-30T11:00:00.000Z'),
    practiceScope: 'Arson',
    conditions: null,
  },
)

test(
  'Valid with conditions',
  parseExtractedText,
  [
    '2021/2022',
    'This certificate is for the year commencing 1 April 2021. It should be available for inspection by ',
    'your employer and clients. It must be surrendered to the Board upon request.',
    '70-69420',
    '69NEIN',
    'Jane Doe',
    '1 April 1847',
    '31 March 2202',
    'Witchcraft',
    'Only on Tuesdays',
  ],
  {
    fullName: 'Jane Doe',
    issueDate: new Date('1847-03-31T12:20:56.000Z'),
    expiryDate: new Date('2202-03-30T11:00:00.000Z'),
    practiceScope: 'Witchcraft',
    conditions: 'Only on Tuesdays',
  },
)

test(
  'Wrong type of certificate',
  parseExtractedText,
  ['CIRTIPHICATE', 'Jon dough', 'Is licensed to', 'Practise Practising'],
  null,
)