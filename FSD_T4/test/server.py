import socket
import os

host = "127.0.0.1"
port = 5555
path = "media/"

try:
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.setsockopt(socket.SOL_SOCKET, socket.SO_SNDBUF, 1024)
    s.bind((host, port))
    s.listen()
    print("server started...")
    conn, addr = s.accept()
    print("connected: ", conn.getpeername())

    files = [path+f for f in os.listdir(path)]
    for f in files:
        with open(f, 'rb') as file:
            print(file.name.split('/')[-1])
            conn.send(file.name.split('/')[-1].encode("utf-8"))
            data = file.read(1024)
            while data:
                conn.send(data)
                data = file.read(1024)
        
        conn.send(b"done__")
    conn.send(b"exit")
    
finally:
    conn.close()
    s.close()