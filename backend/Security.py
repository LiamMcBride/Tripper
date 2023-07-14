import secrets
import hashlib
import os
from database import Database
db = Database()
salt = db.retrieve_salt().encode('utf-8')

def salt_and_hash(pwrd):
    h = hashlib.pbkdf2_hmac('sha256', bytes(pwrd, 'utf-8'), salt, 10000)
    return h
