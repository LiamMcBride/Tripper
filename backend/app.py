from flask import Flask, request, jsonify
from Security import salt_and_hash
from User import User, retrieve_user_by_email
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
	print(content)
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
		return error_msg

	content['password'] = (salt_and_hash(content['password']))
	usr = User(content['firstName'],content['lastName'],content['email'],content['phone'],content['password'])
	usr.save()
	print(jsonify())
	return jsonify()

@app.route('/login', methods=['GET', 'POST'])
def login():
	content = request.json
	print(content)
	content['password'] = (salt_and_hash(content['password']))
	usr = retrieve_user_by_email(content['email'], content['password'])
	if not usr == None:
		return str(usr)
	return "Email and password don't match"

# Run the application if this file is executed directly
if __name__ == '__main__':
    app.run()

