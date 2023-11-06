import hashlib 
  
# initializing string 
str = "Ranjith"
  

#result = hashlib.sha256(str.encode()) 
result = hashlib.md5(str.encode())  
# printing the equivalent hexadecimal value. 
print("The hexadecimal equivalent of SHA256 is : ") 
print(result.hexdigest()) 