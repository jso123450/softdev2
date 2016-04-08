import time
import random

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
def funcName(f):
    return lambda: f.func_name

def funcArgs(f):
    return lambda *arg: f(*arg)

def funcTime(f):
    return lambda: time.time()

def allInOne(s):
    @funcTime
    def startTime():
        return "a"
    @funcName
    def johnny():
        return "b"
    i = 0
    while (i < 1000000):
        i+= 1
    @funcArgs
    def jason(s):
        return s
    @funcTime
    def endTime():
        return "c"
    return str(johnny()) + jason(s) + " and it took " + str(endTime() - startTime()) + " seconds to run"

print allInOne(" is so cool")
