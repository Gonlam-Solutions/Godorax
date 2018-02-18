package main

import (
	database "Godorax/database"
	resources "Godorax/resources"
	"log"
)

func main() {
	db, err := database.ConnectToDatabase(resources.MainDatabase, resources.MainDatabaseAddress,
		resources.MainDatabaseUser, resources.MainDatabasePassword)
	if err != nil {
		log.Fatal(err)
	}

	//We do this just not to get a compile error, it will be updates in the nearest future
	db.Close()
}
