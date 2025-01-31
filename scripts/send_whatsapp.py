# import os
# from twilio.rest import Client
# from dotenv import load_dotenv  # Importa la función para cargar el archivo .env

# # Cargar variables de entorno desde .env
# load_dotenv()

# print(f"Detectado un push")

# # Obtener credenciales de Twilio desde variables de entorno
# account_sid = os.getenv('TWILIO_ACCOUNT_SID')
# auth_token = os.getenv('TWILIO_AUTH_TOKEN')

# client = Client(account_sid, auth_token)



# twilio_whatsapp_number = 'whatsapp:+14155238886'  # Número de Twilio (sandbox)
# group_whatsapp_number = 'whatsapp:+542994291590'  # Número de destino (debe estar unido al sandbox)

# # Obtener información del evento de GitHub
# github_actor = os.getenv('GITHUB_ACTOR')          # Usuario que hizo el push
# github_repo = os.getenv('GITHUB_REPOSITORY')      # Repositorio
# github_ref = os.getenv('GITHUB_REF')              # Rama o referencia

# # Mensaje personalizado
# commit_message = f"Nuevo push realizado por: {github_actor}\nRepositorio: {github_repo}\nRama: {github_ref}"

# print(commit_message)

# # Enviar mensaje
# message = client.messages.create(
#     body=commit_message,
#     from_=twilio_whatsapp_number,
#     to=group_whatsapp_number
# )

# print(f"Mensaje enviado: {message.sid}")

from twilio.rest import Client
import os
from dotenv import load_dotenv

load_dotenv()
account_sid = os.getenv('TWILIO_ACCOUNT_SID')

print(account_sid)

auth_token = os.getenv('TWILIO_AUTH_TOKEN')
client = Client(account_sid, auth_token)

github_actor = os.getenv('GITHUB_ACTOR')          # Usuario que hizo el push
github_repo = os.getenv('GITHUB_REPOSITORY')      # Repositorio
github_ref = os.getenv('GITHUB_REF')              # Rama o referencia

# Mensaje personalizado
commit_message = f"Nuevo push realizado por: {github_actor}\nRepositorio: {github_repo}\nRama: {github_ref}\n 🚀🚀🚀 "

message = client.messages.create(
  from_='whatsapp:+14155238886',
  body=commit_message,
  to='whatsapp:+5492994291590'
)

print(message.sid)