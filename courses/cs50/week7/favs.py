from cs50 import SQL

db = SQL("sqlite:///favorites.db")

favorite = input("Favorite: ")

rows = db.execute("SELECT * FROM favorites WHERE problem=?;", favorite)

for row in rows:
    print(row)


"""

db.execute("BEGIN TRANSACTION")

#code

db.execute("COMMIT")

# db.execute("ROLLBACK")


"""
