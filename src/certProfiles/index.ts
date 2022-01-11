/**
 * Runs the extracted certificate text against the available certificate profiles
 *
 * @since 0.0.0
 */

import { ParsedApcCert, parseCert as physioboardAPCParseCert } from './physioboardAPC'

const parsers = [physioboardAPCParseCert]

/**
 * Runs the extracted certificate text against the available certificate profiles
 *
 * @since 0.0.0
 */
export function scanForMatches(inputText: string[]): ParsedApcCert | null {
  for (const parser of parsers) {
    const result = parser(inputText)
    if (result) {
      return result
    }
  }
  return null
}
