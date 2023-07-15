from database import Database

class User():
    def __init__(self, firstName, lastName, email, phone, password):
        self.firstName = firstName
        self.lastName = lastName
        self.email = email
        self.phone = phone
        self.password = password
        
    def save(self):
        print("saving")
        db = Database()
        db.save_user(self.firstName, self.lastName, self.email, self.phone, self.password)
        
    def __str__(self):
        return f"[{self.firstName} {self.lastName}, {self.email}, {self.phone}]"
        
def retrieve_user_by_email(email, pword):
    db = Database()
    data = db.retrieve_user_by_email(email)
    
    if data == None:
        return None
    
    if data[4] == pword:
        return User(data[0],data[1],data[2],data[3],data[4],)
    else:
        return None