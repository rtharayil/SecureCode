import bcrypt
password = b"password123"
salt = bcrypt.gensalt(rounds=15)
hashed_password = bcrypt.hashpw(password, salt)

print("bcrypt + Random Salt of  is : " + str(hashed_password) ) 
if bcrypt.checkpw(password, hashed_password):
   print("Password is correct")
else:
   print("Password is incorrect")
