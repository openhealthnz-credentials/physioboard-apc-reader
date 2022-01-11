---
title: index.ts
nav_order: 3
parent: Modules
---

## index overview

physioboard-apc-reader
Parses and extracts info from NZ Physio board issued certificates

Added in v0.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [ApcFromPDFBuffer](#apcfrompdfbuffer)
  - [ApcFromPDFFile](#apcfrompdffile)

---

# utils

## ApcFromPDFBuffer

Attempts to parse a PDF buffer and extract the APC certificate info.
Will return null if it doesn't match any profiles

**Signature**

```ts
export async function ApcFromPDFBuffer(pdfBuffer: Buffer): Promise<ParsedApcCert | null>
```

Added in v0.0.0

## ApcFromPDFFile

Attempts read the PDF file from the disk, parse it, and then extract the APC certificate info

**Signature**

```ts
export async function ApcFromPDFFile(filePath: string): Promise<ParsedApcCert | null>
```

Added in v0.0.0
