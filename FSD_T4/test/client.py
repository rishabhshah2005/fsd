import socket

host = "127.0.0.1"
port = 5555

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

try:
    s.connect((host,port))

    while True:
        name = s.recv(1024)
        if name==b"exit":
            break
        
        # print(name.decode('utf-8'))
        name="recved"+name.decode("utf-8")
        with open("recved/"+name, 'wb') as f:
            data = s.recv(1024)
            while data!=b'done__':
                f.write(data)
                data = s.recv(1024)
        
    
finally:
    s.close()