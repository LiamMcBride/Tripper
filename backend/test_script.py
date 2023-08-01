from database import Database
from Community import Community, retrieve_chats_by_community_id

db = Database()

x = (retrieve_chats_by_community_id(1))

for chat in x:
    print(str(chat))