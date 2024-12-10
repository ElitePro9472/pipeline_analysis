import FingerprintJS from '@fingerprintjs/fingerprintjs'

// Generate browser fingerprint
export const getBrowserFingerprint = async () => {
  const fp = await FingerprintJS.load()
  const result = await fp.get()
  return result.visitorId // Unique browser identifier
}
