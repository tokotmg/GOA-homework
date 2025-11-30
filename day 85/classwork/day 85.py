def find_missing_letter(chars):
    alp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    ind = alp.find(chars[0])
    comp = alp[ind:ind+len(chars)+1]
    for e,i in enumerate(comp):
        if chars[e] != comp[e]:
            return comp[e]
def likes(names):
    textToReturn = ""
    if (len(names) == 0):
        textToReturn = "no one likes this"
    elif (len(names) == 1):
        textToReturn = str(names[0]) + " likes this"
    elif (len(names) > 1 and len(names) < 4):
        for name in range(0, len(names) - 1):
            textToReturn = textToReturn + names[name] + ", "
        textToReturn = textToReturn[:-2]
        textToReturn = textToReturn + " and " + str(names[len(names) - 1]) + " like this"
    else:
        for name in range(0, 2):
            textToReturn = textToReturn + names[name] + ", "
        textToReturn = textToReturn[:-2]
        textToReturn = textToReturn + " and " + str(len(names)-2) + " others like this"
    return textToReturn
def palindrome(num,s):
    if not (type(num) == type(s) == int) or num < 0 or s < 0:
        return "Not valid"
    ans, num = [], max(num, 11)
    while len(ans) != s:
        if num == int(str(num)[::-1]):
            ans.append(num)
        num += 1
    return ans
def kebabize(st):
    result = []
    for char in st:
        if char.isalpha():
            if char.isupper():
                if result and result[-1] != '-':
                    result.append('-')
                result.append(char.lower())
            else:
                result.append(char)
    kebab_string = "".join(result).strip('-')
    return kebab_string