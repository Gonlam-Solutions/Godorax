package database

import (
	"database/sql"
	"log"

	// Driver for mySQL
	_ "github.com/go-sql-driver/mysql"
)

// ConnectToDatabase opens a new connection to our database, mysql in this case
func ConnectToDatabase(password string, user string, databaseName string) (*sql.DB, error) {
	db, err := sql.Open("mysql", user+":"+password+"@tcp(127.0.0.1:3306)/"+databaseName)
	if err != nil {
		log.Fatal(err)
	}

	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}

	return db, err
}
