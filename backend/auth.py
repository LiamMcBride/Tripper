import jwt
import time
from database import Database
from User import User

expiration_time = 10080 # one week in secs

def get_secret():
    db = Database()
    return db.retrieve_secret('jwt')

def generate_jwt(email, firstName, lastName):
    header = {
        "alg": "HS256",
        "typ": "JWt"
    }

    payload = {
        "sub": email,
        "name": f"{firstName} {lastName}",
        "iat": int(time.time()),
        "exp": time.time() + expiration_time
    }
    
    encoded_jwt = jwt.encode(payload, get_secret(), algorithm=header["alg"], headers=header)
    return (encoded_jwt)

def verify_jwt(token):
    try:
        decoded_token = (jwt.decode(token, get_secret(), algorithms=['HS256',]))
        if decoded_token.get('exp') > time.time():
            return True
    except:
        return False
    
def get_user_from_token(token):
    try:
        decoded_token = (jwt.decode(token, get_secret(), algorithms=['HS256',]))
        db = Database()
        print(decoded_token)
        usr = db.retrieve_user_by_email(decoded_token.get('sub'))
        print(usr)
        usr = User(usr[5], usr[0], usr[1], usr[2], usr[3], usr[4])
        print(str(usr))
        return usr
    except:
        return None