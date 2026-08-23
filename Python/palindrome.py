def is_palindrome(s):
    clean_s = ''.join(c.lower() for c in s if c.isalnum())
    return clean_s == clean_s[::-1]

print(is_palindrome("A man, a plan, a canal: Panama"))
