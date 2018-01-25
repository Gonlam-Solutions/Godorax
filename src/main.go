package main

import (
	databasePkg "GodoraxProject/src/database"
	"log"
)

func main() {
	db, err := databasePkg.ConnectToDatabase("NEITHANJU49GC12", "root", "GODORAXDB")
	if err != nil {
		log.Fatal(err)
	}

	encryptedPassword := databasePkg.EncryptData("julito94")
	databasePkg.StoreData(encryptedPassword, db, "GDACCESS", "user_password")
}
