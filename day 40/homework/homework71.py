import re

s1 = "helloWorld"
s2 = re.sub(r'([a-z])([A-Z])', r'\1_\2', s1).lower()

print(s2)