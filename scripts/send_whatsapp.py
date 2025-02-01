from twilio.rest import Client
import os
from dotenv import load_dotenv

load_dotenv()
commit_message = os.getenv('GITHUB_COMMIT_MESSAGE')
account_sid = os.getenv('TWILIO_ACCOUNT_SID')

print(account_sid)

auth_token = os.getenv('TWILIO_AUTH_TOKEN')
client = Client(account_sid, auth_token)

github_actor = os.getenv('GITHUB_ACTOR')          # Usuario que hizo el push
github_repo = os.getenv('GITHUB_REPOSITORY')      # Repositorio
github_ref = os.getenv('GITHUB_REF')            # Rama o referencia
github_commit = os.getenv('GITHUB_COMMIT_MESSAGE') #Nombre de commit

# Mensaje personalizado
commit_message = f"🚀✨ *Nuevo push realizado por:*\n{github_actor}\n\n💾✨ *Repositorio:*\n{github_repo}\n\n🌱✨ *Rama:*\n{github_ref}\n\n📜✨ *Mensaje del commit:*\n{commit_message} \n\n_(NO RESPONDER A ESTE MENSAJE)_"

message = client.messages.create(
  from_='whatsapp:+14155238886',
  body=commit_message,
  to='whatsapp:+5492994291590'
)

message = client.messages.create(
  from_='whatsapp:+14155238886',
  body=commit_message,
  to='whatsapp:+5492995894246'
)

print(message.sid)
