import datetime

date = datetime.datetime.now()

print(date)

# Removing microseconds from the datetime object
date = date.replace(microsecond=0)

print(date)
