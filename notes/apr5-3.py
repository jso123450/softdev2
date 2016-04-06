import random
'''
def doubler(f):
    def inner():
        name = f()
        return name+name
    return inner

'''
def doubler(f):
    name = f()
    return name+name

@doubler # a "decorator" that completes the closure
def get_name():
    names = ['tom','sue','harry','lisa','sarah','horatio']
    return random.choice(names)

print get_name # returns you 2x the same name
