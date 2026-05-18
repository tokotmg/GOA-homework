def zero_fuel(distance_to_pump, mpg, fuel_left):
    distance_possible = mpg * fuel_left
    return distance_possible >= distance_to_pump
def sum_array(arr):
    if not arr or len(arr) < 3:
        return 0
    return sum(arr) - max(arr) - min(arr)
def double_char(s):
    return ''.join([char * 2 for char in s])
def array_plus_array(arr1,arr2):
    return sum(arr1) + sum(arr2)
def is_even(n):
    return n % 2 == 0