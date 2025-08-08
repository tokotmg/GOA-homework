def multiply(a, b):
    return a * b
def simple_multiplication(number):
    if number % 2 == 0:
        return number * 8
    else:
        return number * 9
def get_grade(s1, s2, s3):
    average_score = (s1 + s2 + s3) / 3

    if 90 <= average_score <= 100:
        return "A"
    elif 80 <= average_score < 90:
        return "B"
    elif 70 <= average_score < 80:
        return "C"
    elif 60 <= average_score < 70:
        return "D"
    else:
        return "F"
def make_negative(number):
    if number > 0:
        return -number
    else:
        return number