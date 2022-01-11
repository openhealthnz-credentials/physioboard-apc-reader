/**
 * physioboard-apc-reader
 * Parses and extracts info from NZ Physio board issued certificates
 *
 * @since 0.0.0
 */

import * as fs from 'fs'

import pdfParse from 'pdf-parse'

import { scanForMatches } from './certProfiles'
import { ParsedApcCert } from './certProfiles/physioboardAPC'

/**
 * Attempts to parse a PDF buffer and extract the APC certificate info.
 * Will return null if it doesn't match any profiles
 *
 * @param {Buffer} pdfBuffer The PDF buffer to parse
 * @returns {ParsedApcCert | null} The ParsedApcCert object or null if it doesn't match any profiles
 *
 * @since 0.0.0
 */
export async function ApcFromPDFBuffer(
  pdfBuffer: Buffer,
): Promise<ParsedApcCert | null> {
  const pdfData = await pdfParse(pdfBuffer)
  const pdfExtractedText = pdfData.text.split('\n').filter((s) => s.length > 0)
  const result = scanForMatches(pdfExtractedText)

  return result
}

/**
 * Attempts read the PDF file from the disk, parse it, and then extract the APC certificate info
 *
 * @param {string} filePath The PDF file path to parse
 * @returns {ParsedApcCert | null} The ParsedApcCert object or null if it doesn't match any profiles
 *
 * @since 0.0.0
 */
export async function ApcFromPDFFile(filePath: string): Promise<ParsedApcCert | null> {
  return await ApcFromPDFBuffer(fs.readFileSync(filePath))
}
