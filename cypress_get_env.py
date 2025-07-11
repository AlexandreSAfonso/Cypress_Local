import os
import json

def get_env_vars_as_json():
  """
  Pega todas as variáveis de ambiente e retorna um JSON.
  """
  env_vars = {}
  for key, value in os.environ.items():
    if key.startswith('CYPRESS_'):
        env_vars[key] = value

  return json.dumps(env_vars, indent=2)

if __name__ == "__main__":
  json_output = get_env_vars_as_json()
  print(json_output)
  # Save the JSON output to a file
  with open('cypress.env.json', 'w') as f:
    f.write(json_output)
  print("Environment variables saved to cypress.env.json")
  # Optionally, you can also print the JSON output to the console
  print(json_output)