from database import Database
from Chat import Chat
from User import User
class Community():
    def __init__(self, name, communityId=-1, parentId=-1):
        self.name = name
        self.id = communityId
        self.parent_id = parentId
        
    def save(self):
        db = Database()
        db.save_community(self.name, self.parent_id)
        print("saved community")
    
    def add_user_to_community(self, user, accessLevel):
        db = Database()
        db.add_user_to_community(user.id, self.id, accessLevel)
        print("saved community")
        
    def list_chats(self):
        db = Database()
        data = db.retrieve_chats_by_community_id(self.id)
        return data
        
def retrieve_community_by_name(name):
    db = Database()
    data = db.retrieve_community_by_name(name)
    return Community(data[1], data[0], data[2])

def new_community(name, parentId=-1):
    db = Database()
    db.save_community(name, parentId)
    return retrieve_community_by_name(name)

def retrieve_community_by_code(code):
    db = Database()
    data = db.get_community_from_code(code)
    if data == None:
        return None
    return Community(data[1], data[0], data[2])

def is_user_in_community(userId, communityId):
    db = Database()
    return db.is_user_in_community(userId, communityId)

def retrieve_chats_by_community_id(communityId):
    db = Database()
    db_chats = db.retrieve_chats_by_community_id(communityId)
    chats = []
    for db_chat in db_chats:
        chats.append(Chat(db_chat[1], db_chat[0], communityId))
    return chats