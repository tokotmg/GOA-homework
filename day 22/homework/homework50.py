num = int(input("Please enter any integer: "))
print("The Divisors of the number = ")
for i in range(1, num + 1):
    if num % i == 0:
        print(i)