def warn_the_sheep(queue):    
    n = len(queue) - queue.index('wolf') - 1
    if n < 1:
        return 'Pls go away and stop eating my sheep' 
    else:
        return f'Oi! Sheep number {n}! You are about to be eaten by a wolf!'
def elevator(left, right, call):
    if abs(left-call) >= abs(right-call):
        return "right"
    else:
        return "left"
def repeat_str(repeat, string):
    return repeat * string
def number_to_pwr(number, p): 
    test = 1
    for i in range(p):
        test = test * number
    return test
def no_space(x):
    x = ''.join(x.split())
    return x