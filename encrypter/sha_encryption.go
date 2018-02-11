package encrypter

import (
	"crypto/sha1"
	"encoding/base64"
)

// EncryptData encrypts the data that has been passed to it with a Sha algorithm
func EncryptData(data string) string {
	byteData := []byte(data)
	hasher := sha1.New()
	hasher.Write(byteData)
	sha := base64.URLEncoding.EncodeToString(hasher.Sum(nil))

	return sha
}
