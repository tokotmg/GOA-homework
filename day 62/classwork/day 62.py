def number_to_pwr(number, p): 
    test = 1
    for i in range(p):
        test = test * number
    return test
def leo(oscar):
    if oscar == 88:
        return "Leo finally won the oscar! Leo is happy"
    if oscar == 86:
        return "Not even for Wolf of wallstreet?!"
    if oscar <= 88:
        return "When will you give Leo an Oscar?"
    if oscar >= 88:
        return "Leo got one already!"
def draw_stairs(n):
    if n <= 0:
        return ""
    result = []
    for i in range(n):
        result.append(" " * i + "I")
    return "\n".join(result)
def count_char_occurrences(strng, char):
    list = []
    count = 0
    for i in strng:
        if i==char:
            count+=1
    return count