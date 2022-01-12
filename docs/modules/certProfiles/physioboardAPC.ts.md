---
title: certProfiles/physioboardAPC.ts
nav_order: 2
parent: Modules
---

## physioboardAPC overview

Profile for Physioboard APC issued certificates
Parses and extracts info from NZ Physio board issued certificates
Tested on 2021-2022 certificates

Added in v0.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [ParsedApcCert (interface)](#parsedapccert-interface)
  - [parseCert](#parsecert)

---

# utils

## ParsedApcCert (interface)

Object for successfully parsed Physioboard APC issued certificates

**Signature**

```ts
export interface ParsedApcCert {
  registrationNumber: string
  hpiCpnID: string
  fullName: string
  issueDate: Date
  expiryDate: Date
  practiceScope: string
  conditions: string | null
}
```

Added in v0.0.0

## parseCert

Profile for Physioboard APC issued certificates
Parses and extracts info from NZ Physio board issued certificates
Tested on 2021-2022 certificates

**Signature**

```ts
export declare function parseCert(inputText: string[]): ParsedApcCert | null
```

Added in v0.0.0
