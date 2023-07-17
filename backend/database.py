import sqlite3

class Database():
    
    def retrieve_salt(self):

        # Connect to the SQLite database (creates a new database if it doesn't exist)
        conn = sqlite3.connect('tripper.db')

        # Create a cursor object to execute SQL commands
        cursor = conn.cursor()

        # Insert data into the table
        cursor.execute("select value from Pepper;")

        # Retrieve data from the table
        rows = cursor.fetchall()

        # Close the database connection
        conn.close()
        return rows[0][0]
    
    def retrieve_user_by_email(self, email):
        conn = sqlite3.connect('tripper.db')
        cursor = conn.cursor()
        cursor.execute(f"select * from Users where email = '{email}';")
        rows = cursor.fetchall()
        conn.close()
        if len(rows) < 1:
            return None
        
        return rows[0]
        
    def save_user(self, firstName, lastName, email, phone, pword):
        conn = sqlite3.connect('tripper.db')
        cursor = conn.cursor()
        cursor.execute("INSERT INTO Users (firstName, lastName, email, phone, password) VALUES (?, ?, ?, ?, ?)", 
                       (firstName, lastName, email, phone, pword))
        conn.commit()
        conn.close()
        print("User saved")
    
    def retrieve_secret(self, name):
        conn = sqlite3.connect('tripper.db')
        cursor = conn.cursor()
        cursor.execute(f"SELECT secret FROM Secrets where name = '{name}'")
        rows = cursor.fetchall()
        conn.commit()
        conn.close()
        if len(rows) == 0:
            return None
        
        return rows[0][0]
    
    def retrieve_community_by_name(self, name):
        conn = sqlite3.connect('tripper.db')
        cursor = conn.cursor()
        cursor.execute(f"SELECT * FROM Communities where name = '{name}'")
        rows = cursor.fetchall()
        conn.commit()
        conn.close()
        if len(rows) == 0:
            return None
        
        return rows[0]
    
    def save_community(self, name, parentId=-1):
        conn = sqlite3.connect('tripper.db')
        cursor = conn.cursor()
        cursor.execute(f"INSERT INTO Communities (name, parentId) values('{name}', {parentId})")
        conn.commit()
        conn.close()
    
    def add_user_to_community(self, userId, communityId, accessLevel):
        conn = sqlite3.connect('tripper.db')
        cursor = conn.cursor()
        cursor.execute(f"INSERT INTO User_Communities (userId, communityId, accessLevel) values('{userId}', {communityId}, {accessLevel})")
        conn.commit()
        conn.close()