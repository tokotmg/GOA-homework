def tricky_doubles(num):
    s = str(num)
    mid = len(s) // 2
    if len(s) % 2 == 0 and s[:mid] == s[mid:]:
        return num
    return num * 2
def reload_sheeps(arr):
    target = sorted("sheep")
    return ["sheep" for x in arr if sorted(x) == target]
def lineup_students(st):
    return sorted(
      st.split(), key=lambda x: (len(x), x), reverse=True
  )
def chain(init_val, functions):
    result = init_val
    for function in functions:
        result = function(result)
    return result
def monkeys():
    lyrics = ''
    for i in ['Five', 'Four', 'Three', 'Two']:
        lyrics += f"""{i} little monkeys jumping on the bed,
One fell off and bumped his head.
Mother called the doctor and the doctor said:
No more monkeys jumping on the bed!

"""
    lyrics+="""One little monkey jumping on the bed,
He fell off and bumped his head.
Mother called the doctor and the doctor said:
Put those monkeys right to bed!"""
    return lyrics
