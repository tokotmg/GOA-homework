def custom_split(text, delimiter=' '):
    result = []
    current_word = ''
    for char in text:
        if char == delimiter:
            if current_word:
                result.append(current_word)
                current_word = ''
        else:
            current_word += char
    
    if current_word:
        result.append(current_word)
        
    return result
def custom_join(seperator, iterable):
    if not iterable:
        return ""
    result = str(iterable[0])
    for i in range(1, len(iterable)):
        result += seperator + str(iterable[i])
    return result