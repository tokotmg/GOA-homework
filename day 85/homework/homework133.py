def mine_location(field):
    for subfield in field:
        if 1 in subfield: return [field.index(subfield), subfield.index(1)]
from urllib.parse import urlparse, parse_qs, urlencode, urlunparse
def strip_url_params(url, params_to_strip=None):
    if params_to_strip is None:
        params_to_strip = []
    parsed_url = urlparse(url)
    query_params = parse_qs(parsed_url.query)
    unique_params = {}
    for key, values in query_params.items():
        if key not in params_to_strip:
            unique_params[key] = [values[0]]  # Keep only the first value
    new_query = urlencode(unique_params, doseq=True)
    new_url = urlunparse(parsed_url._replace(query=new_query))
    return new_url
def longest_palindrome (s):
    n = len(s)
    if n <= 1:
        return n
    max_length = 0
    def expand_around_center(left, right):
        nonlocal max_length
        while left >= 0 and right < n and s[left] == s[right]:
            current_length = right - left + 1
            max_length = max(max_length, current_length)
            left -= 1
            right += 1
    for i in range(n):
        expand_around_center(i, i)
        expand_around_center(i, i + 1)
    return max_length
