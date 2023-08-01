from flask import Flask, request, jsonify
from Security import salt_and_hash
from User import User, retrieve_user_by_email, retrieve_user_by_email_token_verified
from auth import generate_jwt, verify_jwt, get_user_from_token
from Community import Community, new_community, retrieve_community_by_code, is_user_in_community
import json
# Create an instance of the Flask class
app = Flask(__name__)

# Define a route and its corresponding view function
@app.route('/')
def hello():
    return 'Hello, World!'

'''
request will look like:
{
	"email": "email",
	"password": "asdf",
	"phone": "8012315938",
	"firstName": "Liam",
	"lastName": "McBride"
}
'''
@app.route('/signup', methods=['GET', 'POST'])
def sign_up():
	content = request.json
	error_msg = ""
	if not 'email' in content or content.get('email') == "":
		error_msg += "Error: No email field or content\n"
	if not 'password' in content or content.get('password') == "":
		error_msg += "Error: No password field or content\n"
	if not 'phone' in content or content.get('phone') == "":
		error_msg += "Error: No phone field or content\n"
	if not 'firstName' in content or content.get('firstName') == "":
		error_msg += "Error: No firstName field or content\n"
	if not 'lastName' in content or content.get('lastName') == "":
		error_msg += "Error: No lastName field or content\n"
	
	if error_msg != "":
		print(error_msg)
		return jsonify({"message": error_msg})

	content['password'] = (salt_and_hash(content['password']))
	usr = User(-1,content['firstName'],content['lastName'],content['email'],content['phone'],content['password'])
	usr.save()
	return jsonify({"message": "success"})

@app.route('/login', methods=['GET', 'POST'])
def login():
	content = request.json
	hashed_password = ""	
	usr = None
 	# determine if token is present
	if content.get('token') != None and verify_jwt(content.get('token')):
		print("[/login] Verified via token")
		usr = retrieve_user_by_email_token_verified(content.get('email'))
		ret_obj = {
			"email": usr.email,
			"token": content.get('token')
		}
	# user doesn't successfully verify here
	elif content.get('password') == None:
		print("[/login] No password given and token is invalid")
		ret_obj = {"message": "Token not valid and password isn't present. Please reverify with password included."}
	else:
		hashed_password = (salt_and_hash(content['password']))
		usr = retrieve_user_by_email(content['email'], hashed_password)
		print(usr)
		if usr == None:
			print("[/login] Password didn't match or user doesn't exist")
			ret_obj = {"message": "Authentication failed, please use correct email and password."}
		else:
			print("[/login] Verified via password, issued new token")
			ret_obj = {
				"email": usr.email,
				"token": generate_jwt(usr.email, usr.firstName, usr.lastName)
			}
	return jsonify(ret_obj)

@app.route('/create_community', methods=['GET', 'POST'])
def create_community():
    '''
    {
		"token": "...",
		"community_name": "new community"
	}
    '''
    content = request.json
    token = content.get('token')
    
    if verify_jwt(token):
        usr = get_user_from_token(token)
        print(str(usr))
        com = new_community(name=content.get('community_name'))
        com.add_user_to_community(usr, 0)
    
    return jsonify({
		"message": "Community created and user added"
	})

@app.route('/join_community', methods=['GET', 'POST'])
def join_community():
    content = request.json
    print(request.json)
    token = content.get('token')
    code = content.get('code')
    
    if verify_jwt(token):
        print("token verified")
        usr = get_user_from_token(token)
        comm = retrieve_community_by_code(code)
        
        if comm == None:
            return jsonify({"message": "Community not found"})

        if not is_user_in_community(usr.id, comm.id):
            comm.add_user_to_community(usr, 0)
            return jsonify({"message": "User added to community"})
        return jsonify({"message": "User is already in community"})
    
    return jsonify({"message": "Token not valid"})

@app.route('/community', methods=['GET', 'POST'])
def community():
    content = request.json
    token = content.get('token')
    code = content.get('code')
    
    if verify_jwt(token):
        print("token verified")
        usr = get_user_from_token(token)
        comm = retrieve_community_by_code(code)
        
        if comm == None:
            return jsonify({"message": "Community not found"})

        if not is_user_in_community(usr.id, comm.id):
            comm.add_user_to_community(usr, 0)
            return jsonify({"message": "User added to community"})
        return jsonify({"message": "User is already in community"})
    
    return jsonify({"message": "Token not valid"})
    
    

# Run the application if this file is executed directly
if __name__ == '__main__':
    app.run()

