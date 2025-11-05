import math
def square_or_square_root(arr):
    result = []
    for number in arr:
        sqrt_num = math.sqrt(number)
        if sqrt_num == int(sqrt_num):
            result.append(int(sqrt_num))
        else:
            result.append(number * number)
    return result
def sum_mix(arr):
    total_sum = 0
    for item in arr:
        total_sum += int(item)
    return total_sum
def logical_calc(array, op):
    if not array:
        return None
    result = array[0]
    for i in range(1, len(array)):
        if op == "AND":
            result = result and array[i]
        elif op == "OR":
            result = result or array[i]
        elif op == "XOR":
            result = result ^ array[i] 
    return result
def calculator(x, y, op):
    if not isinstance(x, (int, float)) or not isinstance(y, (int, float)):
        return "unknown value"
    if op == '+':
        return x + y
    elif op == '-':
        return x - y
    elif op == '*':
        return x * y
    elif op == '/':
        if y == 0:
            return None
        return x / y
    else:
        return "unknown value"
def count_sheep(n):
    result = ""
    for iteration in range(1,n+1):
        result = result + str(iteration) + " " + "sheep..."
    return result