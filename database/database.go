package database

import (
	"database/sql"
	"log"

	// Driver for mySQL
	_ "github.com/go-sql-driver/mysql"
)

// ConnectToDatabase opens a new connection to our database, mysql in this case
func ConnectToDatabase(databaseName string, databaseAddress string, user string, password string) (*sql.DB, error) {
	db, err := sql.Open("mysql", user+":"+password+"@tcp("+databaseAddress+")/"+databaseName)
	if err != nil {
		log.Fatal(err)
	}

	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}

	return db, err
}
