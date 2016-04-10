import time

def wrapper(f):
    def inner(*arg):
        return f(*arg)
    return inner

def foo(n1,n2,s):
    return s

closure = wrapper(foo)
print closure(-2,3,'hello')

#a simple example of applying multiple decorators
def make_bold(fn):
    return lambda : "<b>" + fn() + "</b>"

def make_italic(fn):
    return lambda : "<i>" + fn() + "</i>"

@make_bold
@make_italic
def hello():
    return "hello world"

helloHTML = hello()

print helloHTML #-> "<b><i>hello world</i></b>"


# HW09
def funcArgs(f):
    return lambda *arg: f(*arg)

def funcTime(f):
    start = time.time()
    return lambda *arg: f(*arg) + "\n" + str(time.time() - start)

@funcArgs
@funcTime
def bothInOne(s):
    for x in range(10):
        for y in range(25):
            a = x+y
    return "jooni" + s

print bothInOne(" is so cool")
