username = input("Enter your username: ")
age = int(input("How old are you: "))
if username == "Tornike":
    print("Username is already taken")
elif age > 18:
    print("You must be 18+ Years old!")
else:
    print("Welcome User!")
