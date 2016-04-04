print [x for x in range(8)]
print [x*x for x in range(8)]
print [ (x,x*x,x*x*x) for x in range(8) ]

p = "myNoobPass1234"

print [x for x in p]
print [x for x in "1234"]

UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

print [ x for x in p if x in UC_LETTERS ]
print [ 1 for x in p if x in UC_LETTERS ]
print [ 1 if x in UC_LETTERS else 0 for x in p ]
print [ 1 if x in p else 0 for x in UC_LETTERS  ]

print "TASKS\n\n"

# Task 1
# Write a function that uses list comprehension to return whether a password 
# meets a minimum threshold: it contains a mixture of upper- and lowercase
# letters, and at least one number.

CAPS_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LOWER_LETTERS = "abcdefghijklmnopqrstuvwxyz"
NUMBERS = "123456789"

def validPass(password):
    list_comp = [ 1 if x in CAPS_LETTERS else 
                  2 if x in LOWER_LETTERS else
                  3 if x in NUMBERS else 
                  0 for x in password ] 
    if ((1 in list_comp) and (2 in list_comp) and (3 in list_comp)):
        return True
    else:
        return False
        
print validPass("asbDcd")
print validPass("123dS") 

# Task 2
# Write a function that uses list comprehension to return a password's strength
# rating. This function should return a low integer for a weak password and a 
# higher integer for a stronger password. (Suggested scale: 1-10) 
# Consider these criteria:
#    * mixture of upper- and lower-case
#    * inclusion of numerals
#    * inclusion of these non-alphanumeric chars: . ? ! & # , ; : - _ *


NONALPHA = ".?!&#,;:-_*"

def passStrength(password):
    pwStrength = 0
    # Rating Scale:
    #     every 5 chars = +1
    #     a mix of upper-lower chars = +1
    #     a number = +1
    #     every nonalpha char = +1
    # NO UPPER LIMIT.
    pwStrength+= len(password)/5
    list_comp = [ 1 if x in CAPS_LETTERS else 
                  2 if x in LOWER_LETTERS else  
                  3 if x in NUMBERS else 
                  4 if x in NONALPHA else 
                  0 for x in password ] 
    if ((1 in list_comp) and (2 in list_comp)):
        pwStrength+= 1
    if (3 in list_comp):
        pwStrength+= 1
    pwStrength+= list_comp.count(4)
    return pwStrength

print passStrength("hi")
print passStrength("Hi")
print passStrength("hiasdFlaerEW")
print passStrength("123s")
print passStrength("123sSId")
print passStrength("@#(*731sL")
print passStrength("joi3u27i3yhOIJ#(@ y8743ihrk3n42h3iu4y2(#)U(!I43ih4uiknl3;4k1o3y8heknk2Hio@YI$#Oji8y85i0p2i4oejfo43i85u39049804uoiejKS87654567898765(*&^%^&*&^%$#$%^&fhIUU*$)#849*$)#*$(#&%8u4i3ji2y3E(*E&*OI#4tlj3484u3208ohDIUH*R(@P)#*u29hujfio8#&@)(*#@)$T*$@($)*!)*()*@#($%((!#(*@()*)932849*U@)(#*@)($8934uo1i4PO!U872y8")
