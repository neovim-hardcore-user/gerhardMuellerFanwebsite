buffer = ""
with open("temp.txt", "r") as f:
    content = f.read()
    for i in content:
        if (i != "\n"):
            buffer += i
        else:
            buffer += "\\n"
    print(buffer)

with open("out.txt", "w") as f:
    f.write(buffer)
