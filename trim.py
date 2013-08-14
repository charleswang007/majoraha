f = open('data-3.txt')
f2 = open('data-4.txt', 'w')
lines = f.readlines()
for line in lines:
    result = "case \"" + line.replace("\n","") + "\": tooltipText = data." + line.replace("\n","") + "; break;\n"
    print result
    f2.write(result)
f2.close()
f.close()
