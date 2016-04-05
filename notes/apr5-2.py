import random

def get_name():
    names = ['tom','sue','harry','lisa','sarah','horatio']
    return random.choice(names)

def dble(f):
    name = f()
    return name+name

print dble(get_name) # -> 2x same name
# not a closure, just assigning a fxn to a var name (no inner fxn here)

# similar to i = i + 1
get_name = dble(get_name) # -> redefine a fxn in terms of itself
print get_name
