/**
 * Profile for Physioboard APC issued certificates
 * Parses and extracts info from NZ Physio board issued certificates
 * Tested on 2021-2022 certificates
 *
 * @since 0.0.0
 */

/**
 * Profile for Physioboard APC issued certificates
 * Parses and extracts info from NZ Physio board issued certificates
 * Tested on 2021-2022 certificates
 *
 * @since 0.0.0
 */
export function parseCert(inputText: string[]): ParsedApcCert | null {
  if (!(inputText.length == 9 || inputText.length == 10)) {
    return null
  }

  // Certificate Years, at top of page
  if (!/^\d{4}\/\d{4}$/g.test(inputText[0])) {
    return null
  }

  // Certificate Description
  if (
    !/^This certificate is for the year commencing \d{1,2} \w+ \d{4}\. It should be available for inspection by your employer and clients\. It must be surrendered to the Board upon request\.$/g.test(
      inputText[1] + inputText[2],
    )
  ) {
    return null
  }

  // Registration Number
  if (!/^70-\d{5}$/g.test(inputText[3])) {
    return null
  }

  // CPN Number, would be possible to validate check digit, but not needed
  // See here for more info:
  // https://www.health.govt.nz/system/files/documents/publications/10005-hpi-data-set-v1-2.pdf
  if (!/^\d{2}[A-Z ]{4}$/g.test(inputText[4])) {
    return null
  }

  // At this point we are pretty sure it's the correct certificate
  // So we can start parsing the data
  const fullName = inputText[5]
  const issueDate = new Date(inputText[6])
  const expiryDate = new Date(inputText[7])
  if (isNaN(issueDate.getTime()) || isNaN(expiryDate.getTime())) {
    return null
  }

  const practiceScope = inputText[8]

  const conditions: string | null = inputText.length == 10 ? inputText[9] : null

  return {
    fullName,
    issueDate,
    expiryDate,
    practiceScope,
    conditions,
  }
}

/**
 * Object for successfully parsed Physioboard APC issued certificates
 *
 * @since 0.0.0
 */
export interface ParsedApcCert {
  fullName: string
  issueDate: Date
  expiryDate: Date
  practiceScope: string
  conditions: string | null
}