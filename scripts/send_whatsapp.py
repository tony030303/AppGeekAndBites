import os
from twilio.rest import Client

print(f"Detectado un push")

# Obtener credenciales de Twilio desde variables de entorno
account_sid = os.getenv('TWILIO_ACCOUNT_SID')
auth_token = os.getenv('TWILIO_AUTH_TOKEN')
twilio_whatsapp_number = 'whatsapp:+14155238886'  # Número de Twilio (sandbox)
group_whatsapp_number = 'whatsapp:+542994291590'  # Número de destino (debe estar unido al sandbox)

# Obtener información del evento de GitHub
github_actor = os.getenv('GITHUB_ACTOR')          # Usuario que hizo el push
github_repo = os.getenv('GITHUB_REPOSITORY')      # Repositorio
github_ref = os.getenv('GITHUB_REF')              # Rama o referencia

# Mensaje personalizado
commit_message = f"Nuevo push realizado por: {github_actor}\nRepositorio: {github_repo}\nRama: {github_ref}"

# Enviar mensaje
client = Client(account_sid, auth_token)
message = client.messages.create(
    body=commit_message,
    from_=twilio_whatsapp_number,
    to=group_whatsapp_number
)

print(f"Mensaje enviado: {message.sid}")