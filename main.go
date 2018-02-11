package main

import (
	database "Godorax/database"
	encrypter "Godorax/encrypter"
	"log"
)

func main() {
	db, err := database.ConnectToDatabase("NEITHANJU49GC12", "root", "GODORAXDB")
	if err != nil {
		log.Fatal(err)
	}

	encryptedPassword := encrypter.EncryptData("julito94")
	database.StoreData(encryptedPassword, db, "GDACCESS", "PASSWORD")
}
