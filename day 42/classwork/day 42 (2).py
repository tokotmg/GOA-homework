def one_to_ten():
   for i in range(1, 11):
      print(i)
one_to_ten()

def main():

     num1 = int(input ("First number: "))
     num2 = int(input ("Second number: "))
     num3 = int(input ("Third number: "))
     num4 = int(input ("Fourth number: "))
     num5 = int(input ("Fifth number: "))
     n = max (num1, num2, num3, num4, num5)
     if (n % 2) == 0:
         print ("The largest number is:", n)
     else:
         print ("we don't take odd numbers here")
main()
