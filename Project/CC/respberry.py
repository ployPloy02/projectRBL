# import RPi.GPIO as GPIO
# from mfrc522 import SimpleMFRC522
# import time
# import requests

# url = 'http://188.166.191.51:8000/saveData'

# reader = SimpleMFRC522()
# try:
#     print("Hold a RFID card near the reader ...")
#     while True:
#         id,text = reader.read()
#         print(id)
#         print(text)
#         data = {'data':text, 'card':id}
#         try:
#             response = requests.post(url,json=data)
#             if response.status_code == 200 or response.status_code == 201:
#                 print("data is done")
#             else:
#                 print("failed to send",response.status_code)
#         except requests.exceptions.RequestException as e:
#             print("Error:",e)
#         time.sleep(0.2)

# except KeyboardInterrupt :
#     GPIO.cleanup()

# import RPi.GPIO as GPIO
# from mfrc522 import SimpleMFRC522
# import tkinter as tk
# from tkinter import messagebox

# reader = SimpleMFRC522()
# def on_button_click():
#   user_input = entry.get()  
#   user_input2 = entry2.get()
#   messagebox.showinfo("Greeting", f"Hello, {user_input, user_input2}!")
  
# def rfid():
#     try:
#         user_input = entry.get()  
#         user_input2 = entry2.get()
#         user_input3 = entry3.get()
#         user_input4 = entry4.get()
#         dataWrite = f"name:{user_input},age:{user_input2},level:{user_input3},course:{user_input4}"
#         reader.write(dataWrite)

#         print("done")
#     finally:
#         GPIO.cleanup()


# root = tk.Tk()
# root.title("Data User")
# root.geometry("720x480")  

# greeting_label = tk.Label(root, text="สวัสดี", font=("Helvetica", 16))
# greeting_label.pack(pady=5)

# entry_label = tk.Label(root, text="Please enter your name:")  
# entry_label.pack(pady=5)

# entry = tk.Entry(root)
# entry.pack(pady=10)  

# entry2_label = tk.Label(root, text="Please enter your age:")  
# entry2_label.pack(pady=5)

# entry2 = tk.Entry(root)
# entry2.pack(pady=10)

# entry3_label = tk.Label(root, text="Please enter your level:")  
# entry3_label.pack(pady=5)

# entry3 = tk.Entry(root)
# entry3.pack(pady=10)

# entry4_label = tk.Label(root, text="Please enter your course:")  
# entry4_label.pack(pady=5)

# entry4 = tk.Entry(root)
# entry4.pack(pady=10)


# button = tk.Button(root,text="Submit",command = rfid)
# button.pack(pady=10)  
# root.mainloop()



