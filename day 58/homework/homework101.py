def twice_as_old(dad_years_old, son_years_old):
    return abs(dad_years_old - 2 * son_years_old) 
def final_grade(exam, projects):
    if exam > 90 or projects > 10:
        return 100
    elif exam > 75 and projects >= 5:
        return 90
    elif exam > 50 and projects >= 2:
        return 75
    else:
        return 0
def hero(bullets, dragons):
  bullets_needed = dragons * 2
  return bullets >= bullets_needed
def type_validation(variable, _type): 
    return _type in str(type(variable))
def odd_count(n):
    return n // 2
def nth_even(n):
  if n <= 0:
    raise ValueError("N must be a positive integer.")
  return (n - 1) * 2
def zero_fuel(distance_to_pump, mpg, fuel_left):
    distance_possible = mpg * fuel_left
    return distance_possible >= distance_to_pump
def litres(time):
    return int(time * 0.5)
def invert(lst):
    inverted_list = []
    for num in lst:
        inverted_list.append(-num)
    return inverted_list
def to_jaden_case(string):
    words = string.split()
    capitalized_words = [word.capitalize() for word in words]
    return " ".join(capitalized_words)