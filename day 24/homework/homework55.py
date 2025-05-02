correct_guess = 5
guess_count = 0
guess_limit = 3
while guess_count<guess_limit:
    guess = int(input('Guess a number from 1 to 10: '))
    guess_count += 1
    if guess != correct_guess:
        print("Wrong number")

    elif guess == correct_guess:
        print("You Win")
        break
else:
    print("You Lose")