package database

import (
	"crypto/sha1"
	"database/sql"
	"encoding/base64"
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

// StoreData saves our string to our database
func StoreData(data string, database *sql.DB, table string, field string) error {
	stmt, err := database.Prepare("INSERT INTO " + table + "(" + "USERNAME, " + field + ") " + "VALUES(?, ?)")
	if err != nil {
		log.Fatal(err)
	}

	res, err := stmt.Exec("julio", data)
	if err != nil {
		log.Fatal(err)
	}

	lastID, err := res.LastInsertId()
	if err != nil {
		log.Fatal(err)
	}

	rowCnt, err := res.RowsAffected()
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("ID = %d, affected = %d\n", lastID, rowCnt)

	return err
}

// EncryptData encrypts the data that has been passed to it with a Sha algorithm
func EncryptData(data string) string {
	byteData := []byte(data)
	hasher := sha1.New()
	hasher.Write(byteData)
	sha := base64.URLEncoding.EncodeToString(hasher.Sum(nil))

	return sha
}
