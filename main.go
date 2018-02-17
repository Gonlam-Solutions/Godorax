package main

import (
	database "Godorax/database"
	encrypter "Godorax/encrypter"
	resources "Godorax/resources"
	"log"
)

func main() {
	db, err := database.ConnectToDatabase(resources.MainDatabasePassword, resources.MainDatabaseUser, resources.MainDatabase)
	if err != nil {
		log.Fatal(err)
	}

	encryptedPassword := encrypter.EncryptData("julito94")
	database.StoreData(encryptedPassword, db, "GDACCESS", "PASSWORD")
}
