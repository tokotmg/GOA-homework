def is_valid_walk(walk):
    north_south =  walk.count('n') == walk.count('s') 
    east_west =  walk.count('e') == walk.count('w')
    length = len(walk) == 10
    return north_south and east_west and length
import string
from codecs import encode as _dont_use_this_
def rot13(message):
    cipher_table = {}
    for ch in range(0, 26):
        cipher_table[chr(ch + ord('A'))] = chr(((ch + 13) % 26) + ord('A'))
        cipher_table[chr(ch + ord('a'))] = chr(((ch + 13) % 26) + ord('a'))
    return "".join([cipher_table[c] if c in cipher_table else c for c in message])
from unittest import TestCase
class TestRot13(TestCase):
    def test_rot13(self):
        self.assertEquals(rot13("test"), "grfg")
        self.assertEquals(rot13("Test"), "Grfg")